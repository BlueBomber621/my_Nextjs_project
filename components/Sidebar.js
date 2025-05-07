"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Sidebar() {
  const [sideOpen, setSideOpen] = useState(false);
  return (
    <div className="flex">
      <div className="md:hidden p-4">
        <button
          onClick={() => setSideOpen(!sideOpen)}
          className="z-50 border-2 border-primary-950 p-2 rounded-full dark:border-primary-50"
        >
          {sideOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {sideOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-30 md:hidden"
          onClick={() => setSideOpen(false)}
        />
      )}
      <div
        className={`
                fixed top-0 left-0 h-screen w-64 bg-primary-50 dark:bg-primary-900 text-primary-950 dark:text-primary-50 p-6 space-y-4
                transform transition-transform duration-300 z-40
                ${sideOpen ? "translate-x-0" : "-translate-x-full"}
                md:translate-x-0 md:sticky md:top-0 md:block
                `}
      >
        <div className="md:hidden">
          <button onClick={() => setSideOpen(!sideOpen)} className="z-50">
            {sideOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
        <h2 className="text-2xl font-bold text-primary-500">Navigation</h2>
        <nav className="space-y-2">
          <a
            href="/"
            className="block text-primary-800 dark:text-primary-75 hover:text-primary-600 hover:text-shadow-sm"
          >
            Home
          </a>
          <ul className="pl-4">
            <li>
              -{" "}
              <a
                href="/#introduction"
                className="text-primary-800 dark:text-primary-75 hover:text-primary-600 hover:text-shadow-sm"
              >
                Introduction
              </a>
            </li>
            <li>
              -{" "}
              <a
                href="/#coding-languages"
                className="text-primary-800 dark:text-primary-75 hover:text-primary-600 hover:text-shadow-sm"
              >
                Coding Languages
              </a>
            </li>
          </ul>
          <a
            href="/projects"
            className="block text-primary-800 dark:text-primary-75 hover:text-primary-600 hover:text-shadow-sm"
          >
            Projects
          </a>
          <ul className="pl-4">
            <li>
              -{" "}
              <a
                href="/projects#crud-operations"
                className="text-primary-800 dark:text-primary-75 hover:text-primary-600 hover:text-shadow-sm"
              >
                CRUD Operations
              </a>
            </li>
            <li>
              -{" "}
              <a
                href="/projects#api-fetching"
                className="text-primary-800 dark:text-primary-75 hover:text-primary-600 hover:text-shadow-sm"
              >
                API Fetching
              </a>
            </li>
            <li>
              -{" "}
              <a
                href="/projects#authentication"
                className="text-primary-800 dark:text-primary-75 hover:text-primary-600 hover:text-shadow-sm"
              >
                Authentication
              </a>
            </li>
            <li>
              -{" "}
              <a
                href="/projects#dynamic-routes"
                className="text-primary-800 dark:text-primary-75 hover:text-primary-600 hover:text-shadow-sm"
              >
                Dynamic Routing
              </a>
            </li>
          </ul>
          <a
            href="/about"
            className="block text-primary-800 dark:text-primary-75 hover:text-primary-400 dark:hover:text-primary-200 hover:text-shadow-sm"
          >
            About
          </a>
        </nav>
      </div>
    </div>
  );
}
