-----24.11.2025
ALTER TABLE contact_messages 
ADD COLUMN IF NOT EXISTS is_processed BOOLEAN DEFAULT false;

-- Add updated_at column if it doesn't exist
ALTER TABLE contact_messages 
ADD COLUMN IF NOT EXISTS updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP;

-- Create index on is_processed
CREATE INDEX IF NOT EXISTS idx_contact_messages_processed ON contact_messages(is_processed);

-- Verify the changes
SELECT column_name, data_type, is_nullable, column_default
FROM information_schema.columns
WHERE table_name = 'contact_messages'
ORDER BY ordinal_position;

