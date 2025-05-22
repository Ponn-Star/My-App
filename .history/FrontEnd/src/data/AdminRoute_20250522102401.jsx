import { useUser } from '@clerk/clerk-react';
import { Navigate } from 'react-router-dom';

const AdminRoute = ({ children }) => {
  const { user, isLoaded } = useUser();

  if (!isLoaded) return null; // hoặc loading spinner

  const role = user?.publicMetadata?.role || 'user';

  if (!user || role !== 'admin') {
    return <Navigate to="/" replace />;
  }

  return children;
};

export default AdminRoute;