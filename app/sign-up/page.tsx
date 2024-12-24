"use client";

import SignupForm from "@/components/SignupForm";
import Link from "next/link";
import React from "react";

// import Link from "next/link";

const SignUp = () => {
  return (
    <div className="w-full flex mt-20 justify-center">
      <section className="flex flex-col w-[400px] text-white">
        <h1 className="text-3xl w-full text-center font-bold">Sign Up</h1>
        <SignupForm />
        <div className="mt-2 flex items-center">
          <h1>Already have an account?</h1>
          <Link className="font-bold ml-2" href="/sign-in">
            Sign In
          </Link>
        </div>
      </section>
    </div>
  );
};

export default SignUp;
