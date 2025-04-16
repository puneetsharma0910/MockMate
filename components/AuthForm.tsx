"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { Input } from "@/components/ui/input";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { toast } from "sonner";
const authformschema = (type: FormType) => {
  return z.object({
    name:
      type === "sign-up" ? z.string().min(2).max(50) : z.string().optional(),
    email: z.string().email(),
    password: z.string().min(8),
  });
};

const AuthForm = ({ type }: { type: FormType }) => {
  const formSchema = authformschema(type);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      if (type === "sign-up") {
        console.log("sign up", values);
      } else if (type === "sign-in") {
        console.log("sign in", values);
      }
    } catch (error) {
      console.log("Error: ", error);
      toast.error(`something went wrong ${error}`);
    }

    console.log(values);
  }

  const isSignIn = type === "sign-in";
  return (
    <div className="card-border lg:min-w-[566px] ">
      <div className="flex flex-col gap-6 py-14 px-10 card">
        <div className="flex flex-row gap-2 justify-center ">
          <Image src="./logo.svg" alt="logo" height={32} width={38} />
          <h2 className="text-primary-100">MockMate</h2>
        </div>
        <h3>Practise job interview with MockMate</h3>

        <Form {...form}>
          <form
            className="width-full space-y-6 mt-4 form"
            onSubmit={form.handleSubmit(onSubmit)}
          >
            {!isSignIn && <p>Name</p>}
            <p>Email</p>
            <p>Password</p>
            <Button className="btn" type="submit">
              {isSignIn ? "Sign In" : "Create an account"}
            </Button>
          </form>
        </Form>
        <p className="text-center">
          {isSignIn ? "Don't have an account?" : "Already have an account?"}
          {/* <Link
            href={isSignIn ? '/sign-in' : '/sign-up'}
            className="font-bold text-user-primary ml-1"
          >
            {!isSignIn ? "Sign In" : "Create an account"}
          </Link> */}

          <a
            href={!isSignIn ? "/sign-in" : "/sign-up"}
            className="font-bold text-user-primary ml-1"
          >
            {!isSignIn ? "Sign In" : "Create an account"}
          </a>
        </p>
      </div>
    </div>
  );
};

export default AuthForm;
