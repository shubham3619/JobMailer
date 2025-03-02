"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import toast from "react-hot-toast";
import axiosInstance from "@/api/axiosInstance";
import { useState } from "react";
import {  FileTextIcon, BuildingIcon,  UserIcon, PaperclipIcon, PlaneIcon, MailOpen } from "lucide-react";

const EmailSendForm = () => {
  const [loading, setLoading] = useState(false);
  
  const formSchema = z.object({
    hrName: z.string().min(2, { message: "Enter name" }),
    hrEmail: z.string().email({ message: "Enter a valid email address" }),
    companyName: z.string().min(2, { message: "Enter company name" }),
    subject: z.string().min(2, { message: "Enter subject " }),
    coverLetter: z
      .string()
      .min(10, { message: "Enter a cover letter (at least 10 characters)" }),
    resume: z.any().optional(),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      hrName: "",
      hrEmail: "",
      companyName: "",
      subject: "",
      coverLetter: "",
      resume: undefined,
    },
  });

  const onSubmit = async (data: any) => {
    setLoading(true);
    try {
      const formData = new FormData();
      formData.append("hrName", data.hrName);
      formData.append("hrEmail", data.hrEmail);
      formData.append("companyName", data.companyName);
      formData.append("subject", data.subject);
      formData.append("coverLetter", data.coverLetter);
      
      if (data.resume) {
        formData.append("resumeFile", data.resume);
      }

      console.log(data.resume)
  
      const response = await axiosInstance.post("/email/send", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
  
      if (response) {
        toast.success(response.data.message || "Email sent successfully");
        form.reset();
      }
    } catch (error) {
      toast.error(error?.message || "An error occurred");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };
  
  return (
    <div className="w-full bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 min-h-screen relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
      <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
      
      <div className="relative z-10 pt-16 pb-10 text-center mt-4">
        <div className="mb-8 flex justify-center">
          <div className="p-3 bg-white/10 backdrop-blur-md rounded-full">
            <PlaneIcon size={40} className="text-blue-300" />
          </div>
        </div>
        <h1 className="text-4xl md:text-6xl text-white font-bold mb-4 tracking-tight">
          Connect with <span className="text-blue-300">Recruiters</span>
        </h1>
        <p className="text-blue-100 text-lg md:text-xl max-w-2xl mx-auto opacity-90">
          Send professional emails to hiring managers and stand out from the crowd
        </p>
      </div>

      <div className="max-w-4xl mx-auto relative z-10 px-4 mb-16">
        <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl shadow-2xl overflow-hidden">
          {/* Progress indicator */}
          {loading && (
            <div className="absolute inset-0 flex items-center justify-center z-20 bg-black/40 backdrop-blur-sm">
              <div className="flex flex-col items-center">
                <div className="w-14 h-14 border-4 border-blue-400 border-t-transparent rounded-full animate-spin"></div>
                <p className="mt-4 text-white font-medium text-lg">Sending your application...</p>
              </div>
            </div>
          )}
          
          <div className="md:flex">
            {/* Left column - image or info */}
            <div className="hidden md:block md:w-2/5 bg-gradient-to-br from-blue-600 to-indigo-800 p-8 relative overflow-hidden">
              <div className="absolute inset-0 opacity-20">
                <div className="absolute top-10 left-10 w-32 h-32 border-2 border-white/20 rounded-lg rotate-12"></div>
                <div className="absolute bottom-20 left-20 w-40 h-40 border-2 border-white/20 rounded-full"></div>
                <div className="absolute top-40 right-10 w-24 h-24 border-2 border-white/20 rounded-lg -rotate-12"></div>
              </div>
              <div className="relative z-10 h-full flex flex-col justify-between">
                <div>
                  <h2 className="text-white text-2xl font-bold mb-4">Make Every Application Count</h2>
                  <p className="text-blue-100 opacity-90 mb-6">Stand out from other candidates with personalized emails that highlight your skills and passion.</p>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center mr-3">
                      <MailOpen size={16} className="text-white" />
                    </div>
                    <p className="text-blue-100">Direct communication with recruiters</p>
                  </div>
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center mr-3">
                      <FileTextIcon size={16} className="text-white" />
                    </div>
                    <p className="text-blue-100">Professional cover letter delivery</p>
                  </div>
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center mr-3">
                      <PaperclipIcon size={16} className="text-white" />
                    </div>
                    <p className="text-blue-100">Resume attachment capability</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Right column - form */}
            <div className="md:w-3/5 p-8">
              <h3 className="text-2xl font-semibold text-white mb-6">Application Details</h3>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <FormField
                      control={form.control}
                      name="hrName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-blue-100 font-medium flex items-center">
                            <UserIcon size={16} className="mr-2 opacity-70" />
                            HR Name
                          </FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="John Doe" 
                              {...field} 
                              className="bg-white/10 border-white/20 focus:border-blue-400 text-white placeholder:text-white/50 h-12 rounded-lg"
                              disabled={loading}
                            />
                          </FormControl>
                          <FormMessage className="text-rose-300" />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="hrEmail"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-blue-100 font-medium flex items-center">
                            <MailOpen size={16} className="mr-2 opacity-70" />
                            HR Email
                          </FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="hr@company.com" 
                              {...field} 
                              className="bg-white/10 border-white/20 focus:border-blue-400 text-white placeholder:text-white/50 h-12 rounded-lg"
                              disabled={loading}
                            />
                          </FormControl>
                          <FormMessage className="text-rose-300" />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="companyName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-blue-100 font-medium flex items-center">
                            <BuildingIcon size={16} className="mr-2 opacity-70" />
                            Company
                          </FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="Company name" 
                              {...field} 
                              className="bg-white/10 border-white/20 focus:border-blue-400 text-white placeholder:text-white/50 h-12 rounded-lg"
                              disabled={loading}
                            />
                          </FormControl>
                          <FormMessage className="text-rose-300" />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="subject"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-blue-100 font-medium flex items-center">
                            <FileTextIcon size={16} className="mr-2 opacity-70" />
                            Subject
                          </FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Application for [Position]"
                              {...field}
                              className="bg-white/10 border-white/20 focus:border-blue-400 text-white placeholder:text-white/50 h-12 rounded-lg"
                              disabled={loading}
                            />
                          </FormControl>
                          <FormMessage className="text-rose-300" />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="coverLetter"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-blue-100 font-medium">Cover Letter</FormLabel>
                        <FormControl>
                          <textarea
                            className="resize-none border border-white/20 rounded-lg w-full p-4 min-h-[160px] bg-white/10 text-white placeholder:text-white/50 focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-400"
                            placeholder="Write a personalized message to the hiring manager..."
                            {...field}
                            disabled={loading}
                          />
                        </FormControl>
                        <FormMessage className="text-rose-300" />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="resume"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-blue-100 font-medium">Resume / CV</FormLabel>
                        <FormControl>
                          <div className="relative">
                            <input
                              type="file"
                              accept=".pdf,.doc,.docx"
                              className="border border-white/20 p-3 rounded-lg w-full bg-white/10 text-white file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-600 file:text-white hover:file:bg-blue-500"
                              onChange={(e) => field.onChange(e.target.files?.[0])}
                              disabled={loading}
                            />
                            <PaperclipIcon className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white/50" size={20} />
                          </div>
                        </FormControl>
                        <p className="mt-1 text-xs text-blue-200/70">Accepted formats: PDF, DOC, DOCX (Max: 5MB)</p>
                        <FormMessage className="text-rose-300" />
                      </FormItem>
                    )}
                  />

                  <Button 
                    type="submit" 
                    className="w-full mt-8 h-12 text-lg font-medium bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 border-0 rounded-lg transition-all duration-300 shadow-lg hover:shadow-blue-500/20"
                    disabled={loading}
                  >
                    {loading ? (
                      <span className="flex items-center justify-center">
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending Application...
                      </span>
                    ) : (
                      <span className="flex items-center justify-center">
                        <PlaneIcon size={18} className="mr-2" />
                        Submit Application
                      </span>
                    )}
                  </Button>
                </form>
              </Form>
            </div>
          </div>
        </div>
        
        <p className="text-center text-white/60 text-sm mt-6">
          All information shared here is secure and only used for job application purposes
        </p>
      </div>
    </div>
  );
};

export default EmailSendForm;