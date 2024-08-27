import React from "react";
import { Component } from "lucide-react";
import {
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  Sheet,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import Image from "next/image"

const Components = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon">
          <Component className="h-6 w-6 dark:text-gray-300" />
        </Button>
      </SheetTrigger>
      <SheetContent className="w-full h-full overflow-y-scroll">
        <SheetHeader>
          <SheetTitle>Components</SheetTitle>
          <SheetDescription className="grid grid-cols-2 gap-2">
            <Image src="/assets/images/components/spotlightHero.png" alt="Spotlight Hero" width={1000} height={1000} className="w-full h-full rounded-md border" />
            <Image src="/assets/images/components/spotlightHero.png" alt="Spotlight Hero" width={1000} height={1000} className="w-full h-full rounded-md border" />
            <Image src="/assets/images/components/spotlightHero.png" alt="Spotlight Hero" width={1000} height={1000} className="w-full h-full rounded-md border" />
            <Image src="/assets/images/components/spotlightHero.png" alt="Spotlight Hero" width={1000} height={1000} className="w-full h-full rounded-md border" />
            <Image src="/assets/images/components/spotlightHero.png" alt="Spotlight Hero" width={1000} height={1000} className="w-full h-full rounded-md border" />
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};

export default Components;
