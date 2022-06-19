import AppLayout from './components/layouts/AppLayout';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NannyHome from './components/pages/NannyHome';
import CustomerHome from './components/pages/CustomerHome';
import About from './components/pages/About';
import CustomerAuth from './components/pages/CustomerAuth';
import NannyAuth from './components/pages/NannyAuth';
import Profile from './components/pages/Profile';
import Suggestions from './components/pages/Suggestions';
import YourNanny from './components/pages/YourNanny';
import ForgotPassword from './components/pages/ForgotPassword';
import ResetPassword from './components/pages/ResetPassword';

import { useDispatch, useSelector } from 'react-redux';
import { useCookies } from 'react-cookie';
import { setLoggedIn, logout } from './store/actions';

function App() {
  return (
    <div>
      <Router>
        <AppLayout>
          <Routes>
            <Route path="/" element = {<CustomerHome />} />
            <Route path="/nanny" element = {<NannyHome />} />
            <Route path="/about" element = {<About />} />
            <Route path="/customer-auth" element = {<CustomerAuth />} />
            <Route path="/nanny-auth" element = {<NannyAuth />} />
            <Route path="/auth" element = {<CustomerAuth />} />
            <Route path="/profile" element = {<Profile />} />
            <Route path="/suggestions" element = {<Suggestions />} />
            <Route path="/your-nanny" element = {<YourNanny />} />
            <Route path="/forgot-password" element = {<ForgotPassword />} />
            <Route path="/reset-password" element = {<ResetPassword />} />
          </Routes>
        </AppLayout>
      </Router>
    </div>
  );
}

export default App;
