
import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useAuthStore } from '@/stores/authStore';
import { 
  LayoutDashboard, 
  Users, 
  UserCheck, 
  Package, 
  CreditCard, 
  PiggyBank, 
  Settings, 
  LogOut 
} from 'lucide-react';

export default function AdminLayout() {
  const { user, signOut } = useAuthStore();
  const location = useLocation();
  const navigate = useNavigate();

  const handleSignOut = async () => {
    await signOut();
    navigate('/auth');
  };

  const navigation = [
    { name: 'Dashboard', href: '/admin', icon: LayoutDashboard },
    { name: 'Agents', href: '/admin/agents', icon: Users },
    { name: 'Clients', href: '/admin/clients', icon: UserCheck },
    { name: 'Products', href: '/admin/products', icon: Package },
    { name: 'Transactions', href: '/admin/transactions', icon: CreditCard },
    { name: 'Commissions', href: '/admin/commissions', icon: PiggyBank },
    { name: 'Settings', href: '/admin/settings', icon: Settings },
  ];

  return (
    <div className="flex h-screen bg-background">
      {/* Sidebar */}
      <div className="hidden md:flex flex-col w-64 bg-card border-r">
        <div className="flex items-center justify-center h-16 border-b">
          <h1 className="text-xl font-bold">Admin Dashboard</h1>
        </div>
        <div className="flex flex-col justify-between flex-1 overflow-y-auto">
          <nav className="px-2 py-4 space-y-1">
            {navigation.map((item) => {
              const isActive = location.pathname === item.href || 
                (item.href !== '/admin' && location.pathname.startsWith(item.href));
              
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`flex items-center px-4 py-2 text-sm font-medium rounded-md ${
                    isActive
                      ? 'bg-primary text-white'
                      : 'text-foreground hover:bg-accent hover:text-accent-foreground'
                  }`}
                >
                  <item.icon className="mr-3 h-5 w-5" />
                  {item.name}
                </Link>
              );
            })}
          </nav>
          <div className="p-4">
            <div className="flex items-center space-x-3 mb-4">
              <div className="h-8 w-8 rounded-full bg-primary text-white flex items-center justify-center">
                {user?.email?.charAt(0).toUpperCase() || 'A'}
              </div>
              <div>
                <div className="text-sm font-medium">{user?.email}</div>
                <div className="text-xs text-muted-foreground">Administrator</div>
              </div>
            </div>
            <Button variant="outline" className="w-full" onClick={handleSignOut}>
              <LogOut className="mr-2 h-4 w-4" />
              Sign out
            </Button>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="flex flex-col flex-1 overflow-hidden">
        {/* Mobile header */}
        <header className="md:hidden flex items-center justify-between p-4 border-b">
          <h1 className="text-xl font-bold">Admin Dashboard</h1>
          <Button variant="ghost" size="icon" onClick={handleSignOut}>
            <LogOut className="h-5 w-5" />
          </Button>
        </header>
        {/* Content area */}
        <main className="flex-1 overflow-y-auto p-4">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
