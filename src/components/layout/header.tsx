"use client";

import React, { useState } from "react";
import AuthForm from "@/features/auth/components/auth-form";

import Link from "next/link";
import { buttonVariants } from "../ui/button";
import { useLocale, useTranslations } from "next-intl";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "motion/react";
import { Icons } from "@/lib/icons";

type FooterLink = {
  title: string;
  url: string;
};

export default function Header() {
  const locale = useLocale();
  const [isOpen, setIsOpen] = useState(false);

  const t = useTranslations("navigation");
  const mainNavigation = t.raw("header") as FooterLink[];
  return (
    <section className="py-4 lg:py-8 fixed w-full top-0 z-50 ">
      <div className="container mx-auto">
        <div className="border border-secondary rounded-[36px] bg-background/70 backdrop-blur-sm mx-4">
          <div className="grid grid-cols-2 lg:grid-cols-3  p-2 items-center ">
            <div>
              <Icons.github className="w-24 ml-4" />
            </div>
            <div className="hidden lg:block">
              <nav className="flex items-center justify-center">
                <ul className="flex gap-4">
                  {mainNavigation.map((item) => (
                    <li key={item.title}>
                      <Link prefetch={false} href={item.url}>
                        {item.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
            <div className="flex justify-end gap-4 items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-menu md:hidden mr-4"
                onClick={() => setIsOpen(!isOpen)}
              >
                <line
                  x1="3"
                  y1="6"
                  x2="21"
                  y2="6"
                  className={cn(
                    "transition-all duration-300 origin-left",
                    isOpen && "rotate-45 -translate-y-1"
                  )}
                ></line>
                <line
                  x1="3"
                  y1="12"
                  x2="21"
                  y2="12"
                  className={cn(
                    "transition-all duration-300",
                    isOpen ? "opacity-0" : "opacity-100"
                  )}
                ></line>
                <line
                  x1="3"
                  y1="18"
                  x2="21"
                  y2="18"
                  className={cn(
                    "transition-all duration-300 origin-left",
                    isOpen && "-rotate-45 translate-y-1"
                  )}
                ></line>
              </svg>
              <div className="hidden md:flex gap-4 items-center">
                <Link
                  prefetch={false}
                  href={`/${locale}/dashboard`}
                  className={cn(
                    buttonVariants({ variant: "outline", size: "lg" }),
                    "rounded-full flex-shrink-0 items-center justify-center"
                  )}
                >
                  Demo
                </Link>
                <AuthForm />
              </div>
            </div>
          </div>
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ height: 0 }}
                animate={{ height: "auto" }}
                exit={{ height: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="flex flex-col items-center gap-4 py-4">
                  {mainNavigation.map((item) => (
                    <Link key={item.title} href={item.url} className="">
                      {item.title}
                    </Link>
                  ))}
                  <Link
                    prefetch={false}
                    href={`/${locale}/dashboard`}
                    className={cn(
                      buttonVariants({ variant: "outline", size: "lg" }),
                      "rounded-full flex-shrink-0 items-center justify-center"
                    )}
                  >
                    Demo
                  </Link>
                  <AuthForm />
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
