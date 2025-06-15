"use client";
import React from "react";
import { usePathname } from "next/navigation";
import { Avatar,AvatarFallback } from "@radix-ui/react-avatar";
import { Button } from "@/components/ui/button";
import { signOut } from "next-auth/react";

const Header = () => {
  const pathname = usePathname();

  if (pathname === "/") {
    return null;
  }

  return (
    <header className="w-full px-6 py-4 bg-white shadow-md flex justify-between items-center">
      <h1 className="text-2xl font-bold text-blue-600">Sketch-Buy</h1>

      <div className="flex items-center gap-4">
        <Avatar>
          <AvatarFallback className="cursor-pointer">U</AvatarFallback>
        </Avatar>

        <Button variant="outline" onClick={() => signOut({ callbackUrl: "/" })}>
          Logout
        </Button>
      </div>
    </header>
  );
};

export default Header;
