import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="w-full flex items-center max-w-7xl mx-auto border-b-slate-600 border-b-4">
      <div className="flex w-full items-center justify-between my-4 text-white">
        <Link className="font-bold" href="/">
          Home
        </Link>

        <div className="flex items-center gap-x-5">
          <Link href="middleware">Middleware</Link>
          <Link href="/server">Server</Link>
        </div>
        <div className="flex items-center gap-x-5">
          <Link href="sign-in">
            <div className="bg-blue-600 text-white text-sm px-4 py-2 rounded-lg font-semibold">
              Sign in
            </div>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
