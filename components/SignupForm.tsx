"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import AuthButton from "./AuthButton";

const SignupForm = () => {
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const router = useRouter();
  const handleSumbmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    setError(null);

    const formData = new FormData(event.currentTarget);
    const result = null;
    if (result?.error) {
      setError(result?.error);
    } else if (resutl?.success) {
      router.push("/");
    }
    setLoading(false);
  };
  return (
    <div className="mx-auto w-[400] px-10 py-14 bg-green-500 rounded-lg mt-4">
      <form onSubmit={handleSumbmit}>
        <div className="flex gap-4 flex-col">
          <div>
            <label className="block text-sm gap-4 font-semibold mb-1">
              Username
            </label>
            <input
              type="text"
              placeholder="Username"
              id="username"
              name="username"
              className="mt-1 w-full p-2 h-10 rounded-md border border-none outline-none"
            />
          </div>
          <div>
            <label className="block text-sm gap-4 font-semibold mb-1">
              Email
            </label>
            <input
              type="email"
              placeholder="Usereamil"
              id="usereamil"
              name="useremail"
              className="mt-1 w-full p-2 h-10 rounded-md border border-none outline-none"
            />
          </div>
          <div>
            <label className="block text-sm gap-4 font-semibold mb-1">
              Password
            </label>
            <input
              type="password"
              placeholder="Password"
              id="password"
              name="password"
              className="mt-1 w-full p-2 h-10 rounded-md border border-none outline-none"
            />
          </div>
        </div>
        <div className="mt-6">
          <AuthButton loading={loading} type="signup" />
        </div>
        {error && <p className="text-red-500">{error}</p>}
      </form>
    </div>
  );
};

export default SignupForm;
