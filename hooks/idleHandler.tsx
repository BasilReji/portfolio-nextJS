'use client'

import ScreenSaver from "@/components/ScreenSaver";
import React, { useState, useEffect } from "react";

const ScreenIdleAnimation = () => {
  const [isIdle, setIsIdle] = useState(false);

  useEffect(() => {
    const handleIdle = () => {
      setIsIdle(true);
    };

    // Use requestIdleCallback to detect when the screen is idle
    const idleCallbackId = requestIdleCallback(handleIdle);

    return () => {
      // Cancel the idle callback when the component unmounts
      cancelIdleCallback(idleCallbackId);
    };
  }, []);

  return <ScreenSaver />;
};

export default ScreenIdleAnimation;
