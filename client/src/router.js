import { Route,Routes } from 'react-router-dom';
import SecureRoute from './utils/SecureRoute';

import Home from './pages/Home';
import Profile from './pages/Profile';
import Login from './pages/Login';
import Register from './pages/Register';
import ForgotPassword from './pages/ForgotPassword';
import VerifyEmail from './pages/VerifyEmail';
import NotFound from './pages/NotFound';


const Router = () => {
    return (
        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/profile" element={<SecureRoute component={Profile} />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/register" element={<Register />} />
            <Route exact path="/forgot-password" element={<ForgotPassword />} />
            <Route exact path="/verify-email" element={<VerifyEmail />} />
            <Route path="*" element={<SecureRoute component={NotFound} />} />
        </Routes>
    );
}

export default Router;