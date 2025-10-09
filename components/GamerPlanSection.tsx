"use client";
import { useState, useEffect } from "react";

interface ResponsiveImageProps {
  alt: string;
}

export default function ResponsiveImage({ alt }: ResponsiveImageProps) {
  const [isMedium, setIsMedium] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMedium(window.innerWidth >= 768); 
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const images = {
    md: "/gamer.jpg",
    sm: "/gamer-2.jpg",
  };

  return (
    <img
      src={isMedium ? images.md : images.sm}
      alt={alt}
      className="w-full h-screen object-cover transition-all duration-300"
    />
  );
}
