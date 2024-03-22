"use client";
import { rightImg, watchImg } from "../utils";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import VideoCarousel from "./VideoCarousel";

const Highlights = () => {
  useGSAP(() => {
    gsap.to("#title", {
      opacity: 1,
      delay: 1,
      y: 0,
      scrollTrigger: "#highlights",
    });

    gsap.to(".link", {
      opacity: 1,
      duration: 1,
      delay: 1,
      y: 0,
      stagger: 0.25,
    });
  }, []);

  return (
    <section
      id="highlights"
      className="common-padding h-full w-screen overflow-hidden bg-zinc"
    >
      <div className="screen-max-width">
        <div className="mb-12 w-full items-end justify-between md:flex">
          <h1 id="title" className="section-heading">
            Get the highlights.
          </h1>
          <div className="flex flex-wrap items-end gap-5">
            <p className="link">
              Watch the film
              <img src={watchImg} alt="Watch" className="ml-2"></img>
            </p>
            <p className="link">
              Watch the event
              <img src={rightImg} alt="right" className="ml-2"></img>
            </p>
          </div>
        </div>
        <VideoCarousel></VideoCarousel>
      </div>
    </section>
  );
};

export default Highlights;
