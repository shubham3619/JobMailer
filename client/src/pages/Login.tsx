"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import toast from "react-hot-toast";

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
import { Loader } from "lucide-react";
import { useState } from "react";


const Login = () => {
  const [loading, setLoading] = useState(false);

  console.log("toast", toast);
  const navigate = useNavigate();
  const formSchema = z.object({
    email: z.string().min(2, {
      message: "Enter email address",
    }),
    password: z.string().min(6, {
      message: "Password must be at least 6 characters.",
    }),
  });
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data: any) => {
    setLoading(true);
    console.log(data);
    try {
      const response = await axiosInstance.post('/user/login', data);
      if (response) {
        console.log(response.data);
        toast.success(response.data.mesage || "Login successfully");
        localStorage.setItem("authToken", response.data.token);
        setTimeout(() => {
          navigate("/");
        }, 700);
      }
    } catch (error) {
      toast.error("invalid login");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full h-full bg-white pt-0 md:pt-8">
      <div className="w-full h-full flex flex-col-reverse md:flex-row">
        <div className="w-full md:w-1/2">
          <img
            src="/login/login.jpeg"
            alt="login banner"
            className="object-cover pointer-events-none select-none w-full md:w-[90%]"
          />
        </div>
        <div className="w-full md:w-1/2 flex flex-col items-start py-2 md:py-8 gap-3 md:gap-4 px-5 md:pl-10">
          <div className="flex flex-col gap-4 items-start pt-3 md:pt-8">
            <div className="w-full md:w-3/5 flex items-center justify-center mb-2 opacity-0"></div>
            <h1 className="text-2xl md:text-4xl text-[#111827] font-semibold">
              Welcome Back 👋
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
                className="space-y-8"
              >
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

                <Button type="submit" className="w-full">
                  {loading ? (
                    <Loader className=" size-5 shrink-0 animate-spin" />
                  ) : (
                    "Submit"
                  )}
                </Button>
              </form>
            </Form>
          </div>

          <div className="w-full md:w-3/5 flex flex-col gap-2 items-center justify-center">
            <p className="text-sm text-blue">
              Don't have an account?{" "}
              <Link to="/signup" className="text-[#3B529E]">
                Sign Up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
