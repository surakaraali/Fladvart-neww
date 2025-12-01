import { NextRequest, NextResponse } from 'next/server';
import { pool } from '@/lib/db';
import { sendContactNotificationEmail, sendContactConfirmationEmail } from '@/lib/email';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, company, message, serviceInterest } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json({
        success: false,
        error: 'Name, email, and message are required fields'
      }, { status: 400 });
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({
        success: false,
        error: 'Please provide a valid email address'
      }, { status: 400 });
    }

    // Validate message length
    if (message.length < 10) {
      return NextResponse.json({
        success: false,
        error: 'Message must be at least 10 characters long'
      }, { status: 400 });
    }

    if (message.length > 5000) {
      return NextResponse.json({
        success: false,
        error: 'Message is too long (maximum 5000 characters)'
      }, { status: 400 });
    }

    // Insert into database
    const result = await pool.query(`
      INSERT INTO contact_messages (
        name, 
        email, 
        phone, 
        company, 
        message, 
        service_interest,
        is_read,
        created_at
      )
      VALUES ($1, $2, $3, $4, $5, $6, false, CURRENT_TIMESTAMP)
      RETURNING id, created_at
    `, [
      name.trim(),
      email.trim().toLowerCase(),
      phone?.trim() || null,
      company?.trim() || null,
      message.trim(),
      serviceInterest?.trim() || null
    ]);

    const savedMessage = result.rows[0];

    // Send emails asynchronously (don't wait for completion)
    const emailData = {
      name,
      email,
      phone,
      company,
      message,
      serviceInterest
    };

    // Send notification to admin
    console.log('Sending admin notification email...');
    sendContactNotificationEmail(emailData)
      .then(result => {
        if (result.success) {
          console.log('Admin notification email sent successfully');
        } else {
          console.error('Failed to send admin notification:', result.error);
        }
      })
      .catch(err => {
        console.error('Failed to send admin notification:', err);
      });

    // Send confirmation to customer
    console.log('Sending customer confirmation email...');
    sendContactConfirmationEmail(emailData)
      .then(result => {
        if (result.success) {
          console.log('Customer confirmation email sent successfully');
        } else {
          console.error('Failed to send customer confirmation:', result.error);
        }
      })
      .catch(err => {
        console.error('Failed to send customer confirmation:', err);
      });

    return NextResponse.json({
      success: true,
      data: {
        id: savedMessage.id,
        createdAt: savedMessage.created_at
      },
      message: 'Thank you for your message! We will get back to you soon.'
    }, { status: 201 });

  } catch (error) {
    console.error('Contact form submission error:', error);
    
    // Check if it's a database error
    if (error instanceof Error) {
      if (error.message.includes('duplicate key')) {
        return NextResponse.json({
          success: false,
          error: 'This message has already been submitted'
        }, { status: 409 });
      }
    }

    return NextResponse.json({
      success: false,
      error: 'Failed to submit your message. Please try again later.'
    }, { status: 500 });
  }
}
