import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { 
  BarChart3, 
  Users, 
  UserPlus,
  Building2,
  Phone,
  Mail,
  Calendar,
  Target,
  DollarSign,
  FileText,
  TrendingUp,
  Settings,
  HelpCircle,
  LogOut,
  ChevronLeft,
  ChevronRight,
  Bell,
  Search,
  User,
  Activity,
  Briefcase,
  ClipboardList,
  MessageSquare
} from 'lucide-react';

interface CRMSidebarProps {
  onMenuSelect?: (menuId: string) => void;
  activeItem?: string;
}

const CRMSidebar: React.FC<CRMSidebarProps> = ({ onMenuSelect, activeItem }) => {
  const [isCollapsed, setIsCollapsed] = useState(false); // Changed to false to show all nav items by default
  const navigate = useNavigate();
  const location = useLocation();

  // Get active item from current route if not provided as prop
  const getCurrentActiveItem = () => {
    if (activeItem) return activeItem;
    
    const path = location.pathname;
    if (path.includes('/dashboard')) return 'dashboard';
    if (path.includes('/dealpipeline')) return 'pipeline';
    if (path.includes('/leads')) return 'leads';
    if (path.includes('/opportunities')) return 'opportunities';
    if (path.includes('/deals')) return 'deals';
    if (path.includes('/contacts')) return 'contacts';
    if (path.includes('/accounts')) return 'accounts';
    if (path.includes('/companies')) return 'companies';
    if (path.includes('/emails')) return 'emails';
    if (path.includes('/calls')) return 'calls';
    if (path.includes('/messages')) return 'messages';
    if (path.includes('/calendar')) return 'calendar';
    if (path.includes('/tasks')) return 'tasks';
    if (path.includes('/reports')) return 'reports';
    if (path.includes('/analytics')) return 'analytics';
    if (path.includes('/activity')) return 'activity';
    if (path.includes('/settings')) return 'settings';
    if (path.includes('/help')) return 'help';
    return 'dashboard';
  };

  const currentActiveItem = getCurrentActiveItem();

  // Route mapping for navigation
  const getRouteForMenuItem = (menuId: string) => {
    const routes: Record<string, string> = {
      'dashboard': '/dashboard',
      'pipeline': '/dealpipeline',
      'deals': '/deals',
      'leads': '/leads',
      'opportunities': '/opportunities',
      'contacts': '/contacts',
      'accounts': '/accounts',
      'companies': '/companies',
      'emails': '/emails',
      'calls': '/calls',
      'messages': '/messages',
      'calendar': '/calendar',
      'tasks': '/tasks',
      'reports': '/reports',
      'analytics': '/analytics',
      'activity': '/activity',
      'settings': '/settings',
      'help': '/help'
    };
    return routes[menuId] || '/dashboard';
  };

  const handleMenuClick = (menuId: string) => {
    // If onMenuSelect prop is provided, use it (for existing functionality)
    if (onMenuSelect) {
      onMenuSelect(menuId);
    } else {
      // Otherwise use router navigation
      const route = getRouteForMenuItem(menuId);
      navigate(route);
    }
  };

  const handleLogout = () => {
    // Navigate to login page
    navigate('/login');
  };

  const menuSections = [
    {
      title: 'Overview',
      items: [
        { id: 'dashboard', label: 'Dashboard', icon: BarChart3, badge: null },
        { id: 'activity', label: 'Activity Feed', icon: Activity, badge: '12' },
      ]
    },
    {
      title: 'Sales',
      items: [
        { id: 'leads', label: 'Leads', icon: UserPlus, badge: '47' },
        { id: 'opportunities', label: 'Opportunities', icon: Target, badge: '23' },
        { id: 'deals', label: 'Deals', icon: DollarSign, badge: '8' },
        { id: 'pipeline', label: 'Sales Pipeline', icon: TrendingUp, badge: null },
      ]
    },
    {
      title: 'Customers',
      items: [
        { id: 'contacts', label: 'Contacts', icon: Users, badge: '1,247' },
        { id: 'accounts', label: 'Accounts', icon: Building2, badge: '89' },
        { id: 'companies', label: 'Companies', icon: Briefcase, badge: '156' },
      ]
    },
    {
      title: 'Communication',
      items: [
        { id: 'emails', label: 'Email Center', icon: Mail, badge: '24' },
        { id: 'calls', label: 'Call Logs', icon: Phone, badge: '7' },
        { id: 'messages', label: 'Messages', icon: MessageSquare, badge: '5' },
        { id: 'calendar', label: 'Calendar', icon: Calendar, badge: null },
      ]
    },
    {
      title: 'Management',
      items: [
        { id: 'tasks', label: 'Tasks', icon: ClipboardList, badge: '15' },
        { id: 'reports', label: 'Reports', icon: FileText, badge: null },
        { id: 'analytics', label: 'Analytics', icon: BarChart3, badge: null },
      ]
    }
  ];

  const bottomItems = [
    { id: 'settings', label: 'Settings', icon: Settings },
    { id: 'help', label: 'Help & Support', icon: HelpCircle },
    { id: 'logout', label: 'Logout', icon: LogOut },
  ];
  return (
    <div className={`bg-white border-r border-gray-200 transition-all duration-300 ${isCollapsed ? 'w-16' : 'w-56'} flex flex-col h-full`}>      {/* Header */}
      <div className={`border-b border-gray-200 ${isCollapsed ? 'p-2' : 'p-3'}`}>
        <div className="flex items-center justify-between">
          {!isCollapsed ? (
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <BarChart3 className="w-4 h-4 text-white" />
              </div>
              <div>
                <h1 className="text-sm font-bold text-blue-900">CRM Pro</h1>
                <p className="text-xs text-blue-600">Sales Management</p>
              </div>
            </div>          ) : (
            <div className="w-full flex flex-col items-center gap-1">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <BarChart3 className="w-4 h-4 text-white" />
              </div>
              <button
                onClick={() => setIsCollapsed(false)}
                className="w-6 h-6 bg-blue-100 hover:bg-blue-200 text-blue-600 hover:text-blue-700 rounded-md transition-all duration-200 flex items-center justify-center group"
                title="Expand Sidebar"
              >
                <ChevronRight className="w-3 h-3 group-hover:scale-110 transition-transform" />
              </button>
            </div>
          )}
            {!isCollapsed && (
            <button
              onClick={() => setIsCollapsed(true)}
              className="w-6 h-6 bg-gray-100 hover:bg-blue-100 text-gray-600 hover:text-blue-600 rounded-md transition-all duration-200 flex items-center justify-center group"
              title="Collapse Sidebar"
            >
              <ChevronLeft className="w-3 h-3 group-hover:scale-110 transition-transform" />
            </button>
          )}
        </div>
      </div>      {/* Quick Stats */}
      {!isCollapsed && (
        <div className="p-2 bg-blue-50 border-b border-blue-100">
          <div className="grid grid-cols-2 gap-2 text-center">
            <div className="bg-white rounded-md p-2 shadow-sm">
              <div className="text-lg font-bold text-blue-600">$47K</div>
              <div className="text-xs text-gray-600">This Month</div>
            </div>
            <div className="bg-white rounded-md p-2 shadow-sm">
              <div className="text-lg font-bold text-green-600">23</div>
              <div className="text-xs text-gray-600">Active Deals</div>
            </div>
          </div>
        </div>
      )}      {/* Search */}
      {/* {!isCollapsed && (
        <div className="p-3">
          <div className="relative">
            <Search className="w-3 h-3 absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search CRM..."
              className="w-full pl-7 pr-2 py-1.5 text-xs border border-gray-200 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-gray-50"
            />
          </div>
        </div>
      )}     
       */}
       {/* Navigation */}
      <div className="flex-1 overflow-y-auto py-2">
        <nav className="space-y-3">
          {menuSections.map((section) => (
            <div key={section.title} className={isCollapsed ? 'px-1' : 'px-3'}>
              {!isCollapsed && (
                <h2 className="mb-1 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                  {section.title}
                </h2>
              )}
              <div className="space-y-0.5">
                {section.items.map((item) => {
                  const Icon = item.icon;
                  const isActive = currentActiveItem === item.id;
                  
                  return (
                    <button
                      key={item.id}
                      onClick={() => handleMenuClick(item.id)}
                      className={`w-full flex items-center ${
                        isCollapsed ? 'justify-center' : 'gap-2'
                      } ${
                        isCollapsed ? 'px-1 py-2' : 'px-2 py-1.5'
                      } rounded-md text-left transition-all duration-200 group ${
                        isActive 
                          ? 'bg-blue-50 text-blue-700 border border-blue-200 shadow-sm' 
                          : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                      }${
                        isCollapsed ? ' mx-1' : ''
                      }`}
                      title={isCollapsed ? `${item.label}${item.badge ? ` (${item.badge})` : ''}` : ''}
                    >
                      <div className="relative">
                        <Icon className={`w-4 h-4 flex-shrink-0 ${isActive ? 'text-blue-600' : ''}`} />
                        {item.badge && isCollapsed && (
                          <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full flex items-center justify-center border border-white">
                            <span className="text-[8px] font-bold text-white">
                              {parseInt(item.badge) > 9 ? '9+' : item.badge}
                            </span>
                          </div>
                        )}
                      </div>
                      {!isCollapsed && (
                        <>
                          <span className="text-xs font-medium flex-1">{item.label}</span>
                          {item.badge && (
                            <span className={`px-1.5 py-0.5 text-xs font-medium rounded-full ${
                              isActive 
                                ? 'bg-blue-600 text-white' 
                                : 'bg-blue-100 text-blue-600'
                            }`}>
                              {item.badge}
                            </span>
                          )}
                        </>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>
          ))}
        </nav>
      </div>      {/* Bottom section */}
      <div className={`border-t border-gray-200 ${isCollapsed ? 'p-1' : 'p-2'}`}>
        {/* User Profile */}
        {!isCollapsed && (
          <div className="mb-2 p-1.5 bg-white rounded-md shadow-sm border border-gray-100">
            <div className="flex items-center gap-1.5">
              <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center">
                <User className="w-3 h-3 text-white" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs font-semibold text-gray-900 truncate leading-tight">Sarah Johnson</p>
                <p className="text-xs text-gray-500 truncate leading-tight">Sales Manager</p>
              </div>
              <div className="relative">
                <Bell className="w-3 h-3 text-gray-400" />
                <div className="absolute -top-0.5 -right-0.5 w-1.5 h-1.5 bg-red-500 rounded-full"></div>
              </div>
            </div>
          </div>
        )}

        {/* Collapsed User Avatar */}
        {isCollapsed && (
          <div className="mb-1 flex justify-center">
            <div className="relative">
              <div className="w-7 h-7 bg-blue-600 rounded-full flex items-center justify-center">
                <User className="w-3 h-3 text-white" />
              </div>
              <div className="absolute -top-0.5 -right-0.5 w-2 h-2 bg-red-500 rounded-full border border-white"></div>
            </div>
          </div>
        )}

        {/* Bottom Menu Items */}
        <div className="space-y-0.5">
          {bottomItems.map((item) => {
            const Icon = item.icon;
            
            return (
              <button
                key={item.id}
                onClick={() => item.id === 'logout' ? handleLogout() : handleMenuClick(item.id)}
                className={`w-full flex items-center ${
                  isCollapsed ? 'justify-center px-1 py-1.5' : 'gap-1.5 px-1.5 py-1'
                } rounded-md text-left transition-colors ${
                  item.id === 'logout' 
                    ? 'text-red-600 hover:bg-red-50 hover:text-red-700' 
                    : 'text-gray-600 hover:bg-white hover:text-gray-900'
                }`}
                title={isCollapsed ? item.label : ''}
              >
                <Icon className="w-3.5 h-3.5 flex-shrink-0" />
                {!isCollapsed && <span className="text-xs font-medium">{item.label}</span>}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CRMSidebar;