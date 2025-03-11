"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { HomeIcon, BriefcaseIcon, MailIcon, MessageSquareIcon } from "lucide-react";
import { cn } from "@/app/lib/utils";

const navItems = [
  { path: "/", label: "Home", icon: HomeIcon },
  { path: "/work", label: "Work", icon: BriefcaseIcon },
  { path: "/chat", label: "Chat", icon: MessageSquareIcon },
  { path: "/contact", label: "Contact", icon: MailIcon },
] as const;

export function BottomNav() {
  const pathname = usePathname();

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 p-4">
      <motion.nav 
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className={cn(
          "relative mx-auto max-w-lg rounded-2xl border",
          "bg-background/60 backdrop-blur-xl",
          "shadow-lg shadow-black/5",
          "px-4 py-2"
        )}
      >
        <div className="flex items-center justify-center gap-2 md:gap-4">
          {navItems.map(({ path, label, icon: Icon }) => {
            const isActive = pathname === path;
            
            return (
              <Link 
                key={path}
                href={path}
                className="group relative px-3 py-1.5"
                prefetch={true}
              >
                <motion.div
                  className={cn(
                    "absolute inset-0 rounded-xl bg-primary/10",
                    "opacity-0 group-hover:opacity-100 transition-opacity",
                    isActive && "opacity-100"
                  )}
                  layoutId="bubble"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
                <motion.div 
                  className="relative flex flex-col items-center gap-1"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Icon 
                    className={cn(
                      "h-5 w-5 transition-colors duration-300",
                      isActive ? "text-primary" : "text-muted-foreground"
                    )} 
                  />
                  <span 
                    className={cn(
                      "text-xs font-medium transition-colors duration-300",
                      isActive ? "text-primary" : "text-muted-foreground"
                    )}
                  >
                    {label}
                  </span>
                </motion.div>
              </Link>
            );
          })}
        </div>
      </motion.nav>
    </div>
  );
} 