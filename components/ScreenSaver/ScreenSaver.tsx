'use client'
import React, { useEffect, useState } from "react";
import { gsap } from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { Those3DTexts } from "that-3d-text-library";
import "./style.scss"; // Import your CSS file here

gsap.registerPlugin(MotionPathPlugin);

interface Particle {
  floor: HTMLDivElement[];
  air: HTMLDivElement[];
}

const ScreenSaver: React.FC = () => {
  const letters = ["Basil Reji"];
  const STYLE_COUNT = 16;
  const FONT_COUNT = 4;
  const BOUNCE_DURATION = 1.3;
  const BOUNCE_HEIGHT = -90;
  const BOUNCE_WOBBLE = 0.75;
  const FLOOR_PARTICLE_COUNT = 1;
  const AIR_PARTICLE_COUNT = 4;

  const [count, setCount] = useState(0);
  const [letterCount, setLetterCount] = useState(0);

  useEffect(() => {
    new Those3DTexts();
    setupParticles();
    bounce();
  }, []);

  const setNextStyle = () => {
    document.body.classList.remove(`style-${count % STYLE_COUNT}`);
    const letter = document.querySelector("h1");
    if (letter) {
      letter.classList.remove(`font-${count % FONT_COUNT}`);
    }
    setCount(count + 1);
    document.body.classList.add(`style-${count % STYLE_COUNT}`);
    if (letter) {
      letter.classList.add(`font-${count % FONT_COUNT}`);
    }
  };

  const setupParticles = () => {
    const floor = document.querySelector(".floor");
    const air = document.querySelector(".air");

    for (let i = 0; i < FLOOR_PARTICLE_COUNT; i++) {
      let particle = document.createElement("div");
      if (floor) {
        floor.appendChild(particle);
        particles.floor.push(particle);
      }
    }

    for (let i = 0; i < AIR_PARTICLE_COUNT; i++) {
      let particle = document.createElement("div");
      if (air) {
        air.appendChild(particle);
        particles.air.push(particle);
      }
    }
  };

  const nextLetter = () => {
    setLetterCount(letterCount + 1);
    const letterElements = document.querySelectorAll("h1 span");
    if (letterElements) {
      letterElements.forEach(
        (l) =>
          ((l as HTMLElement).innerText = letters[letterCount % letters.length])
      );
    }
  };

  const glitch = () => {
    gsap.to("h1 span", {
      keyframes: [
        {
          opacity: "random(0, 1)",
          xPercent: "random(-10, 10)",
          yPercent: "random(-10, 10)",
        },
        {
          opacity: "random(0, 1)",
          xPercent: "random(-20, 20)",
          yPercent: "random(-20, 20)",
        },
        {
          opacity: "random(0, 1)",
          xPercent: "random(-10, 10)",
          yPercent: "random(-10, 10)",
        },
        { opacity: 1, xPercent: 0, yPercent: 0 },
      ],
      yoyo: true,
      ease: "power4.inOut",
      duration: BOUNCE_DURATION * 0.5,
    });
  };

  const bounce = () => {
    const tl = gsap.timeline({
      defaults: { duration: BOUNCE_DURATION * 0.5 },
      onComplete: () => {
        setNextStyle();
        nextLetter();
        bounce();
      },
    });
    tl.set(".squish", {
      scaleY: BOUNCE_WOBBLE,
      scaleX: 1 + (1 - BOUNCE_WOBBLE),
    });
    tl.to(
      ".squish",
      {
        scaleY: 1,
        scaleX: 1,
        duration: BOUNCE_DURATION * 0.6,
        ease: "elastic",
      },
      0
    );
    tl.to(
      document.querySelector("h1"),
      { yPercent: BOUNCE_HEIGHT, ease: "circ.out" },
      0
    );
    tl.to(".shadow", { opacity: 0.2, ease: "circ.out" }, 0);
    tl.to(
      document.querySelector("h1"),
      { yPercent: 10, ease: "circ.in" },
      BOUNCE_DURATION * 0.5
    );
    tl.to(".shadow", { opacity: 1, ease: "circ.in" }, BOUNCE_DURATION * 0.5);
    tl.to(
      document.querySelector("h1"),
      {
        rotationZ: "random(-150, 150)",
        rotationY: "random(-50, 50)",
        rotationX: "random(-50, 50)",
        duration: BOUNCE_DURATION,
        ease: "none",
      },
      0
    );

    gsap.fromTo(
      particles.floor,
      { x: 0, y: 0, scale: 1, opacity: 0.7 },
      {
        duration: Math.min(BOUNCE_DURATION, 0.7 + Math.random() * 0.8),
        ease: "power4.out",
        opacity: 0,
        scale: 2.5,
      }
    );

    particles.air.forEach((particle) => {
      particle.setAttribute("class", `p${Math.floor(Math.random() * 4)}`);
      gsap.fromTo(
        particle,
        { opacity: 1, x: 0, y: 0, z: 0, scale: "random(0.3, 1)" },
        {
          duration: Math.min(BOUNCE_DURATION, 0.3 + Math.random() * 0.3),
          ease: "linear",
          opacity: 0,
          rotate: "random(-100, 100)",
          x: "random(-250, 250)",
          y: "random(-200, -100)",
          z: "random(-400, 400)",
        }
      );
    });

    if (Math.random() > 0.95) glitch();
  };

  const particles: Particle = {
    floor: [],
    air: [],
  };

  return (
    <div className="container">
      <div className="shadow"></div>
      <div className="squish">
        <h1 data-3d-text>B</h1>
      </div>
      <div className="particles">
        <div className="floor"></div>
        <div className="air"></div>
      </div>
    </div>
  );
};

export default ScreenSaver;
