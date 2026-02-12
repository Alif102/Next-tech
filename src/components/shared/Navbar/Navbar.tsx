"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Logo } from "./logo";
import { NavMenu } from "./nav-menu";
import { NavigationSheet } from "./navigation-sheet";
import { signOut, useSession } from "next-auth/react";

const Navbar = () => {
  const session = useSession();
  const userName = session.data?.user.name;

  return (
    <nav className="fixed top-6 inset-x-4 h-16 max-w-screen-xl mx-auto rounded-full 
      bg-green-50/90 backdrop-blur-md 
      border border-green-200 
      shadow-[0_8px_25px_rgba(34,197,94,0.25)] 
      z-30"
    >
      <div className="flex h-full items-center justify-between px-6 md:px-8">
        {/* Logo */}
        <Link href="/" className="flex-shrink-0">
          <Logo />
        </Link>

        {/* Desktop Menu */}
        <NavMenu className="hidden md:block" />

        {/* Actions */}
        <div className="flex items-center gap-4 md:gap-6">
          {session.status === "authenticated" ? (
            <>
              <Button className="rounded-full px-5 py-2 text-sm md:text-base bg-green-600 hover:bg-green-700 text-white">
                <Link href="/dashboard" className="block w-full text-center">
                  {userName}
                </Link>
              </Button>

              <button
                onClick={() => signOut()}
                className="rounded-full px-5 py-2 text-sm md:text-base border border-green-300 
                hover:bg-green-100 text-green-700 transition"
              >
                Logout
              </button>
            </>
          ) : (
            <Button className="rounded-full px-5 py-2 text-sm md:text-base bg-green-600 hover:bg-green-700 text-white">
              <Link href="/login" className="block w-full text-center">
                Login
              </Link>
            </Button>
          )}

          {/* Mobile */}
          <div className="md:hidden">
            <NavigationSheet />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
