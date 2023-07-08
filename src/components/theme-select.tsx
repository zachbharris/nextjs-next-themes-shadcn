"use client";

import { useTheme } from "next-themes";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { LaptopIcon, MoonIcon, SunIcon } from "lucide-react";

export default function ThemeSelect() {
  const { theme, setTheme } = useTheme();

  return (
    <Select onValueChange={setTheme} defaultValue={theme}>
      <SelectTrigger className="w-[200px]">
        <SelectValue />
      </SelectTrigger>

      <SelectContent>
        <SelectItem value="dark">
          <div className="flex flex-row items-center gap-2">
            <MoonIcon className="h-4 w-4" />
            <span>Dark</span>
          </div>
        </SelectItem>
        <SelectItem value="light">
          <div className="flex flex-row items-center gap-2">
            <SunIcon className="h-4 w-4" />
            <span>Light</span>
          </div>
        </SelectItem>
        <SelectItem value="system">
          <div className="flex flex-row items-center gap-2">
            <LaptopIcon className="h-4 w-4" />
            <span>System</span>
          </div>
        </SelectItem>
      </SelectContent>
    </Select>
  );
}
