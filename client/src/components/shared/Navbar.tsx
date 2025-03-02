import { cn } from "@/lib/utils";
import { MailCheck } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const Navbar = () => {
  const navigate = useNavigate();
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState("/");

  // Update active link based on current path
  useEffect(() => {
    setActiveLink(window.location.pathname);
  }, []);

  // Add scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isAuthenticated = localStorage.getItem("authToken");

  const handleNavigation = (path: string) => {
    setActiveLink(path);
    navigate(path);
  };

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    navigate("/login");
  };

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 px-4 md:px-6 py-3 transition-all duration-300 flex justify-between items-center",
        scrolled
          ? "bg-white shadow-md"
          : "bg-white/70 backdrop-blur-lg"
      )}
    >
      {/* Logo Section */}
      <div
        onClick={() => handleNavigation("/")}
        className="cursor-pointer flex items-center gap-2 group"
      >
        <div className="relative">
          <MailCheck 
            size={32} 
            className="text-blue-600 group-hover:scale-110 transition-transform duration-200" 
          />
          <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-blue-100 rounded-full opacity-70 animate-pulse"></div>
        </div>
        <span className="text-2xl font-bold bg-gradient-to-r from-blue-700 to-blue-500 bg-clip-text text-transparent">
          JobMailer
        </span>
      </div>

      {/* Navigation Links */}
      <ul className="flex items-center space-x-1 md:space-x-4">
        <li>
          <button
            onClick={() => handleNavigation("/EmailSend")}
            className={cn(
              "px-3 py-2 rounded-md text-sm font-medium transition-colors",
              activeLink === "/EmailSend"
                ? "bg-blue-50 text-blue-700"
                : "text-gray-700 hover:bg-blue-50 hover:text-blue-600"
            )}
          >
            Send Email
          </button>
        </li>
        <li>
          <button
            onClick={() => handleNavigation("/sentEmails")}
            className={cn(
              "px-3 py-2 rounded-md text-sm font-medium transition-colors",
              activeLink === "/sentEmails"
                ? "bg-blue-50 text-blue-700"
                : "text-gray-700 hover:bg-blue-50 hover:text-blue-600"
            )}
          >
            Sent Emails
          </button>
        </li>
        <li>
          {isAuthenticated ? (
            <button
              onClick={handleLogout}
              className="ml-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md text-sm font-medium transition-colors shadow-sm hover:shadow"
            >
              Logout
            </button>
          ) : (
            <button
              onClick={() => handleNavigation("/login")}
              className="ml-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md text-sm font-medium transition-colors shadow-sm hover:shadow"
            >
              Login
            </button>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;