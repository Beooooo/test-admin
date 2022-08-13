import './App.scss';
import { Routes, Route, Navigate } from 'react-router-dom'
import DashboardPage from './pages/Dashboard';
import CampaignPage from './pages/Campaign';
import LayoutAuth from './layout/LayoutAuth';
import LoginPage from './pages/Auth/Login';
import RegisterPage from './pages/Auth/Register';
import ForgotPasswordPage from './pages/Auth/ForgotPassword';
import LayoutAdmin from './layout/LayoutAdmin';
import { AuthProvider } from './components/AuthContext';

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path='/auth' element={<LayoutAuth />} >
          <Route index element={<LoginPage />} ></Route>
          <Route path='login' element={<LoginPage />}></Route>
          <Route path='register' element={<RegisterPage />}></Route>
          <Route path='forgot-password' element={<ForgotPasswordPage />}></Route>
        </Route>

        {/* CMS */}
        <Route path='/' element={<LayoutAdmin />} >
          <Route
            path="/"
            element={<Navigate to="/dashboard" replace />}
          />
          <Route path='dashboard' element={<DashboardPage />}></Route>
          <Route path='campaign' element={<CampaignPage />}></Route>
        </Route>
      </Routes>
    </AuthProvider>
  );
}

export default App;
