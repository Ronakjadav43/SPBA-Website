"use client";
import React, { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
type Props = {
  src: string;
  title: string;
  fallbackSrc?: string;
  width?: number;
  height?: number;
  className?: string;
};

const Img = ({
  src,
  title,
  fallbackSrc = "/images/no-image-icon.png",
  width = 100,
  height = 100,
  className = "",
}: Props) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [imgSrc, setImgSrc] = useState(src);

  return (
    <Image
      key={imgSrc}
      src={imgSrc}
      alt={title}
      className={cn(`image ${isLoaded ? "loaded" : "loading"}`, className)}
      width={width}
      height={height}
      layout="responsive"
      placeholder="blur"
      blurDataURL="/path/to/your/low-res-image.jpg" // Optional: Add a blur placeholder
      quality={100} // Adjust image quality (default is 75)
      priority={true} // Use priority for above-the-fold images
      onLoad={() => setIsLoaded(true)}
      onError={() => setImgSrc(fallbackSrc)} // If image fails, load fallback
    />
  );
};

export default Img;
