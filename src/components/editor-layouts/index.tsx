import { Layout } from "lucide-react";
import React from "react";
import { SheetTrigger, SheetContent, SheetHeader, SheetTitle, SheetDescription, Sheet } from "@/components/ui/sheet";
import {Button} from "@/components/ui/button"
import {Square, Columns2} from "lucide-react"

const Layouts = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon">
          <Layout className="h-6 w-6 dark:text-gray-300" />
        </Button>
      </SheetTrigger>
      <SheetContent className="w-full h-full overflow-y-scroll">
        <SheetHeader>
          <SheetTitle>Layouts</SheetTitle>
          <SheetDescription className="w-full grid grid-cols-2 gap-2 place-items-start">
            <Square className="w-full h-full" />
            <Columns2 className="w-full h-full" />
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};

export default Layouts;
