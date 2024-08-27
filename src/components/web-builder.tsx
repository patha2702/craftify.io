"use client";
import React, { useState, useRef, useEffect } from "react";
import { useEditor } from "@/context/Editor";
import LeftSideBar from "./editor/LeftSideBar";
import Topbar from "./editor/Topbar";
import { devicePresets } from "@/constants";

const WebsiteBuilder = () => {
  const { currentDevice, setCurrentDevice, zoom, setZoom } = useEditor();
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [autoZoom, setAutoZoom] = useState(true);
  const [pan, setPan] = useState({ x: 0, y: 0 });
  const [customSize, setCustomSize] = useState({ width: 1920, height: 1080 });

  const canvasRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      if (containerRef.current && autoZoom) {
        const newZoom = calculateZoom();
        setZoom(newZoom);
        setPan({ x: 0, y: 0 });
      }
    };

    handleResize();
    document.addEventListener("resize", handleResize);
    return () => document.removeEventListener("resize", handleResize);
  }, [currentDevice, customSize, autoZoom]);

 

  const calculateZoom = () => {
    if (!containerRef.current) return 1;
    const containerWidth = containerRef.current.offsetWidth;
    const containerHeight = containerRef.current.offsetHeight;
    const deviceSize =
      currentDevice === "custom" ? customSize : devicePresets[currentDevice];
    const widthRatio = containerWidth / deviceSize.width;
    const heightRatio = containerHeight / deviceSize.height;
    return Math.min(widthRatio, heightRatio, 1) * 0.9;
  };

 

  const handleWheel = (e: any) => {
    if (e.ctrlKey) {
      e.preventDefault();
      const newZoom = zoom * (1 - e.deltaY * 0.01);
      setZoom(Math.min(Math.max(0.1, newZoom), 5));
    } else {
      setPan({
        x: pan.x - e.deltaX / zoom,
        y: pan.y - e.deltaY / zoom,
      });
    }
  };

  return (
    <div className={`flex h-screen ${isDarkMode ? "dark" : ""}`}>
      <LeftSideBar />
      <div className="flex-1 flex flex-col bg-gray-100 dark:bg-gray-900">
        <Topbar />
        {/* Canvas */}
        <div
          className="flex-1 overflow-hidden"
          ref={containerRef}
          onWheel={handleWheel}
        >
          <div
            className="w-full h-full flex items-center justify-center"
            style={{
              transform: `scale(${zoom}) translate(${pan.x}px, ${pan.y}px)`,
              transformOrigin: "center center",
            }}
          >
            <div
              ref={canvasRef}
              id="canvas"
              className="bg-white shadow-lg relative"
              style={{
                width:
                  currentDevice === "custom"
                    ? `${customSize.width}px`
                    : `${devicePresets[currentDevice].width}px`,
                height:
                  currentDevice === "custom"
                    ? `${customSize.height}px`
                    : `${devicePresets[currentDevice].height}px`,
              }}
            
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebsiteBuilder;
