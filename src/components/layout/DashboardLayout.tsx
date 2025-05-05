
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/auth';
import { Button } from '@/components/ui/button';
import {
  LayoutDashboard,
  Users,
  ShoppingCart,
  CreditCard,
  Settings,
  LogOut,
  Menu,
  X
} from 'lucide-react';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';

interface DashboardLayoutProps {
  children: React.ReactNode;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  const { user, profile, signOut, isAdmin } = useAuth();
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = React.useState(false);
  
  const initials = profile?.first_name && profile?.last_name 
    ? `${profile.first_name[0]}${profile.last_name[0]}` 
    : user?.email?.substring(0, 2).toUpperCase() || 'U';

  const navItems = [
    {
      name: 'Dashboard',
      path: isAdmin ? '/admin/dashboard' : '/agent/dashboard',
      icon: <LayoutDashboard className="h-5 w-5" />,
    },
    {
      name: 'Clients',
      path: isAdmin ? '/admin/clients' : '/agent/clients',
      icon: <Users className="h-5 w-5" />,
    },
    {
      name: 'Products',
      path: isAdmin ? '/admin/products' : '/agent/products',
      icon: <ShoppingCart className="h-5 w-5" />,
    },
    {
      name: 'Transactions',
      path: isAdmin ? '/admin/transactions' : '/agent/transactions',
      icon: <CreditCard className="h-5 w-5" />,
    }
  ];

  if (isAdmin) {
    navItems.push({
      name: 'Settings',
      path: '/admin/settings',
      icon: <Settings className="h-5 w-5" />,
    });
  }

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);
  const closeSidebar = () => setSidebarOpen(false);

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Mobile sidebar toggle */}
      <div className="fixed top-0 left-0 z-40 lg:hidden">
        <button
          className="p-2 m-2 text-gray-600 bg-white rounded-md shadow-md"
          onClick={toggleSidebar}
        >
          <Menu className="h-6 w-6" />
        </button>
      </div>

      {/* Sidebar */}
      <div className={`
        fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0
        ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}
      `}>
        <div className="flex flex-col h-full">
          <div className="p-4 border-b">
            <div className="flex items-center justify-between">
              <h1 className="text-xl font-bold text-primary">Host Africa</h1>
              <button 
                className="p-1 rounded-md lg:hidden"
                onClick={closeSidebar}
              >
                <X className="h-6 w-6" />
              </button>
            </div>
          </div>

          <div className="flex flex-col justify-between flex-1 p-4">
            <nav className="space-y-1">
              {navItems.map((item) => (
                <Button
                  key={item.name}
                  variant="ghost"
                  className="w-full justify-start"
                  onClick={() => {
                    navigate(item.path);
                    closeSidebar();
                  }}
                >
                  {item.icon}
                  <span className="ml-3">{item.name}</span>
                </Button>
              ))}
            </nav>

            <div className="space-y-4">
              <div className="flex items-center p-2 space-x-3 border-t pt-4">
                <Avatar>
                  <AvatarFallback>{initials}</AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-sm font-medium">{profile?.first_name} {profile?.last_name}</p>
                  <p className="text-xs text-gray-500">{profile?.email}</p>
                </div>
              </div>
              <Button 
                variant="outline" 
                className="w-full flex items-center justify-center" 
                onClick={async () => {
                  await signOut();
                  navigate('/');
                }}
              >
                <LogOut className="h-4 w-4 mr-2" />
                Sign Out
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100 p-4 md:p-6">
          {children}
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
