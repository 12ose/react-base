import React from "react";
// import "antd/dist/antd.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PublicLayout from "./components/items/layouts/PublicLayout";
import ClientLayout from "./components/items/layouts/ClientLayout";
import AdminLayout from "./components/items/layouts/AdminLayout";
import LoginPage from "./pages/LoginPage/LoginPage";
import HomePage from "./pages/HomePagePublic/HomePage";
import DashboardPage from "./pages/Client/Dashboard/Dashboard";
import AdminDashboardPage from "./pages/Admin/Dashboard/Dashboard";
import SignupPage from "./pages/SignupPage/SignupPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <PublicLayout />, // Public layout for public routes
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/signup",
        element: <SignupPage />,
      },
    ],
  },
  {
    path: "/user",
    element: <ClientLayout />, // User layout for user routes
    children: [
      {
        path: "/user/dashboard",
        element: <DashboardPage />,
      },
      // {
      //   path: "/user/profile",
      //   element: <UserProfile />,
      // },
    ],
  },
  {
    path: "/admin",
    element: <AdminLayout />, // Admin layout for admin routes
    children: [
      {
        path: "/admin/dashboard",
        element: <AdminDashboardPage />,
      },
      // {
      //   path: "/admin/users",
      //   element: <AdminUsers />,
      // },
    ],
  },
  {
    path: "*", // Catch-all for 404 errors
    element: <LoginPage />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

// function App() {
//   const { isAuthenticated, role } = useSelector((state) => state.user);

//   return (
//     <Router>
//       <Routes>
//         {/* Public Routes */}
//         <Route element={<PublicLayout />}>
//           <Route path="login" element={<LoginPage />} />
//           <Route index element={<HomePage />} />
//         </Route>

//         {/* Client Routes */}
//         {isAuthenticated && role === "client" && (
//           <Route element={<ClientLayout />}>
//             <Route path="/dashboard" element={<DashboardPage />} />
//           </Route>
//         )}

//         {/* Admin Routes */}
//         {isAuthenticated && role === "admin" && (
//           <Route element={<AdminLayout />}>
//             <Route path="/admin" element={<AdminDashboardPage />} />
//           </Route>
//         )}

//         {/* Redirect to login if not authenticated */}
//         <Route path="*" element={<Navigate to="/login" />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;
