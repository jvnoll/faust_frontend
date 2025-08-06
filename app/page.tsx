"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function Home() {
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = () => {
      setIsLoading(true);
      // Simulate network request
      setTimeout(() => {
          setIsLoading(false)
      }, 2000);
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <Button 
      disabled={isLoading} 
      onClick={handleClick}
      >
        {isLoading ? "Loading..." :  "Click me"}
      </Button>
    </div>
  );
}
