"use client";
import { useEffect, useState } from "react";
import GlossyNavBar from "../NavBar";
import IdleTimer from "../IdleTimer";
import HandLoader from "../HandLoader";
export function Wrapper(props: any) {
  const [isTimeOut, setIsTimeout] = useState(false); // Assuming setIsTimeout is a state setter function
  useEffect(() => {
    const timer = new IdleTimer({
      timeout: 3000, //expire after 40 minutes and logout
      onTimeout: () => {
        setIsTimeout(true);
      },
      onExpired: () => {
        setIsTimeout(true);
      },
    });

    return () => {
      timer.cleanUp();
    };
  }, [setIsTimeout]);
  if (isTimeOut) return <HandLoader />;
  return (
    <>
      <div>{props.children}</div>
      <GlossyNavBar />
    </>
  );
}
