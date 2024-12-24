import Link from "next/link";
import React from "react";

const SignIn = () => {
  return (
    <div className="w-full flex mt-20 justify-center">
      <section className="flex flex-col w-[400px] text-white">
        <h1 className="text-3xl w-full text-center font-bold mb-6">Sign In</h1>

        <div className="mt-2 flex items-center">
          <h1>Don&apos;t have an account?</h1>
          <Link className="font-bold ml-2" href="/sign-up">
            Sign Up
          </Link>
        </div>
      </section>
    </div>
  );
};

export default SignIn;
