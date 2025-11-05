import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import WelcomePage from '@pages/Welcome/WelcomePage'
import LoginPage from '@pages/Auth/LoginPage'
import DashboardPage from '@pages/Dashboard/DashboardPage'
import ConversationsPage from '@pages/Conversations/ConversationsPage'
import ConversationDetailPage from '@pages/Conversations/ConversationDetailPage'
import KnowledgeBasePage from '@pages/KnowledgeBase/KnowledgeBasePage'
import OnboardTenantPage from '@pages/Tenants/OnboardTenantPage'
import TenantsPage from '@pages/Tenants/TenantsPage'
import UsersPage from '@pages/Users/UsersPage'
import AddUserPage from '@pages/Users/AddUserPage'
import './styles/index.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/conversations" element={<ConversationsPage />} />
        <Route path="/conversations/:conversationId" element={<ConversationDetailPage />} />
        <Route path="/knowledge-base" element={<KnowledgeBasePage />} />
        <Route path="/onboard-tenant" element={<OnboardTenantPage />} />
        <Route path="/tenants" element={<TenantsPage />} />
        <Route path="/users" element={<UsersPage />} />
        <Route path="/add-user" element={<AddUserPage />} />
        {/* Add more routes here as you build new screens */}
      </Routes>
    </Router>
  )
}

export default App
