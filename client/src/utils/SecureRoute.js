import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';


const SecureRoute = ({component: Component, ...rest}) => {
    const isAuthenticated = useSelector((state) => state.authReducer.user);
    return (
         isAuthenticated ? <Component /> : <Navigate to="/login" />
    );
};

export default SecureRoute;