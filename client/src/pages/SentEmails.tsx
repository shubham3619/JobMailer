"use client";
import { useState, useEffect } from "react";
import axiosInstance from "@/api/axiosInstance";
import { format } from "date-fns";
import { ChevronLeft, ChevronRight, Mail, Building, Clock, User, Eye, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { Badge } from "@/components/ui/badge";
import toast from "react-hot-toast";

// Define interfaces for type safety
interface Email {
  _id: string;
  subject: string;
  hrName: string;
  hrEmail: string;
  companyName: string;
  coverLetter: string;
  timestamp: string;
  resumeFileName: string;
}

interface PaginationState {
  currentPage: number;
  totalPages: number;
  totalEmails: number;
}

const SentEmails = () => {
  const [emails, setEmails] = useState<Email[]>([]);
  const [loading, setLoading] = useState(true);
  const [pagination, setPagination] = useState<PaginationState>({
    currentPage: 1,
    totalPages: 1,
    totalEmails: 0,
  });
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  const fetchEmails = async (page = 1) => {
    setLoading(true);
    try {
      const response = await axiosInstance.get(`/email/sent?page=${page}&limit=6`);
      setEmails(response.data.emails);
      setPagination({
        currentPage: response.data.currentPage,
        totalPages: response.data.totalPages,
        totalEmails: response.data.totalEmails,
      });
    } catch (error) {
      toast.error("Failed to load emails");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchEmails();
  }, []);

  const handlePageChange = (newPage: number) => {
    if (newPage >= 1 && newPage <= pagination.totalPages) {
      fetchEmails(newPage);
    }
  };

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  const downloadResume = async (emailId: string, fileName: string) => {
    try {
      const response = await axiosInstance.get(`/email/resume/${emailId}`, {
        responseType: 'blob'
      });
      
      // Create a blob link to download
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', fileName);
      
      // Append to html link element page
      document.body.appendChild(link);
      
      // Start download
      link.click();
      
      // Clean up and remove the link
      link.parentNode.removeChild(link);
      
      toast.success("Resume downloaded successfully");
    } catch (error) {
      toast.error("Failed to download resume");
      console.error(error);
    }
  };

  // Function to truncate text with ellipsis
  const truncateText = (text: string | undefined, maxLength: number): string => {
    if (!text) return "";
    return text.length > maxLength ? text.substring(0, maxLength) + "..." : text;
  };

  const formatDate = (dateString: string): string => {
    try {
      return format(new Date(dateString), "MMM d, yyyy 'at' h:mm a");
    } catch (error) {
      return dateString;
    }
  };

  if (loading && emails.length === 0) {
    return (
      <div className="max-w-6xl mx-auto p-6">
        <h1 className="text-3xl font-bold mb-8 text-center">Your Sent Applications</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-6">
                <Skeleton className="h-6 w-3/4 mb-4" />
                <Skeleton className="h-4 w-1/2 mb-2" />
                <Skeleton className="h-4 w-2/3 mb-4" />
                <Skeleton className="h-20 w-full mb-4" />
                <div className="flex justify-between">
                  <Skeleton className="h-10 w-24" />
                  <Skeleton className="h-10 w-24" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto p-6 mt-16">
      <div className="flex flex-col md:flex-row justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Your Sent Applications</h1>
        
        <div className="flex gap-4 mt-4 md:mt-0">
          <div className="flex p-1 bg-gray-100 rounded-md">
            <button
              onClick={() => setViewMode("grid")}
              className={`px-3 py-1.5 rounded ${
                viewMode === "grid" ? "bg-white shadow-sm" : "text-gray-600"
              }`}
            >
              Grid
            </button>
            <button
              onClick={() => setViewMode("list")}
              className={`px-3 py-1.5 rounded ${
                viewMode === "list" ? "bg-white shadow-sm" : "text-gray-600"
              }`}
            >
              List
            </button>
          </div>
          
          <Badge variant="outline" className="px-3 py-1.5 text-sm font-medium">
            {pagination.totalEmails} Application{pagination.totalEmails !== 1 ? 's' : ''}
          </Badge>
        </div>
      </div>

      {emails.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-12 text-center">
          <Mail className="h-16 w-16 text-gray-300 mb-4" />
          <h3 className="text-xl font-semibold mb-2">No emails sent yet</h3>
          <p className="text-gray-500 max-w-md mb-6">
            When you send applications, they will appear here. Start applying to track your job search progress.
          </p>
          <Button>Send Your First Application</Button>
        </div>
      ) : viewMode === "grid" ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {emails.map((email) => (
            <div
              key={email._id}
              className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="font-semibold text-lg line-clamp-2">{email.subject}</h3>
                  <Badge 
                    variant="outline" 
                    className="whitespace-nowrap text-xs"
                  >
                    {format(new Date(email.timestamp), "MMM d")}
                  </Badge>
                </div>

                <div className="flex items-center text-gray-600 mb-2">
                  <User className="h-4 w-4 mr-2" />
                  <span className="text-sm">{email.hrName}</span>
                </div>

                <div className="flex items-center text-gray-600 mb-2">
                  <Mail className="h-4 w-4 mr-2" />
                  <span className="text-sm">{email.hrEmail}</span>
                </div>

                <div className="flex items-center text-gray-600 mb-4">
                  <Building className="h-4 w-4 mr-2" />
                  <span className="text-sm">{email.companyName}</span>
                </div>

                <div className="mb-4">
                  <p className="text-gray-600 text-sm line-clamp-3">
                    {truncateText(email.coverLetter, 150)}
                  </p>
                </div>

                <div className="flex justify-between items-center pt-2 border-t border-gray-100">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => toggleExpand(email._id)}
                    className="text-blue-600 hover:text-blue-800"
                  >
                    <Eye className="h-4 w-4 mr-1" />
                    Details
                  </Button>

                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => downloadResume(email._id, email.resumeFileName)}
                    className="text-blue-600 hover:text-blue-800"
                  >
                    <Download className="h-4 w-4 mr-1" />
                    Resume
                  </Button>
                </div>
              </div>

              {expandedId === email._id && (
                <div className="px-6 pb-6 bg-gray-50 border-t border-gray-200">
                  <div className="mb-4 pt-4">
                    <h4 className="font-medium mb-2">Cover Letter</h4>
                    <div className="bg-white rounded p-4 border border-gray-200 text-sm whitespace-pre-line">
                      {email.coverLetter}
                    </div>
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <Clock className="h-4 w-4 mr-1" />
                    <span>Sent on {formatDate(email.timestamp)}</span>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      ) : (
        <div className="border rounded-lg shadow bg-white overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Company</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Subject</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Recipient</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {emails.map((email) => (
                  <tr key={email._id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <Building className="h-5 w-5 text-gray-400 mr-2" />
                        <div className="text-sm font-medium text-gray-900">{email.companyName}</div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm text-gray-900">{truncateText(email.subject, 50)}</div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm text-gray-900">{email.hrName}</div>
                      <div className="text-sm text-gray-500">{email.hrEmail}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {format(new Date(email.timestamp), "MMM d, yyyy")}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => toggleExpand(email._id)}
                        className="text-blue-600 hover:text-blue-800 mr-2"
                      >
                        <Eye className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => downloadResume(email._id, email.resumeFileName)}
                        className="text-blue-600 hover:text-blue-800"
                      >
                        <Download className="h-4 w-4" />
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          {expandedId && (
            <div className="border-t border-gray-200 bg-gray-50 p-4">
              {emails.filter(email => email._id === expandedId).map(email => (
                <div key={`expanded-${email._id}`}>
                  <h3 className="font-medium text-lg mb-2">{email.subject}</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                    <div>
                      <p className="text-sm font-medium text-gray-500">Company</p>
                      <p>{email.companyName}</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-500">Recipient</p>
                      <p>{email.hrName} ({email.hrEmail})</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-500">Sent on</p>
                      <p>{formatDate(email.timestamp)}</p>
                    </div>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-500 mb-2">Cover Letter</p>
                    <div className="bg-white rounded p-4 border border-gray-200 text-sm whitespace-pre-line">
                      {email.coverLetter}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {pagination.totalPages > 1 && (
        <div className="mt-8 flex justify-center">
          <nav className="flex items-center gap-1">
            <Button
              variant="outline"
              size="sm"
              onClick={() => handlePageChange(pagination.currentPage - 1)}
              disabled={pagination.currentPage === 1}
              className="h-8 w-8 p-0"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            
            {[...Array(pagination.totalPages)].map((_, index) => {
              const page = index + 1;
              // Only show a subset of pages if there are many
              if (
                pagination.totalPages <= 7 ||
                page === 1 ||
                page === pagination.totalPages ||
                (page >= pagination.currentPage - 1 && page <= pagination.currentPage + 1)
              ) {
                return (
                  <Button
                    key={page}
                    variant={pagination.currentPage === page ? "default" : "outline"}
                    size="sm"
                    onClick={() => handlePageChange(page)}
                    className="h-8 w-8 p-0"
                  >
                    {page}
                  </Button>
                );
              } else if (
                page === pagination.currentPage - 2 ||
                page === pagination.currentPage + 2
              ) {
                return <span key={page}>...</span>;
              }
              return null;
            })}
            
            <Button
              variant="outline"
              size="sm"
              onClick={() => handlePageChange(pagination.currentPage + 1)}
              disabled={pagination.currentPage === pagination.totalPages}
              className="h-8 w-8 p-0"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </nav>
        </div>
      )}
    </div>
  );
};

export default SentEmails;