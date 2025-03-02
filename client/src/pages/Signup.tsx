"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { PasswordInput } from "@/components/ui/password-input";
import { Link, useNavigate } from "react-router-dom";
import axiosInstance from "@/api/axiosInstance";
import toast from "react-hot-toast";

const SignUp = () => {
  // ...
  const navigate = useNavigate();
  const formSchema = z
    .object({
      name: z.string().min(2, { message: "Enter name" }),
      email: z.string().email({ message: "Enter a valid email address" }),
      password: z.string().min(6, {
        message: "Password must be at least 6 characters.",
      }),
      confirmPassword: z.string().min(6, {
        message: "Confirm Password must be at least 6 characters.",
      }),
      appPassword: z.string().min(6, {
        message: "App Password must be at least 6 characters.",
      }),
    })
    .refine((data) => data.password === data.confirmPassword, {
      message: "Passwords do not match.",
      path: ["confirmPassword"], // Show error under confirm password field
    });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      appPassword: "",
    },
  });

  const onSubmit = async (data: any) => {
    try {
      const response = await axiosInstance.post("/user/signup", data);
      if (response.data) {
        toast.success("Registration successful!");
        localStorage.setItem("authToken", response.data.token);
        setTimeout(() => {
          navigate("/");
        }, 1500);
      }
    } catch (error: any) {
      const errorMessage =
        error.response?.data?.message || "Registration failed";
      console.error(errorMessage);

      // Special handling for app password errors
      if (errorMessage.includes("app password")) {
        toast(
          "Please make sure you're using a valid Gmail app password. You can generate one from your Google Account settings."
        );
      }

      console.error(error);
    }
  };

  return (
    <div className="w-full h-full bg-white pt-0 md:pt-8">
      <div className="w-full h-full flex flex-col-reverse md:flex-row">
        <div className="w-full md:w-1/2">
          <img
            src="/login/signup.png"
            alt="login banner"
            className="object-cover pointer-events-none select-none w-full md:w-[90%]"
          />
        </div>
        <div className="w-full md:w-1/2 flex flex-col items-start py-2 md:py-8 gap-3 md:gap-4 px-5 md:pl-10">
          <div className="flex flex-col gap-4 items-start pt-3 md:pt-8">
            <div className="w-full md:w-3/5 flex items-center justify-center mb-2 opacity-0"></div>
            <h1 className="text-2xl md:text-4xl text-[#111827] font-semibold">
              Registration 👋
            </h1>
            <p className="text-lg font-medium text-blue w-full md:w-[70%]">
              Today is a new day. It's your day. You shape it. Sign in to start
              managing your projects.
            </p>
          </div>
          <div className="w-full md:w-3/5">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-4"
              >
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Full Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter your full Name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter your Email" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Password</FormLabel>
                      <FormControl>
                        <PasswordInput
                          placeholder="Enter your password."
                          {...field}
                        />
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="confirmPassword"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel> Confirm Password</FormLabel>
                      <FormControl>
                        <PasswordInput
                          placeholder="Enter your password."
                          {...field}
                        />
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="appPassword"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel> App Password</FormLabel>
                      <FormControl>
                        <PasswordInput
                          placeholder="Enter your password."
                          {...field}
                        />
                      </FormControl>

                      <FormMessage />
                      <p className="text-sm text-gray-500 mt-1">
                        You can generate an app password from your Google
                        Account settings under Security → 2-Step Verification →
                        App passwords
                      </p>
                    </FormItem>
                  )}
                />
                <Button type="submit" className="w-full">
                  Submit
                </Button>
              </form>
            </Form>
          </div>

          <div className="w-full md:w-3/5 flex flex-col gap-2 items-center justify-center">
            <p className="text-sm text-blue">
              Don't have an account?{" "}
              <Link to="/login" className="text-[#3B529E]">
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
