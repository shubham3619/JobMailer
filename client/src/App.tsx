import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import SignUp from "./pages/Signup";
import Home from "./pages/Home";
import EmailSendForm from "./pages/EmailSendForm";
import PrivateRoute from "./components/protectedRoutes"; // Import the new PrivateRoute component
import SentEmails from "./pages/SentEmails";
import BlogComponent from "./pages/Blog";
import Features from "./pages/Features";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/blog" element={<BlogComponent />} />
      <Route path="/features" element={<Features />} />

      {/* Protected Routes */}
      <Route
        path="/EmailSend"
        element={
          <PrivateRoute>
            <EmailSendForm />
          </PrivateRoute>
        }
      />
      <Route
        path="/sentEmails"
        element={
          <PrivateRoute>
            <SentEmails />
          </PrivateRoute>
        }
      />
    </Routes>
  );
}

export default App;
