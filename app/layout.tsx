import "./globals.css";
import React from "react";

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>David Eadie</title>
      </head>
      <body className="bg-gray-900 font-mono text-gray-300 flex flex-col h-screen">
        <div className="bg-gray-950">
          <nav className="container mx-auto p-4 h-16 flex flex-row justify-between">
            <ul className="flex flex-row items-baseline">
              <li className="pr-4 text-xl font-bold text-white">David Eadie</li>
              <li className="hidden md:block md:pr-4 hover:text-gray-400">
                <a href="#About">About</a>
              </li>
              <li className="hidden md:block md:pr-4 hover:text-gray-400">
                <a href="#Portfolio">Portfolio</a>
              </li>
            </ul>
            <ul className="flex flex-row items-center">
              <li className="pl-3">
                <a href="https://github.com/TheEadie">
                  <svg className="w-5 h-5 fill-current hover:fill-gray-400">
                    <use href="icons.svg#GitHub" />
                  </svg>
                </a>
              </li>
              <li className="pl-3">
                <a href="https://www.linkedin.com/in/david-eadie-0789a637">
                  <svg className="w-5 h-5 fill-current hover:fill-gray-400">
                    <use href="icons.svg#LinkedIn" />
                  </svg>
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="flex-1 overflow-y-auto scroll-smooth">
          {children}
          <footer>
            <div className="bg-gray-950 h-16">
              <div className="container mx-auto p-5">
                <span>{"© 2012 - " + new Date().getFullYear() + " "}</span>
                <span>David Eadie</span>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
