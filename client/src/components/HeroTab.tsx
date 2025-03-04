
import { Button } from "./ui/button";
import { ArrowRight, Mail, PieChart, Clock,  ChevronRight, MapPin } from "lucide-react";
import { useNavigate } from "react-router-dom";

const HeroTab = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: <Mail className="h-6 w-6 text-blue-500" />,
      title: "Automated Emails",
      description: "Send personalized job applications in seconds with our intelligent templates"
    },
    {
      icon: <PieChart className="h-6 w-6 text-green-500" />,
      title: "Track Progress",
      description: "Monitor your application status and success rate with visual analytics"
    },
    {
      icon: <Clock className="h-6 w-6 text-purple-500" />,
      title: "Save Time",
      description: "Cut application time by up to 75% with our streamlined process"
    }
  ];

  const blogPosts = [
    {
      title: "10 Tips for Writing the Perfect Cover Letter",
      excerpt: "Learn how to craft cover letters that grab recruiters' attention and increase your callback rate.",
      date: "Feb 28, 2025",
      readTime: "5 min read",
      category: "Career Tips",
      image: "/email-automation.png"
    },
    {
      title: "How to Follow Up After Sending Job Applications",
      excerpt: "Discover the ideal timing and approach for following up on your job applications without seeming desperate.",
      date: "Feb 15, 2025",
      readTime: "4 min read",
      category: "Job Search",
      image: "/email-sending.png"
    },
    {
      title: "Leveraging LinkedIn for Your Job Search",
      excerpt: "Maximize your LinkedIn profile and networking capabilities to find hidden job opportunities.",
      date: "Jan 30, 2025",
      readTime: "6 min read",
      category: "Networking",
      image: "/email-sending.png"
    }
  ];

  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <div className="relative min-h-[85vh] md:min-h-[80vh] w-full flex items-center justify-center overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-64 h-64 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-orange-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
        </div>

        {/* Main background image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-15 z-0"
          style={{ backgroundImage: "url('/email-sending.png')" }}
        ></div>
        
        {/* Content */}
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
          <div className="mb-4">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
              Job Application Automation
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-4">
            Save Time. Apply <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-orange-500">Smarter</span>
          </h1>
          <p className="text-xl sm:text-2xl md:text-3xl text-gray-600 max-w-3xl mb-8">
            Automate Your Job Applications and Get More Interviews
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Button 
              onClick={() => navigate('/EmailSend')} 
              className="text-lg px-8 py-6 rounded-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2"
            >
              Get Started <ArrowRight className="h-5 w-5" />
            </Button>
            <Button 
              variant="outline"
              onClick={() => navigate('/features')}
              className="text-lg px-8 py-6 rounded-full border-2 hover:bg-gray-50 transition-all duration-300"
            >
              Learn More
            </Button>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-12 text-center max-w-4xl w-full">
            <div className="p-4">
              <div className="text-4xl font-bold text-blue-600 mb-2">75%</div>
              <div className="text-gray-600">Less Time Spent</div>
            </div>
            <div className="p-4">
              <div className="text-4xl font-bold text-blue-600 mb-2">3.5x</div>
              <div className="text-gray-600">More Applications Sent</div>
            </div>
            <div className="p-4">
              <div className="text-4xl font-bold text-blue-600 mb-2">10k+</div>
              <div className="text-gray-600">Happy Job Seekers</div>
            </div>
          </div>
        </div>
        
        {/* Wave separator */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100" className="w-full">
            <path fill="#ffffff" fillOpacity="1" d="M0,64L80,58.7C160,53,320,43,480,48C640,53,800,75,960,80C1120,85,1280,75,1360,69.3L1440,64L1440,100L1360,100C1280,100,1120,100,960,100C800,100,640,100,480,100C320,100,160,100,80,100L0,100Z"></path>
          </svg>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Simplify Your Job Search</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Our platform streamlines the application process so you can focus on landing your dream job</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300 bg-white">
                <div className="w-12 h-12 rounded-full bg-gray-50 flex items-center justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-16 flex flex-col md:flex-row items-center gap-8 bg-gray-50 rounded-2xl p-8">
            <div className="flex-1">
              <h3 className="text-2xl font-bold mb-4">Ready to streamline your job application process?</h3>
              <p className="text-gray-600 mb-6">Our platform helps you send personalized applications to multiple companies with just a few clicks.</p>
              <Button 
                onClick={() => navigate('/EmailSend')} 
                className="rounded-lg"
              >
                Send Your First Application
              </Button>
            </div>
            <div className="flex-1 flex justify-center">
              <div className="relative w-full max-w-md">
                <div className="absolute inset-0 bg-blue-100 rounded-lg transform rotate-3"></div>
                <img 
                  src="/email-sending.png" 
                  alt="Application Dashboard" 
                  className="relative z-10 rounded-lg shadow-lg w-full"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = "https://via.placeholder.com/600x400?text=Application+Dashboard";
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Blog Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl font-bold">Latest Career Tips</h2>
            <Button 
              variant="ghost" 
              onClick={() => navigate('/blog')}
              className="text-blue-600 flex items-center gap-1 hover:bg-blue-50"
            >
              View all articles <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <div key={index} className="rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 bg-white">
                <div className="h-48 bg-gray-200 relative">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = `https://via.placeholder.com/400x200?text=${post.title.replace(/ /g, '+')}`;
                    }}
                  />
                  <div className="absolute top-4 left-4 bg-blue-600 text-white text-xs px-2 py-1 rounded">
                    {post.category}
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-500 mb-3">
                    <Clock className="h-4 w-4 mr-1" />
                    <span>{post.readTime}</span>
                    <span className="mx-2">•</span>
                    <span>{post.date}</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <Button 
                    variant="ghost" 
                    className="text-blue-600 px-0 hover:bg-transparent hover:text-blue-700 hover:underline"
                    onClick={() => navigate(`/blog/${post.title.toLowerCase().replace(/ /g, '-')}`)}
                  >
                    Read more
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Testimonials Section */}
      <div className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">What Our Users Say</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Join thousands of job seekers who have streamlined their application process</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-6 bg-gray-50 rounded-xl">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold mr-4">
                  JD
                </div>
                <div>
                  <h4 className="font-semibold">John Doe</h4>
                  <div className="text-sm text-gray-500 flex items-center">
                    <MapPin className="h-3 w-3 mr-1" /> San Francisco, CA
                  </div>
                </div>
              </div>
              <p className="text-gray-700">"JobMailer cut my application time in half! I was able to send personalized emails to 20 companies in one afternoon."</p>
            </div>
            
            <div className="p-6 bg-gray-50 rounded-xl">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center text-green-600 font-bold mr-4">
                  AS
                </div>
                <div>
                  <h4 className="font-semibold">Amanda Smith</h4>
                  <div className="text-sm text-gray-500 flex items-center">
                    <MapPin className="h-3 w-3 mr-1" /> Chicago, IL
                  </div>
                </div>
              </div>
              <p className="text-gray-700">"I landed my dream job within 3 weeks of using JobMailer. The tracking feature helped me stay organized throughout my search."</p>
            </div>
            
            <div className="p-6 bg-gray-50 rounded-xl">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 font-bold mr-4">
                  RJ
                </div>
                <div>
                  <h4 className="font-semibold">Robert Johnson</h4>
                  <div className="text-sm text-gray-500 flex items-center">
                    <MapPin className="h-3 w-3 mr-1" /> Austin, TX
                  </div>
                </div>
              </div>
              <p className="text-gray-700">"The cover letter templates are outstanding! They helped me craft compelling applications that got responses from 60% of companies."</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* CTA Section */}
      <div className="relative py-20 bg-blue-600 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-70 -mt-20 -mr-20"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-700 rounded-full mix-blend-multiply filter blur-3xl opacity-70 -mb-20 -ml-20"></div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Transform Your Job Search?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">Join thousands of job seekers who are finding their dream careers faster with JobMailer</p>
          <Button 
            onClick={() => navigate('/EmailSend')} 
            className="text-lg px-8 py-6 rounded-full bg-white text-blue-600 hover:bg-blue-50 shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Get Started Now
          </Button>
        </div>
      </div>
      
      {/* Add custom styles for animations */}
      <style>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  );
};

export default HeroTab;