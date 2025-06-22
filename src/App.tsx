import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { Suspense, lazy } from 'react'
import { LoadingSpinner } from './components/ui/loading-spinner'
import { PageTransition } from './components/ui/page-transition'

// Lazy load components for better performance
const Login = lazy(() => import('./pages/Login'))
const Dashboard = lazy(() => import('./pages/Dashboard'))
const DealPipeline = lazy(() => import('./pages/DealPipeline'))

// Create placeholder components for missing pages
import CRMSidebar from './component/CRMSidebar'

// Placeholder component template with animation
const PlaceholderPage = ({ title }: { title: string }) => (
  <PageTransition>
    <div className="flex h-screen bg-gray-50">
      <CRMSidebar />
      <div className="flex-1 overflow-y-auto">
        <div className="p-8">
          <div className="animate-fadeInUp">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">{title}</h1>
            <div className="bg-white p-8 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300">
              <p className="text-gray-600">
                {title} page content will be implemented here. This is a placeholder page.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </PageTransition>
)

// Placeholder pages
const LeadsPage = () => <PlaceholderPage title="Leads" />
const OpportunitiesPage = () => <PlaceholderPage title="Opportunities" />
const DealsPage = () => <PlaceholderPage title="Deals" />
const ContactsPage = () => <PlaceholderPage title="Contacts" />
const AccountsPage = () => <PlaceholderPage title="Accounts" />
const CompaniesPage = () => <PlaceholderPage title="Companies" />
const EmailsPage = () => <PlaceholderPage title="Email Center" />
const CallsPage = () => <PlaceholderPage title="Call Logs" />
const MessagesPage = () => <PlaceholderPage title="Messages" />
const CalendarPage = () => <PlaceholderPage title="Calendar" />
const TasksPage = () => <PlaceholderPage title="Tasks" />
const ReportsPage = () => <PlaceholderPage title="Reports" />
const AnalyticsPage = () => <PlaceholderPage title="Analytics" />
const ActivityPage = () => <PlaceholderPage title="Activity Feed" />
const SettingsPage = () => <PlaceholderPage title="Settings" />
const HelpPage = () => <PlaceholderPage title="Help & Support" />

export default function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<LoadingSpinner fullScreen text="Loading page..." />}>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/dealpipeline" element={<DealPipeline />} />
          
          <Route path="/leads" element={<LeadsPage />} />
          <Route path="/opportunities" element={<OpportunitiesPage />} />
          <Route path="/deals" element={<DealsPage />} />
          <Route path="/contacts" element={<ContactsPage />} />
          <Route path="/accounts" element={<AccountsPage />} />
          <Route path="/companies" element={<CompaniesPage />} />
          <Route path="/emails" element={<EmailsPage />} />
          <Route path="/calls" element={<CallsPage />} />
          <Route path="/messages" element={<MessagesPage />} />
          <Route path="/calendar" element={<CalendarPage />} />
          <Route path="/tasks" element={<TasksPage />} />
          <Route path="/reports" element={<ReportsPage />} />
          <Route path="/analytics" element={<AnalyticsPage />} />
          <Route path="/activity" element={<ActivityPage />} />
          <Route path="/settings" element={<SettingsPage />} />
          <Route path="/help" element={<HelpPage />} />
          
          {/* Redirect root to dashboard after login */}
          <Route path="/" element={<Navigate to="/dashboard" replace />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}