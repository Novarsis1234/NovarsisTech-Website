import Layout from 'common/Layout';
import { Navigate, Outlet } from 'react-router-dom';

const PrivateRouter = () => {
  const token = localStorage.getItem('userToken') || sessionStorage.getItem('userToken');

  return token ? (
    <Layout>
      <Outlet />
    </Layout>
  ) : (
    <Navigate to="/signin" replace />
  );
};

export default PrivateRouter;
