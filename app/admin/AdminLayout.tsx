'use client';

import Link from 'next/link';
import { ReactNode } from 'react';
import { Home, Users, Phone, FileText, Settings, LogOut } from 'lucide-react';
import { signOut, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

interface AdminLayoutProps {
  children: ReactNode;
  activeSection?: string;
}

export default function AdminLayout({ children, activeSection }: AdminLayoutProps) {
  const { data: session } = useSession();
  const router = useRouter();

  const handleLogout = async () => {
    await signOut({
      redirect: false, 
    });
    
    // Ana sayfaya yönlendir
    router.push('/');
  };

  const sidebarItems = [
    { 
      href: '/admin', 
      icon: <Home size={20} />, 
      label: 'Dashboard',
      id: 'dashboard' 
    },
    { 
      href: '/admin/homepage', 
      icon: <FileText size={20} />, 
      label: 'Homepage',
      id: 'homepage' 
    },
    { 
      href: '/admin/about', 
      icon: <Users size={20} />, 
      label: 'About Page',
      id: 'about' 
    },
    { 
      href: '/admin/contact', 
      icon: <Phone size={20} />, 
      label: 'Contact Page',
      id: 'contact' 
    },
    { 
      href: '/admin/settings', 
      icon: <Settings size={20} />, 
      label: 'Settings',
      id: 'settings' 
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-lg flex flex-col">
        <div className="p-6 border-b border-gray-200">
          <h1 className="text-xl font-bold text-gray-900">FLADVart Admin</h1>
          <p className="text-sm text-gray-600 mt-1">Content Management</p>
        </div>
        
        <nav className="flex-1 mt-6">
          <ul className="space-y-2 px-4">
            {sidebarItems.map((item) => (
              <li key={item.id}>
                <Link
                  href={item.href}
                  className={`flex items-center space-x-3 px-3 py-3 rounded-lg transition-colors ${
                    activeSection === item.id
                      ? 'bg-blue-50 text-blue-700 border-r-2 border-blue-700'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  <span className={activeSection === item.id ? 'text-blue-700' : 'text-gray-500'}>
                    {item.icon}
                  </span>
                  <span className="font-medium">{item.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="p-4 border-t border-gray-200">
          <button 
            onClick={handleLogout}
            className="flex items-center space-x-3 px-3 py-2 text-red-600 hover:bg-red-50 rounded-lg w-full transition-colors"
          >
            <LogOut size={20} className="text-red-500" />
            <span className="font-medium">Logout</span>
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="bg-white shadow-sm border-b border-gray-200 px-6 py-4">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-semibold text-gray-900 capitalize">
              {activeSection || 'Dashboard'}
            </h2>
            <div className="flex items-center space-x-4">
              <div className="text-sm text-gray-600">
                Hoşgeldin, {session?.user?.name || 'Admin'}
              </div>
              <button
                onClick={handleLogout}
                className="text-sm text-red-600 hover:text-red-800 font-medium"
              >
                Çıkış
              </button>
            </div>
          </div>
        </header>

        {/* Main Content Area */}
        <main className="flex-1 p-6 overflow-auto">
          {children}
        </main>
      </div>
    </div>
  );
}
