'use client';

import { ThemeToggle } from "./components/ThemeToggle";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen gap-4">
      <ThemeToggle />
      <h1 className="text-2xl font-bold">Hello World</h1>
    </div>
  );
}
