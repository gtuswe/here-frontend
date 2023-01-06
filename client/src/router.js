import { Route,Routes } from 'react-router-dom';
import SecureRoute from './utils/SecureRoute';

import Home from './pages/Home';
import Profile from './pages/Profile';
import Login from './pages/Login';
import Register from './pages/Register';
import VerifyEmail from './pages/VerifyEmail';
import NotFound from './pages/NotFound';
import QR from './pages/QR';
import AddClass from './pages/AddClass';
import Dashboard from './pages/Dashboard';

const Router = () => {
    return (
        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/profile" element={<SecureRoute component={Profile} />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/register" element={<Register />} />
            <Route exact path="/dashboard" element={<Dashboard />} />
            <Route exact path="/new-class" element={<AddClass/>} />
            <Route exact path="/verify-email" element={<VerifyEmail />} />
            <Route exact path="/scan-qr" element={<QR />} />
            <Route path="*" element={<SecureRoute component={NotFound} />} />
        </Routes>
    );
}

export default Router;