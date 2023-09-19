"use client";

import { useEffect } from "react";
import styles from "./page.module.scss";
import Link from "next/link";

export default function Home() {
  function norm(value: number, min: number, max: number): number {
    return (value - min) / (max - min);
  }

  function lerp(norm: number, min: number, max: number): number {
    return (max - min) * norm + min;
  }

  function map(
    value: number,
    sourceMin: number,
    sourceMax: number,
    destMin: number,
    destMax: number
  ): number {
    return lerp(norm(value, sourceMin, sourceMax), destMin, destMax);
  }

  function map2(
    value: number,
    sourceMin: number,
    sourceMax: number,
    destMin: number,
    destMax: number,
    percent: number
  ): number {
    return percent <= 0.5
      ? map(value, sourceMin, sourceMax, destMin, destMax)
      : map(value, sourceMin, sourceMax, destMax, destMin);
  }

  useEffect(() => {
    const el = document.querySelector("h1");

    if (el) {
      let text = el.innerText.trim();
      let numberOfChars = text.length;

      el.innerHTML =
        "<span>" +
        text
          .split("")
          .map((c) => {
            return c === " " ? "&nbsp;" : c;
          })
          .join("</span><span>") +
        "</span>";

      el.querySelectorAll("span").forEach((c, i) => {
        const skew = map(i, 0, numberOfChars - 1, -15, 15);
        const scale = map2(i, 0, numberOfChars - 1, 1, 3, i / numberOfChars);
        const letterSpace = map2(
          i,
          0,
          numberOfChars - 1,
          5,
          20,
          i / numberOfChars
        );

        c.style.transform = "skew(" + skew + "deg) scale(1, " + scale + ")";
        c.style.letterSpacing = letterSpace + "px";
      });
    }
  }, []);
  return (
    <main className={styles.main}>
      <div className={styles.homeContainer}>
        <p>Welcome to my den:</p>
        <h1>All Caps</h1>
        <p>
          I am a dude playing a dude disguised as another dude.
        </p>
        <Link href="/about">
          <span>Get to know me more</span>
          <i></i>
        </Link>
      </div>
    </main>
  );
}
