import { Switch } from "@/components/ui/switch";
import {
  Undo,
  Redo,
  Monitor,
  Tablet,
  Smartphone,
  Settings,
  ZoomIn,
  ZoomOut,
  Move,
  Sun,
  Moon,
} from "lucide-react";
import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useEditor } from "@/context/Editor";
import Theme from "@/components/Theme";

const Topbar = () => {
  const { currentDevice, setCurrentDevice, zoom, setZoom } = useEditor();
  return (
    <section className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 py-2 px-4 flex justify-between items-center">
      <div className="flex items-center space-x-2">
        <Button variant="ghost" size="icon">
          <Undo className="h-4 w-4" />
        </Button>
        <Button variant="ghost" size="icon">
          <Redo className="h-4 w-4" />
        </Button>
      </div>
      <div className="flex items-center space-x-4">
        <Button
          variant={currentDevice === "desktop" ? "default" : "ghost"}
          size="icon"
          onClick={() => setCurrentDevice("desktop")}
        >
          <Monitor className="h-4 w-4" />
        </Button>
        <Button
          variant={currentDevice === "tablet" ? "default" : "ghost"}
          size="icon"
          onClick={() => setCurrentDevice("tablet")}
        >
          <Tablet className="h-4 w-4" />
        </Button>
        <Button
          variant={currentDevice === "mobile" ? "default" : "ghost"}
          size="icon"
          onClick={() => setCurrentDevice("mobile")}
        >
          <Smartphone className="h-4 w-4" />
        </Button>
        <Button
          variant={currentDevice === "custom" ? "default" : "ghost"}
          size="icon"
          onClick={() => setCurrentDevice("custom")}
        >
          <Settings className="h-4 w-4" />
        </Button>
        {/* {currentDevice === "custom" && (
          <>
            <Input
              type="number"
              placeholder="Width"
              value={customSize.width}
              onChange={(e) => handleCustomSizeChange("width", e.target.value)}
              className="w-20"
            />
            <Input
              type="number"
              placeholder="Height"
              value={customSize.height}
              onChange={(e) => handleCustomSizeChange("height", e.target.value)}
              className="w-20"
            />
          </>
        )} */}
      </div>
      <div className="flex items-center space-x-4">
        <Button variant="ghost" size="icon" onClick={() => setZoom(zoom * 1.1)}>
          <ZoomIn className="h-4 w-4" />
        </Button>
        <Button variant="ghost" size="icon" onClick={() => setZoom(zoom * 0.9)}>
          <ZoomOut className="h-4 w-4" />
        </Button>
        <Theme />
      </div>
    </section>
  );
};

export default Topbar;
