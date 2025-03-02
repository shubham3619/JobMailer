
import { Button } from "@/components/ui/button";
import { Check, Mail, PieChart, Clock, ArrowRight, FileCheck, Brain, ShieldCheck, Sparkles, Users, Laptop, MessageSquare } from "lucide-react";
import { useNavigate } from "react-router-dom";

const FeaturesComponent = () => {
  const navigate = useNavigate();

  const mainFeatures = [
    {
      icon: <Mail className="h-6 w-6 text-blue-500" />,
      title: "Automated Email Campaigns",
      description: "Create personalized job application emails that automatically adjust to each position you apply for.",
      color: "blue"
    },
    {
      icon: <PieChart className="h-6 w-6 text-green-500" />,
      title: "Application Analytics",
      description: "Track your application success rate with detailed metrics and visualizations of your progress.",
      color: "green"
    },
    {
      icon: <Clock className="h-6 w-6 text-purple-500" />,
      title: "Time-Saving Templates",
      description: "Access our library of industry-specific templates designed to impress hiring managers.",
      color: "purple"
    },
    {
      icon: <Brain className="h-6 w-6 text-orange-500" />,
      title: "AI-Powered Customization",
      description: "Our AI analyzes job descriptions to tailor your applications for maximum relevance and impact.",
      color: "orange"
    },
    {
      icon: <ShieldCheck className="h-6 w-6 text-indigo-500" />,
      title: "Secure Document Storage",
      description: "Safely store and manage all your resumes, cover letters, and portfolios in one secure location.",
      color: "indigo"
    },
    {
      icon: <Sparkles className="h-6 w-6 text-red-500" />,
      title: "Smart Follow-ups",
      description: "Automated follow-up emails with optimal timing to keep your application top-of-mind.",
      color: "red"
    }
  ];

  const detailedFeatures = [
    {
      title: "Intelligent Email Automation",
      description: "Our platform allows you to create highly personalized job application emails that adapt to each position. Simply input the job details once, and our system will generate tailored applications at scale.",
      image: "/email-automation.png",
      benefits: [
        "Save hours of repetitive work",
        "Maintain consistency across applications",
        "Personalize each email with relevant details",
        "Schedule emails to send at optimal times"
      ]
    },
    {
      title: "Comprehensive Application Tracking",
      description: "Keep track of every application you send with our intuitive dashboard. Monitor response rates, interview invitations, and follow-up status all in one place.",
      image: "/email-sending.png",
      benefits: [
        "Visual analytics of your application funnel",
        "Real-time status updates",
        "Calendar integration for interview scheduling",
        "Reminder system for follow-ups"
      ]
    },
    {
      title: "AI-Powered Job Matching",
      description: "Our advanced AI analyzes thousands of job listings to find the ones that best match your skills and experience, helping you focus your efforts on the opportunities with the highest potential.",
      image: "/email-automation.png",
      benefits: [
        "Discover opportunities you might have missed",
        "Save time by focusing on relevant positions",
        "Receive match percentage scores for each job",
        "Get suggestions for skills to highlight in applications"
      ]
    }
  ];

  const plans = [
    {
      name: "Basic",
      price: "$0",
      period: "Free forever",
      description: "Essential tools for your job search",
      features: [
        "10 automated applications per month",
        "Basic application tracking",
        "3 email templates",
        "Standard support"
      ],
      buttonText: "Get Started",
      buttonVariant: "outline"
    },
    {
      name: "Pro",
      price: "$12",
      period: "per month",
      description: "Advanced tools for serious job seekers",
      features: [
        "Unlimited automated applications",
        "Advanced analytics dashboard",
        "20+ premium templates",
        "AI-powered customization",
        "Priority support",
        "Smart follow-ups"
      ],
      buttonText: "Try Pro",
      buttonVariant: "default",
      highlighted: true
    },
    {
      name: "Team",
      price: "$29",
      period: "per month",
      description: "For career coaches and teams",
      features: [
        "Everything in Pro",
        "Team collaboration tools",
        "Client management dashboard",
        "White-label reporting",
        "API access",
        "Dedicated account manager"
      ],
      buttonText: "Contact Sales",
      buttonVariant: "outline"
    }
  ];

  const useCases = [
    {
      icon: <Users className="h-8 w-8 text-blue-500" />,
      title: "Fresh Graduates",
      description: "Break into the job market efficiently by applying to multiple entry-level positions with customized applications that highlight your academic achievements and relevant experiences."
    },
    {
      icon: <Laptop className="h-8 w-8 text-green-500" />,
      title: "Career Changers",
      description: "Transition to a new industry by emphasizing your transferable skills and showcasing how your diverse background brings unique value to potential employers."
    },
    {
      icon: <FileCheck className="h-8 w-8 text-purple-500" />,
      title: "Senior Professionals",
      description: "Target executive positions with sophisticated applications that highlight your leadership experience and proven track record of success."
    },
    {
      icon: <MessageSquare className="h-8 w-8 text-orange-500" />,
      title: "Career Coaches",
      description: "Help multiple clients simultaneously by managing their job applications, tracking their progress, and providing data-driven guidance to improve their success rates."
    }
  ];

  const testimonials = [
    {
      quote: "JobMailer cut my application time in half while doubling my interview rate. The personalized templates made all the difference.",
      author: "Sarah J.",
      position: "Software Developer",
      
    },
    {
      quote: "As a career coach, I can now manage 3x more clients thanks to the team features. My clients are getting better results than ever before.",
      author: "Michael T.",
      position: "Career Coach",
      
    },
    {
      quote: "The analytics dashboard helped me understand where I was going wrong in my job search. After making adjustments, I landed my dream job in just 3 weeks!",
      author: "Elena R.",
      position: "Marketing Specialist",
     
    }
  ];

  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <div className="relative py-20 bg-gradient-to-r from-blue-600 to-blue-800 overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-64 h-64 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
          <div className="absolute bottom-20 right-10 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
              Powerful Features for <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-purple-200">Successful</span> Job Applications
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
              Discover how our comprehensive suite of tools can transform your job search process
            </p>
            <Button
              onClick={() => navigate('/EmailSend')}
              className="text-lg px-8 py-6 rounded-full bg-white text-blue-600 hover:bg-blue-50 shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2 mx-auto"
            >
              Get Started <ArrowRight className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Wave separator */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100" className="w-full">
            <path fill="#ffffff" fillOpacity="1" d="M0,64L80,58.7C160,53,320,43,480,48C640,53,800,75,960,80C1120,85,1280,75,1360,69.3L1440,64L1440,100L1360,100C1280,100,1120,100,960,100C800,100,640,100,480,100C320,100,160,100,80,100L0,100Z"></path>
          </svg>
        </div>
      </div>

      {/* Main Features Grid */}
      <div className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800 mb-4">
              Our Core Features
            </div>
            <h2 className="text-3xl font-bold mb-4">Everything You Need to Land Your Dream Job</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our comprehensive platform provides all the tools you need to streamline your job search and improve your chances of success
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mainFeatures.map((feature, index) => (
              <div key={index} className="p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300 bg-white">
                <div className={`w-12 h-12 rounded-full bg-${feature.color}-50 flex items-center justify-center mb-4`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Detailed Feature Sections */}
      {detailedFeatures.map((feature, index) => (
        <div key={index} className={`py-16 ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}>
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-12`}>
              <div className="md:w-1/2">
                <div className="relative">
                  <div className={`absolute inset-0 bg-${index === 0 ? 'blue' : index === 1 ? 'green' : 'purple'}-100 rounded-lg transform ${index % 2 === 0 ? 'rotate-3' : '-rotate-3'}`}></div>
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="relative z-10 rounded-lg shadow-lg w-full"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = `https://via.placeholder.com/600x400?text=${feature.title.replace(/ /g, '+')}`;
                    }}
                  />
                </div>
              </div>
              <div className="md:w-1/2">
                <h2 className="text-3xl font-bold mb-4">{feature.title}</h2>
                <p className="text-gray-600 mb-6">{feature.description}</p>
                <div className="space-y-3">
                  {feature.benefits.map((benefit, i) => (
                    <div key={i} className="flex items-start">
                      <div className="mt-1 mr-3">
                        <Check className="h-5 w-5 text-green-500" />
                      </div>
                      <p>{benefit}</p>
                    </div>
                  ))}
                </div>
                <Button
                  onClick={() => navigate('/EmailSend')}
                  className="mt-8 rounded-lg"
                >
                  Try This Feature
                </Button>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Statistics Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why Users Love Our Platform</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our users are getting real results with JobMailer
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="p-6 bg-white rounded-xl shadow-sm text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">75%</div>
              <div className="text-gray-600">Less Time Spent on Applications</div>
            </div>
            <div className="p-6 bg-white rounded-xl shadow-sm text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">3.5x</div>
              <div className="text-gray-600">More Applications Sent</div>
            </div>
            <div className="p-6 bg-white rounded-xl shadow-sm text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">68%</div>
              <div className="text-gray-600">Higher Response Rate</div>
            </div>
            <div className="p-6 bg-white rounded-xl shadow-sm text-center">
              <div className="text-4xl font-bold text-orange-600 mb-2">10k+</div>
              <div className="text-gray-600">Happy Job Seekers</div>
            </div>
          </div>
        </div>
      </div>

      {/* Use Cases */}
      <div className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800 mb-4">
              Perfect For Everyone
            </div>
            <h2 className="text-3xl font-bold mb-4">Who Benefits from JobMailer?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our platform is designed to help job seekers at every stage of their career journey
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300 bg-white text-center">
                <div className="mx-auto w-16 h-16 rounded-full bg-gray-50 flex items-center justify-center mb-4">
                  {useCase.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{useCase.title}</h3>
                <p className="text-gray-600">{useCase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800 mb-4">
              Success Stories
            </div>
            <h2 className="text-3xl font-bold mb-4">What Our Users Say</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real feedback from job seekers who've transformed their application process
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="p-6 rounded-xl border border-gray-100 shadow-sm bg-white">
                <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold mr-4">
                  {testimonial.author.slice(0, 1)}
                </div>
                  <div>
                    <h4 className="font-semibold">{testimonial.author}</h4>
                    <p className="text-sm text-gray-500">{testimonial.position}</p>
                  </div>
                </div>
                <p className="text-gray-600 italic">"{testimonial.quote}"</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Pricing */}
      <div className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800 mb-4">
              Flexible Pricing
            </div>
            <h2 className="text-3xl font-bold mb-4">Choose the Perfect Plan for Your Needs</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Whether you're just starting your job search or managing multiple clients, we have a plan for you
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <div 
                key={index} 
                className={`p-6 rounded-xl border ${plan.highlighted ? 'border-blue-200 ring-2 ring-blue-500 shadow-lg' : 'border-gray-100 shadow-sm'} bg-white relative`}
              >
                {plan.highlighted && (
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <div className="flex items-center justify-center">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    <span className="text-gray-500 ml-2">{plan.period}</span>
                  </div>
                  <p className="text-gray-600 mt-2">{plan.description}</p>
                </div>
                <div className="space-y-4 mb-8">
                  {plan.features.map((feature, i) => (
                    <div key={i} className="flex items-start">
                      <div className="mt-1 mr-3">
                        <Check className="h-5 w-5 text-green-500" />
                      </div>
                      <p>{feature}</p>
                    </div>
                  ))}
                </div>
                <Button
                  
                  className={`w-full ${plan.buttonVariant === 'outline' ? 'bg-white text-blue-600 border border-blue-600 hover:bg-blue-50' : 'bg-blue-600 text-white hover:bg-blue-700'}`}
                >
                  {plan.buttonText}
                </Button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Transform Your Job Search?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Join thousands of successful job seekers who are landing their dream jobs faster with JobMailer
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={() => navigate('/EmailSend')}
              className="px-8 py-4 rounded-full bg-white text-blue-600 hover:bg-blue-50 shadow-lg text-lg"
            >
              Get Started for Free
            </Button>
            {/* <Button
              onClick={() => navigate('/Demo')}
              className="px-8 py-4 rounded-full bg-transparent border-2 border-white text-white hover:bg-white/10 text-lg"
            >
              Request a Demo
            </Button> */}
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">
              Got questions? We've got answers
            </p>
          </div>

          <div className="space-y-6">
            <div className="p-6 rounded-xl border border-gray-100 shadow-sm">
              <h3 className="text-xl font-semibold mb-2">How does the automated email feature work?</h3>
              <p className="text-gray-600">
                Simply input the job details once, and our AI will generate personalized applications tailored to each position. You can review, edit, and schedule these emails to be sent at optimal times.
              </p>
            </div>
            <div className="p-6 rounded-xl border border-gray-100 shadow-sm">
              <h3 className="text-xl font-semibold mb-2">Can I use JobMailer for multiple job types?</h3>
              <p className="text-gray-600">
                Absolutely! JobMailer works for any industry or role. Our templates and AI customization adapt to different job types, from technical positions to creative roles and everything in between.
              </p>
            </div>
            <div className="p-6 rounded-xl border border-gray-100 shadow-sm">
              <h3 className="text-xl font-semibold mb-2">Is there a limit to how many applications I can send?</h3>
              <p className="text-gray-600">
                Free accounts can send up to 10 automated applications per month. Pro and Team accounts have unlimited application sends, plus additional premium features to enhance your job search.
              </p>
            </div>
            <div className="p-6 rounded-xl border border-gray-100 shadow-sm">
              <h3 className="text-xl font-semibold mb-2">How secure is my data on JobMailer?</h3>
              <p className="text-gray-600">
                We take security seriously. All your data is encrypted and stored securely. We never share your information with third parties, and you maintain complete control over your documents and applications.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturesComponent;