import { useAppContext } from '../conext/AppContext';
import { Navigate } from 'react-router-dom';

const AdminRoute = ({ children }) => {
  const { role, user } = useAppContext();

  if (!user) return null; // hoặc loading spinner

  if (role !== 'Admin') {
    return <Navigate to="/" replace />;
  }

  return children;
};

export default AdminRoute;