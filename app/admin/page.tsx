import AdminLayout from './AdminLayout';
import { FileText, Users, Phone, BarChart3 } from 'lucide-react';

export default function AdminDashboard() {
  const stats = [
    {
      title: 'Homepage Content',
      value: '6',
      subtitle: 'Active content blocks',
      icon: <FileText size={24} />,
      color: 'blue'
    },
    {
      title: 'About Page',
      value: '3',
      subtitle: 'Content sections',
      icon: <Users size={24} />,
      color: 'green'
    },
    {
      title: 'Contact Info',
      value: '1',
      subtitle: 'Contact details',
      icon: <Phone size={24} />,
      color: 'purple'
    },
    {
      title: 'Total Pages',
      value: '3',
      subtitle: 'Managed pages',
      icon: <BarChart3 size={24} />,
      color: 'orange'
    }
  ];

  const recentActivity = [
    { action: 'Updated homepage paragraph', time: '2 hours ago', type: 'edit' },
    { action: 'Created new content block', time: '1 day ago', type: 'create' },
    { action: 'Modified contact information', time: '3 days ago', type: 'edit' },
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: 'bg-blue-50 text-blue-700 border-blue-200',
      green: 'bg-green-50 text-green-700 border-green-200',
      purple: 'bg-purple-50 text-purple-700 border-purple-200',
      orange: 'bg-orange-50 text-orange-700 border-orange-200'
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <AdminLayout title="Dashboard">
      <div className="space-y-6 font-sans">
        {/* Welcome Section */}
        <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
          <h3 className="text-xl font-semibold text-gray-900 mb-2">
            Welcome to FLADVart Admin Panel
          </h3>
          <p className="text-gray-600">
            Manage your website content, pages, and settings from this dashboard.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className={`p-6 rounded-lg border-2 ${getColorClasses(stat.color)}`}
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium opacity-75">{stat.title}</p>
                  <p className="text-3xl font-bold mt-1">{stat.value}</p>
                  <p className="text-xs opacity-60 mt-1">{stat.subtitle}</p>
                </div>
                <div className="opacity-75">
                  {stat.icon}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Quick Actions & Recent Activity */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Quick Actions */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200">
            <div className="p-6 border-b border-gray-200">
              <h4 className="text-lg font-semibold text-gray-900">Quick Actions</h4>
            </div>
            <div className="p-6 space-y-4">
              <a 
                href="/admin/homepage"
                className="flex items-center justify-between p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors border border-blue-200"
              >
                <div>
                  <p className="font-medium text-blue-900">Edit Homepage</p>
                  <p className="text-sm text-blue-700">Manage homepage content</p>
                </div>
                <FileText size={20} className="text-blue-600" />
              </a>
              
              <a 
                href="/admin/about"
                className="flex items-center justify-between p-4 bg-green-50 rounded-lg hover:bg-green-100 transition-colors border border-green-200"
              >
                <div>
                  <p className="font-medium text-green-900">Update About Page</p>
                  <p className="text-sm text-green-700">Modify about information</p>
                </div>
                <Users size={20} className="text-green-600" />
              </a>
              
              <a 
                href="/admin/contact"
                className="flex items-center justify-between p-4 bg-purple-50 rounded-lg hover:bg-purple-100 transition-colors border border-purple-200"
              >
                <div>
                  <p className="font-medium text-purple-900">Contact Settings</p>
                  <p className="text-sm text-purple-700">Update contact details</p>
                </div>
                <Phone size={20} className="text-purple-600" />
              </a>
            </div>
          </div>

          {/* Recent Activity */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200">
            <div className="p-6 border-b border-gray-200">
              <h4 className="text-lg font-semibold text-gray-900">Recent Activity</h4>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                {recentActivity.map((activity, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className={`w-2 h-2 rounded-full mt-2 ${
                      activity.type === 'edit' ? 'bg-blue-500' : 'bg-green-500'
                    }`}></div>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-gray-900">
                        {activity.action}
                      </p>
                      <p className="text-xs text-gray-500">{activity.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}
