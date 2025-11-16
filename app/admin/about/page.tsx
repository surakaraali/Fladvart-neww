import AdminLayout from '../AdminLayout';

export default function AboutAdmin() {
  return (
    <AdminLayout activeSection="about">
      <div className="space-y-6 font-sans">
        {/* Header */}
        <div>
          <h3 className="text-xl font-semibold text-gray-900">About Page Content</h3>
          <p className="text-gray-600 mt-1">Manage your about page content</p>
        </div>

        {/* Coming Soon Card */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-12 text-center">
          <div className="text-gray-500">
            <div className="text-6xl mb-4">🚧</div>
            <h4 className="text-xl font-semibold text-gray-900 mb-2">
              About Page Management
            </h4>
            <p className="text-gray-600 mb-4">
              This section will allow you to manage your about page content, team members, and company information.
            </p>
            <div className="text-sm text-gray-500">
              Coming in the next update
            </div>
          </div>
        </div>

        {/* Preview of features */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-50 rounded-lg p-6 border-2 border-dashed border-gray-300">
            <h5 className="font-semibold text-gray-700 mb-2">Upcoming Features</h5>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• Company story editor</li>
              <li>• Team member management</li>
              <li>• Mission & vision statements</li>
              <li>• Image gallery management</li>
            </ul>
          </div>
          
          <div className="bg-gray-50 rounded-lg p-6 border-2 border-dashed border-gray-300">
            <h5 className="font-semibold text-gray-700 mb-2">Content Types</h5>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• Rich text paragraphs</li>
              <li>• Image uploads</li>
              <li>• Team member cards</li>
              <li>• Achievement statistics</li>
            </ul>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}
