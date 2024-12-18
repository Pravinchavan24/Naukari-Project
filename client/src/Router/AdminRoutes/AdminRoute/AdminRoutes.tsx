import React from 'react';
import { Route, Routes } from 'react-router-dom';
import TestOverview from '../../../Admin/AdminTest/TestOverview/TestOverview';
import CreateTestOverview from '../../../Admin/AdminTest/CreateTestOverview/CreateTestOverview';
import AdminDashboard from '../../../Admin/AdminDashboard/AdminDashboard';
import AdminProfile from '../../../Admin/AdminProfile/AdminProfile';
import TestLayout from '../../../Admin/AdminTest/TestLayout.tsx/TestLayout';
import ViewTests from '../../../Admin/AdminTest/ViewTests/ViewTests';
import AdminLayout from '../AdminLayout/AdminLayout';


// // Lazy-loaded components for Admin
// const ViewTests = React.lazy(() => import('../../../Admin/AdminTest/ViewTests/ViewTests'));
// const AdminLayout = React.lazy(() => import('../AdminLayout/AdminLayout'));
// const AdminDashboard = React.lazy(() => import('../../../Admin/AdminDashboard/AdminDashboard'));
// const AdminProfile = React.lazy(() => import('../../../Admin/AdminProfile/AdminProfile'));
// const TestLayout = React.lazy(() => import('../../../Admin/AdminTest/TestLayout.tsx/TestLayout'));





const AdminRoutes: React.FC = () => {
  return (
    <div>


        <Routes>
          {/* Admin layout with nested routes */}
          <Route path='/' element={<AdminLayout />}>
            <Route index element={<AdminDashboard />} />
            <Route path='/dashboard' element={<AdminDashboard />} />
            <Route path='/settings' element={<h1>Admin Settings</h1>} />
            <Route path='/profile' element={<AdminProfile />} />
            <Route path='/test' element={<TestLayout />} />
            <Route path='/view-test' element={<ViewTests />} />
            <Route path='/test-overview/:id' element={<TestOverview />} />
            <Route path='/create-test-overview/:id' element={<CreateTestOverview />} />
          </Route>
        </Routes>

    </div>
  );
};

export default AdminRoutes;
