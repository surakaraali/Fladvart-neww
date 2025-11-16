import AdminLayout from '../AdminLayout';

export default function ContactAdmin() {
  return (
    <AdminLayout activeSection="contact">
      <div className="space-y-6 font-sans">
        {/* Header */}
        <div>
          <h3 className="text-xl font-semibold text-gray-900">Contact Information</h3>
          <p className="text-gray-600 mt-1">Manage your contact details and settings</p>
        </div>

        {/* Coming Soon Card */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-12 text-center">
          <div className="text-gray-500">
            <div className="text-6xl mb-4">📞</div>
            <h4 className="text-xl font-semibold text-gray-900 mb-2">
              Contact Management
            </h4>
            <p className="text-gray-600 mb-4">
              This section will allow you to update contact information, manage contact forms, and handle inquiries.
            </p>
            <div className="text-sm text-gray-500">
              Coming in the next update
            </div>
          </div>
        </div>

        {/* Preview of features */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-50 rounded-lg p-6 border-2 border-dashed border-gray-300">
            <h5 className="font-semibold text-gray-700 mb-2">Contact Settings</h5>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• Phone numbers</li>
              <li>• Email addresses</li>
              <li>• Office locations</li>
              <li>• Social media links</li>
            </ul>
          </div>
          
          <div className="bg-gray-50 rounded-lg p-6 border-2 border-dashed border-gray-300">
            <h5 className="font-semibold text-gray-700 mb-2">Form Management</h5>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• Contact form builder</li>
              <li>• Message notifications</li>
              <li>• Auto-reply settings</li>
              <li>• Message history</li>
            </ul>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}
