import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import AdminDashboard from './screens/AdminDashboard';
import AdminSidebar from "./components/AdminSidebar"
import Blogs from './screens/Blogs';
import ContactUs from './screens/ContactUs';
import Subscription from './screens/Subscription';
import Specialservice from './screens/Specialservice';
import Master from './screens/Master';
import CreateBlogPost from './screens/CreateBlogPost';
import Feedback from './screens/Feedback';
import AvailableJobsSeeker from './screens/Jobseeker/AvailableJobSeeker';
import Bidinsights from './screens/BidInsights';
import JobSeekers from './screens/Jobseekers';
import Employers from './screens/Employers';
import JobReleted from './screens/JobReleted.jsx';
import CreateJobPost from './screens/CreateJobPost';
import { LoginPage } from './Auth/LoginPage';
import ResetPassword from './screens/ResetPassword';
import ReferralAndCredits from './screens/ReferralAndCredits';
import { TemplateQuestions } from './screens/TemplateQuestions';
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
function App() {
  return (
    <>
    
      <Router>
        <Routes>
          <Route exact path="/adminsidebar" element={<AdminSidebar />} />
          <Route exact path="/dashboard" element={<AdminDashboard />} />
          <Route exact path="/getavailjobs" element={<AvailableJobsSeeker />} />
          <Route exact path="/blogs" element={<Blogs />} />
          <Route exact path="/" element={<LoginPage />} />
          <Route exact path="/contactus" element={<ContactUs />} />
          <Route exact path="/jobseeker-user" element={<JobSeekers />} />
          <Route exact path="/fmn_employer" element={<Employers />} />
          <Route exact path="/feedback" element={<Feedback />} />
          <Route exact path="/referral" element={<ReferralAndCredits />} />
          <Route exact path="/subscription" element={<Subscription />} />
          <Route exact path="/questions" element={<TemplateQuestions />} />
          <Route exact path="/createjobpost" element={<CreateJobPost />} />
          <Route exact path="/specialservice" element={<Specialservice />} />
          <Route exact path="/master" element={<Master />} />
          <Route exact path="/createblog" element={<CreateBlogPost />} />
          <Route exact path="/bidinsights" element={<Bidinsights />} />
          <Route exact path="/jobreleted" element={<JobReleted />} />
          <Route exact path="/resetpassword" element={<ResetPassword />} />
        </Routes>
      </Router>
      {/* <ToastContainer /> */}
      <ToastContainer position="top-center" />
    </>
  );
}

export default App;
