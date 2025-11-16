import AdminLayout from '../AdminLayout';

export default function SettingsAdmin() {
  return (
    <AdminLayout activeSection="settings">
      <div className="space-y-6 font-sans">
        {/* Header */}
        <div>
          <h3 className="text-xl font-semibold text-gray-900">Settings</h3>
          <p className="text-gray-600 mt-1">Manage system settings and preferences</p>
        </div>

        {/* Coming Soon Card */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-12 text-center">
          <div className="text-gray-500">
            <div className="text-6xl mb-4">⚙️</div>
            <h4 className="text-xl font-semibold text-gray-900 mb-2">
              System Settings
            </h4>
            <p className="text-gray-600 mb-4">
              This section will provide access to system configuration, user management, and security settings.
            </p>
            <div className="text-sm text-gray-500">
              Coming in the next update
            </div>
          </div>
        </div>

        {/* Preview of features */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-50 rounded-lg p-6 border-2 border-dashed border-gray-300">
            <h5 className="font-semibold text-gray-700 mb-2">User Management</h5>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• Admin accounts</li>
              <li>• Password management</li>
              <li>• Role permissions</li>
              <li>• Login history</li>
            </ul>
          </div>
          
          <div className="bg-gray-50 rounded-lg p-6 border-2 border-dashed border-gray-300">
            <h5 className="font-semibold text-gray-700 mb-2">Site Configuration</h5>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• Site metadata</li>
              <li>• SEO settings</li>
              <li>• Analytics integration</li>
              <li>• Backup management</li>
            </ul>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}
