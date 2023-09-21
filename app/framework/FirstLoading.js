"use client";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";

function FirstLoading() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate an asynchronous task, like fetching data
    setTimeout(() => {
      setIsLoading(false);
    }, 1100); // Change the time as needed
  }, []);

  // Declare overlayStyles here with initial values
  const overlayStyles = {
    backgroundColor: "rgba(255, 255, 255, 1)",
    display: "flex",
    color: "white",
    zIndex: "9999",
    opacity: isLoading ? 1 : 0, // Initially fully visible, then fades out
    transition: "opacity 1s ease-in-out", // Transition over 1 second
  };

  if (isLoading) {
    return (
      <div
        className="fixed top-0 left-0 w-full h-full flex items-center justify-center fade-out-image"
        style={overlayStyles}
      >
        <img
          alt="Card background"
          className="h-20 pr-2 fade-in-image"
          src="/images/logo4.png"
        />
      </div>
    );
  }

  // Return null if not loading
  return null;
}

export default FirstLoading;
