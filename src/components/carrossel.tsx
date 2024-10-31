"use client";
import { useState, useEffect } from "react";

const Carrosel = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const images = [
    { image: "https://static.pingendo.com/cover-bubble-dark.svg" },
    { image: "https://static.pingendo.com/cover-bubble-dark.svg" },
    { image: "https://static.pingendo.com/cover-bubble-dark.svg" },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div className="relative w-full overflow-hidden">
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentImage * 100}%)` }}
      >
        {images.map((img, index) => (
          <img
            key={index}
            src={img.image}
            alt=""
            className="h-full w-full flex-shrink-0 object-cover"
          />
        ))}
      </div>
      <div className="flex justify-center gap-2 pt-2">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => setCurrentImage(index)}
            className={`h-2 w-2 ${
              currentImage === index ? "bg-white" : "bg-gray-300 hover:bg-white"
            } rounded-full`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Carrosel;
