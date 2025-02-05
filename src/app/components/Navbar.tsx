"use client";

import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton, useUser } from "@clerk/nextjs";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from 'react';
import { ThemeToggle } from "./ThemeToggle";

interface NavigationItem {
  name: string;
  href: string;
  signIn: boolean;
  role: "ADMIN" | "STAFF" | undefined;
}

const navigation: NavigationItem[] = [
  { name: "Home", href: "/", signIn: false, role: undefined },
  { name: "Dashboard", href: "/dashboard", signIn: true, role: "STAFF" },
  { name: "Projects", href: "/projects", signIn: true, role: "ADMIN" },
  { name: "Settings", href: "/settings", signIn: true, role: "ADMIN" },
];

function isAllowed(item: NavigationItem, userRole: "ADMIN" | "STAFF" | undefined) {
  if (item.role === userRole) {
    return true;
  }
  else if (item.role === "STAFF" && userRole === "ADMIN") {
    return true;
  }
  else {
    return false;
  }
}

function getSecuredNavigationItems(item: NavigationItem, component: React.ReactNode, userRole: "ADMIN" | "STAFF" | undefined) {
  if (item.signIn && item.role !== undefined) {
    return <SignedIn key={item.name}>
      {isAllowed(item, userRole) ? component : null}
    </SignedIn>
  }
  else if (item.signIn && item.role === undefined) {
    return <SignedIn key={item.name}>
      {component}
    </SignedIn>
  }
  else {
    return <div key={item.name}>{component}</div>
  }
}

export default function Navbar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Add state for menu
  const { user } = useUser();
  const userRole = user?.publicMetadata.role as "ADMIN" | "STAFF" | undefined;

  return (
    <nav className="bg-transparent border-b border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo and primary navigation */}
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              {/* Mobile menu button */}
              <div className="flex items-center sm:hidden">
                <button
                  type="button"
                  onClick={() => setIsMenuOpen(!isMenuOpen)} // Add onClick handler
                  className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 dark:text-gray-200 hover:text-gray-500 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-orange-500"
                  aria-controls="mobile-menu"
                  aria-expanded={isMenuOpen} // Update aria-expanded
                >
                  <span className="sr-only">Open main menu</span>
                  <svg
                    className="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </button>
              </div>

              {/* Replace with your logo */}
              <Link href="/" className="text-l md:text-2xl font-bold text-orange-600 dark:text-orange-400 p-2">
                Secured Todo App
              </Link>
            </div>

            {/* Desktop navigation */}
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8 sm:items-center">
              {navigation.map((item) => (
                <div key={item.name}>
                  {getSecuredNavigationItems(item,
                    <Link
                      href={item.href}
                      className={`${pathname === item.href
                        ? "border-orange-500 text-gray-900 dark:text-white transition-all duration-300 ease-in-out transform hover:scale-105"
                        : "border-transparent text-gray-500 dark:text-gray-400 hover:border-gray-300 dark:hover:border-gray-600 hover:text-gray-700 dark:hover:text-gray-200 transition-all duration-300 ease-in-out transform hover:scale-105"
                        } inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium`}
                    >
                      {item.name}
                    </Link>,
                    userRole
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Right side buttons */}
          <div className="flex items-center">
            <ThemeToggle />
            <div className="flex-shrink-0">
              <SignedIn>
                <div className="flex items-center">
                  <div className="h-6 mr-4 w-px bg-gray-300 dark:bg-gray-600" />
                  <UserButton />
                </div>
              </SignedIn>
              <SignedOut>
                <div className="flex space-x-4">
                  <SignInButton mode="modal">
                    <button className="text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-orange-500 dark:hover:text-orange-400">
                      Sign in
                    </button>
                  </SignInButton>
                  <SignUpButton mode="modal">
                    <button className="text-sm font-medium text-white bg-orange-600 hover:bg-orange-500 px-4 py-2 rounded-md">
                      Sign up
                    </button>
                  </SignUpButton>
                </div>
              </SignedOut>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`sm:hidden overflow-hidden transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
        id="mobile-menu">
        <div className="pt-2 pb-3 space-y-1">
          {navigation.map((item) => (
            <div key={`mobile-${item.name}`}>
              {getSecuredNavigationItems(item,
                <Link
                  href={item.href}
                  className={`${pathname === item.href
                    ? "bg-orange-50 dark:bg-orange-900 border-orange-500 text-orange-700 dark:text-orange-300"
                    : "border-transparent text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 hover:border-gray-300 dark:hover:border-gray-600 hover:text-gray-800 dark:hover:text-white"
                    } block pl-3 pr-4 py-2 border-l-4 text-base font-medium`}
                >
                  {item.name}
                </Link>,
                userRole
              )}
            </div>
          ))}
          <SignedOut>
            <div className="pt-2">
              <SignInButton mode="modal">
                <button className="block w-full pl-3 pr-4 py-2 text-left text-base font-medium text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800">
                  Sign in
                </button>
              </SignInButton>
              <SignUpButton mode="modal">
                <button className="block w-full pl-3 pr-4 py-2 text-left text-base font-medium text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800">
                  Sign up
                </button>
              </SignUpButton>
            </div>
          </SignedOut>
        </div>
      </div>
    </nav>
  );
}