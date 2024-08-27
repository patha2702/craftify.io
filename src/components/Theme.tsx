import React from "react";
import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";
import { Switch } from "@/components/ui/switch";

const Theme = () => {
  const { theme, setTheme } = useTheme();
  const handleThemeToggle = () => {
    theme === "dark" ? setTheme("light") : setTheme("dark");
  };
  return (
    <div className="flex items-center space-x-2">
      <Sun className="h-4 w-4 text-yellow-500 dark:text-yellow-400" />
      <Switch
        checked={theme === "dark"}
        onCheckedChange={handleThemeToggle}
        className="bg-gray-300 dark:bg-gray-600"
      />
      <Moon className="h-4 w-4 text-indigo-600 dark:text-indigo-400" />
    </div>
  );
};

export default Theme;
