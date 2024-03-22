"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useEffect, useState } from "react";

const Hero = () => {
  const smallHero = "/assets/videos/smallHero.mp4";
  const largeHero = "/assets/videos/hero.mp4";
  const [videoSrc, setVideoSrc] = useState(
    typeof window !== "undefined" && window.innerWidth < 760
      ? smallHero
      : largeHero
  );

  const handleVideoSrcSet = () => {
    if (window.innerWidth < 760) {
      setVideoSrc(smallHero);
    } else {
      setVideoSrc(largeHero);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleVideoSrcSet);
    return () => {
      window.removeEventListener("resize", handleVideoSrcSet);
    };
  }, []);

  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, []);

  useGSAP(() => {
    gsap.to(".hero-title", {
      opacity: 1,
      duration: 1,
      delay: 1,
      y: 0,
    });

    gsap.to("#cta", {
      opacity: 1,
      duration: 1,
      delay: 2,
      y: -50,
    });
  }, []);

  return (
    <section className="nav-height relative w-full bg-black">
      <div className="flex-center h-5/6 w-full flex-col">
        <p className="hero-title">iPhone 15 Pro</p>
        <div className="w-9/12 md:w-10/12">
          {isClient && (
            <video
              autoPlay
              muted
              playsInline
              key={videoSrc}
              className="pointer-events-none "
            >
              <source src={videoSrc} type="video/mp4"></source>
            </video>
          )}
        </div>
      </div>
      <div
        id="cta"
        className="flex translate-y-20 flex-col items-center opacity-0"
      >
        <a href="#highlights" className="btn">
          Buy
        </a>
        <p className="text-xl font-normal">From $150/month or $799</p>
      </div>
    </section>
  );
};

export default Hero;
