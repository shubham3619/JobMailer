import  { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronRight, Clock, Calendar, Tag, Search, Filter, ArrowLeft, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const BlogComponent = () => {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;

  const categories = ["All", "Career Tips", "Job Search", "Networking", "Interviews", "Resume Building"];

  const blogPosts = [
    {
      title: "10 Tips for Writing the Perfect Cover Letter",
      excerpt: "Learn how to craft cover letters that grab recruiters' attention and increase your callback rate.",
      date: "Feb 28, 2025",
      readTime: "5 min read",
      category: "Career Tips",
      image: "/email-automation.png",
      author: "Emily Johnson",
      authorRole: "Career Coach"
    },
    {
      title: "How to Follow Up After Sending Job Applications",
      excerpt: "Discover the ideal timing and approach for following up on your job applications without seeming desperate.",
      date: "Feb 15, 2025",
      readTime: "4 min read",
      category: "Job Search",
      image: "/email-sending.png",
      author: "Michael Chen",
      authorRole: "Hiring Manager"
    },
    {
      title: "Leveraging LinkedIn for Your Job Search",
      excerpt: "Maximize your LinkedIn profile and networking capabilities to find hidden job opportunities.",
      date: "Jan 30, 2025",
      readTime: "6 min read",
      category: "Networking",
      image: "/email-sending.png",
      author: "Sarah Williams",
      authorRole: "LinkedIn Specialist"
    },
    {
      title: "5 Common Interview Questions and How to Answer Them",
      excerpt: "Prepare for your next interview with these expertly crafted responses to frequently asked questions.",
      date: "Jan 15, 2025",
      readTime: "7 min read",
      category: "Interviews",
      image: "/email-automation.png",
      author: "David Rodriguez",
      authorRole: "HR Director"
    },
    {
      title: "Resume Formats That Stand Out in 2025",
      excerpt: "Update your resume with these modern formats that will catch the attention of hiring managers.",
      date: "Jan 8, 2025",
      readTime: "4 min read",
      category: "Resume Building",
      image: "/email-sending.png",
      author: "Jennifer Lee",
      authorRole: "Resume Expert"
    },
    {
      title: "Negotiating Your Salary: Do's and Don'ts",
      excerpt: "Learn effective strategies for negotiating the salary you deserve during the hiring process.",
      date: "Dec 20, 2024",
      readTime: "5 min read",
      category: "Career Tips",
      image: "/email-automation.png",
      author: "Robert Thompson",
      authorRole: "Compensation Specialist"
    },
    {
      title: "Remote Job Search Strategies That Work",
      excerpt: "Find the best remote opportunities with these proven job search techniques.",
      date: "Dec 10, 2024",
      readTime: "6 min read",
      category: "Job Search",
      image: "/email-sending.png",
      author: "Amanda Garcia",
      authorRole: "Remote Work Consultant"
    },
    {
      title: "Networking Events: How to Make Meaningful Connections",
      excerpt: "Turn casual conversations into valuable professional relationships with these networking tips.",
      date: "Nov 28, 2024",
      readTime: "4 min read",
      category: "Networking",
      image: "/email-automation.png",
      author: "Thomas Wilson",
      authorRole: "Business Development Manager"
    },
    {
      title: "Using AI Tools to Improve Your Job Applications",
      excerpt: "Leverage the latest AI technology to create more effective applications and increase your success rate.",
      date: "Nov 15, 2024",
      readTime: "5 min read",
      category: "Career Tips",
      image: "/email-sending.png",
      author: "Lisa Patel",
      authorRole: "Tech Career Advisor"
    }
  ];

  // Filter posts by category
  const filteredPosts = activeCategory === "All" 
    ? blogPosts 
    : blogPosts.filter(post => post.category === activeCategory);

  // Calculate pagination
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);

  const featuredPost = blogPosts[0]; // Using the first post as featured

  return (
    <div className="flex flex-col w-full">
      {/* Header Section */}
      <div className="relative py-20 bg-gradient-to-r from-blue-600 to-blue-800 overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-64 h-64 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
          <div className="absolute bottom-20 right-10 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        </div>
        
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">Career Insights & Job Search Tips</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
              Practical advice and strategies to help you navigate your job search journey and advance your career
            </p>
            <div className="max-w-xl mx-auto relative">
              <div className="flex items-center bg-white rounded-full overflow-hidden shadow-lg">
                <Search className="ml-4 h-5 w-5 text-gray-400" />
                <input 
                  type="text" 
                  placeholder="Search for articles..." 
                  className="w-full py-3 px-4 text-gray-700 focus:outline-none"
                />
                <Button className="m-1 rounded-full px-6">
                  Search
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Article */}
      <div className="bg-white py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-8 items-center bg-gray-50 rounded-2xl overflow-hidden shadow-sm">
            <div className="md:w-1/2 h-64 md:h-auto bg-gray-200 relative">
              <img 
                src={featuredPost.image} 
                alt={featuredPost.title} 
                className="w-full h-full object-cover"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = `https://via.placeholder.com/600x400?text=Featured+Article`;
                }}
              />
              <div className="absolute top-4 left-4 bg-blue-600 text-white text-xs px-2 py-1 rounded">
                Featured
              </div>
            </div>
            <div className="md:w-1/2 p-8">
              <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800 mb-4">
                {featuredPost.category}
              </div>
              <h2 className="text-2xl font-bold mb-3">{featuredPost.title}</h2>
              <p className="text-gray-600 mb-4">{featuredPost.excerpt}</p>
              <div className="flex items-center text-sm text-gray-500 mb-6">
                <Clock className="h-4 w-4 mr-1" />
                <span>{featuredPost.readTime}</span>
                <span className="mx-2">•</span>
                <Calendar className="h-4 w-4 mr-1" />
                <span>{featuredPost.date}</span>
              </div>
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold mr-3">
                  {featuredPost.author.split(' ').map(name => name[0]).join('')}
                </div>
                <div>
                  <div className="font-medium">{featuredPost.author}</div>
                  <div className="text-sm text-gray-500">{featuredPost.authorRole}</div>
                </div>
              </div>
              <Button 
                onClick={() => navigate(`/blog/${featuredPost.title.toLowerCase().replace(/ /g, '-')}`)}
                className="px-6 py-2 rounded-lg"
              >
                Read Article
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Category Filter */}
      <div className="bg-gray-50 py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold">Latest Articles</h2>
            <div className="flex items-center">
              <Filter className="h-5 w-5 text-gray-400 mr-2" />
              <span className="text-gray-600 mr-3">Filter by:</span>
            </div>
          </div>
          <div className="flex flex-wrap gap-2 mb-8">
            {categories.map((category) => (
              <button
                key={category}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                  activeCategory === category 
                    ? 'bg-blue-600 text-white' 
                    : 'bg-white text-gray-600 hover:bg-gray-100'
                }`}
                onClick={() => {
                  setActiveCategory(category);
                  setCurrentPage(1);
                }}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Article Grid */}
      <div className="bg-white py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentPosts.map((post, index) => (
              <div key={index} className="rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 bg-white border border-gray-100">
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
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 text-xs font-bold mr-2">
                        {post.author.split(' ').map(name => name[0]).join('')}
                      </div>
                      <div className="text-sm text-gray-500">{post.author}</div>
                    </div>
                    <Button 
                      variant="ghost" 
                      className="text-blue-600 px-0 hover:bg-transparent hover:text-blue-700 hover:underline"
                      onClick={() => navigate(`/blog/${post.title.toLowerCase().replace(/ /g, '-')}`)}
                    >
                      Read more
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-center mt-12">
              <div className="flex items-center gap-2">
                <Button
                  variant="outline"
                  onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                  disabled={currentPage === 1}
                  className="w-10 h-10 p-0 rounded-full"
                >
                  <ArrowLeft className="h-4 w-4" />
                </Button>
                
                {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                  <Button
                    key={page}
                    variant={currentPage === page ? "default" : "outline"}
                    onClick={() => setCurrentPage(page)}
                    className="w-10 h-10 p-0 rounded-full"
                  >
                    {page}
                  </Button>
                ))}
                
                <Button
                  variant="outline"
                  onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                  disabled={currentPage === totalPages}
                  className="w-10 h-10 p-0 rounded-full"
                >
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
      
      {/* Newsletter Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800 mb-4">
            Stay Updated
          </div>
          <h2 className="text-3xl font-bold mb-4">Subscribe to Our Newsletter</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Get the latest job search tips, career advice, and industry insights delivered directly to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-grow px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <Button className="px-6 py-3 rounded-lg">
              Subscribe
            </Button>
          </div>
        </div>
      </div>

      {/* Add custom styles for animations */}
      <style jsx>{`
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

export default BlogComponent;