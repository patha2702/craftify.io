"use client"
import { Layout, Type, Image as Img, Component } from "lucide-react";
import React from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"



const LeftSideBar = () => {
  return (
    <section className="w-16 p-2 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700">
      <div className="flex flex-col items-center py-3">
        <div className="mb-4">
          <Image
            src="/assets/images/logo.png"
            alt="Logo"
            width={100}
            height={100}
            
            className="w-10 h-10 bg-transparent"
          />
        </div>
        <Button variant="ghost" size="icon">
          <Layout className="h-6 w-6 dark:text-gray-300" />
        </Button>
        <Button variant="ghost" size="icon">
          <Type className="h-6 w-6 dark:text-gray-300" />
        </Button>
        <Button variant="ghost" size="icon">
          <Img className="h-6 w-6 dark:text-gray-300" />
        </Button>

        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon">
              <Component className="h-6 w-6 dark:text-gray-300" />
            </Button>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Components</SheetTitle>
              <SheetDescription>
                Drag and drop components onto the canvas
              </SheetDescription>
            </SheetHeader>
            
          </SheetContent>
        </Sheet>
      </div>
    </section>
  );
};

export default LeftSideBar;
