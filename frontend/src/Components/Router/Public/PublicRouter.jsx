// src/App.jsx
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
} from "react-router-dom";
import { AuthProvider } from "../../Context/AuthContext";
import Login from "../../Auth/Login";
// import Dashboard from "../../Dashboard/DashBoard";
import PrivateRoute from "../Private/PrivateRouter";
import Table from "../../Elements/table";
import {
  About,
  Blog,
  Calender,
  Contact,
  Home,
  PrivateLayout,
  PublicLayout,
  Ragistr,
  RegistrationForm,
  ScrollToTop,
  StudentDetails,
  TermsAndConditions,
} from "../../Import/imprt";
import DashBoard from "../../Dashboard/DashBoard";
import UserDetails from "../../Dashboard/Profiles/UserDetails";
import Update from "../../Dashboard/Profiles/Update";

const PublicRouter = () => {
  return (
    <Router>
      <AuthProvider>
        <ScrollToTop />
        <Routes>
          {/* Public Routes with Header */}
          <Route
            path="/"
            element={
              <PublicLayout>
                <Home />
              </PublicLayout>
            }
          />
          <Route
            path="/log-in"
            element={
              <PublicLayout>
                <Login />
              </PublicLayout>
            }
          />
          <Route
            path="/about-us"
            element={
              <PublicLayout>
                <About />
              </PublicLayout>
            }
          />
          <Route
            path="/blog-details"
            element={
              <PublicLayout>
                <Blog />
              </PublicLayout>
            }
          />
          <Route
            path="/contact-us"
            element={
              <PublicLayout>
                <Contact />
              </PublicLayout>
            }
          />
          <Route
            path="/create-user-account"
            element={
              <PublicLayout>
                <Ragistr />
              </PublicLayout>
            }
          />
          <Route
            path="/termsAndConditions"
            element={
              <PublicLayout>
                <TermsAndConditions/>
              </PublicLayout>
            }
          />
          <Route
            path="/table"
            element={
              <PublicLayout>
                <Table />
              </PublicLayout>
            }
          />

          {/* Private Routes */}
          <Route element={<PrivateRoute />}>
            <Route
              path="/dashboard"
              element={
                <PrivateLayout>
                  <Outlet />
                </PrivateLayout>
              }
            >
              {/* Define nested routes here */}
              <Route index element={<DashBoard />} />
              <Route path="calender" element={<Calender />} />
              <Route path="students" element={<StudentDetails />} />
              <Route path="add-students" element={<RegistrationForm />} />
              <Route path="user-details/:id" element ={<UserDetails/>}/>
              <Route path="edit-details/:id" element={<Update/>}/>
              {/* Add more nested routes here as needed */}
            </Route>
          </Route>
        </Routes>
      </AuthProvider>
    </Router>
  );
};

export default PublicRouter;
