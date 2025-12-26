"use client";

import { useState, useEffect } from "react";
import {
  Sword,
  Calendar,
  Users,
  Trophy,
  Monitor,
  Star,
  Zap,
  Target,
  Shield,
  ArrowDown,
  Github,
  Linkedin,
  CodeXml,
  Instagram,
} from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ByteQuestPage() {
  const [scrollY, setScrollY] = useState(0);

  // Gsap useEffect
  useEffect(() => {
    // RBU x Unstop animation
    gsap.fromTo(
      "#title-clg",
      {
        opacity: 0,
        y: -100,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.7,
        delay: 0.2,
        ease: "bounce.out",
      }
    );

    gsap.fromTo(
      "#title-x",
      {
        opacity: 0,
        y: -100,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.7,
        delay: 0.4,
        ease: "bounce.out",
      }
    );

    gsap.fromTo(
      "#title-plt",
      {
        opacity: 0,
        y: -100,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.7,
        delay: 0.5,
        ease: "bounce.out",
      }
    );

    // Main title animation
    gsap.fromTo(
      "#main-title",
      {
        opacity: 0,
        z: -100,
        filter: "blur(6px)",
        scale: 0.9,
      },
      {
        opacity: 1,
        z: 0,
        duration: 1.5,
        delay: 1,
        scale: 1,
        filter: "blur(0px)",
        ease: "quart.out",
      }
    );

    // Subtitle animation
    gsap.fromTo(
      "#subtitle",
      {
        opacity: 0,
        z: -100,
        scale: 0.9,
        filter: "blur(6px)",
      },
      {
        opacity: 1,
        z: 0,
        scale: 1,
        filter: "blur(0px)",
        duration: 0.5,
        delay: 2,
        ease: "quart.out",
      }
    );

    // CTA button animation
    gsap.fromTo(
      "#cta-btn1",
      {
        opacity: 0,
        z: -100,
        scale: 0.9,
        filter: "blur(6px)",
      },
      {
        opacity: 1,
        z: 0,
        scale: 1,
        filter: "blur(0px)",
        duration: 0.5,
        delay: 2,
        ease: "quart.out",
      }
    );
    gsap.fromTo(
      "#cta-btn2",
      {
        opacity: 0,
        z: -100,
        scale: 0.9,
        filter: "blur(6px)",
      },
      {
        opacity: 1,
        z: 0,
        scale: 1,
        filter: "blur(0px)",
        duration: 0.5,
        delay: 2.1,
        ease: "quart.out",
      }
    );

    // Info card animation
    gsap.from("#info-card1", {
      opacity: 0,
      x: -20,
      filter: "blur(3px)",
      duration: 0.4,
      delay: 2.9,
      ease: "quart.out",
    });
    gsap.from("#info-card2", {
      opacity: 0,
      x: -40,
      filter: "blur(3px)",
      duration: 0.5,
      delay: 3.1,
      ease: "quart.out",
    });
    gsap.from("#info-card3", {
      opacity: 0,
      x: -40,
      filter: "blur(3px)",
      duration: 0.5,
      delay: 3.3,
      ease: "quart.out",
    });
    gsap.from("#info-card4", {
      opacity: 0,
      x: -40,
      filter: "blur(3px)",
      duration: 0.5,
      delay: 3.5,
      ease: "quart.out",
    });

    // Scroll Indicatior animation
    gsap.from("#scroll-indicator", {
      opacity: 0,
      duration: 0.3,
      delay: 4,
      ease: "circ.out",
    });

    // Japanese text animation
    gsap.to("#jpn-txt-tl", {
      x: -100,
      y: 80,
      duration: 0.2,
      scrollTrigger: {
        trigger: "#jpn-txt-tl",
        start: "top 10%",
        scrub: true,
        // markers:true
      },
    });
    gsap.to("#jpn-txt-bl", {
      x: -100,
      y: 80,
      duration: 0.2,
      scrollTrigger: {
        trigger: "#jpn-txt-bl",
        start: "top 90%",
        scrub: true,
        // markers:true
      },
    });
    gsap.to("#jpn-txt-tr", {
      x: 50,
      y: 80,
      duration: 0.2,
      scrollTrigger: {
        trigger: "#jpn-txt-tr",
        start: "top 10%",
        scrub: true,
        // markers:true
      },
    });
    gsap.fromTo(
      "#quest-section",
      {
        opacity: 0,
        z: 0,
        scale: 0.8,
      },
      {
        opacity: 1,
        duration: 0.5,
        z: 30,
        scale: 1,
        scrollTrigger: {
          trigger: "#quest-section",
          start: "top 75%",
          end: "top 25%",
          scrub: true,
          // markers: true,0
        },
      }
    );
    gsap.fromTo(
      "#skills-section",
      {
        opacity: 0,
        z: 0,
        scale: 0.8,
      },
      {
        opacity: 1,
        duration: 0.5,
        z: 30,
        scale: 1,
        scrollTrigger: {
          trigger: "#skills-section",
          start: "top 75%",
          end: "top 25%",
          scrub: true,
          // markers: true,
        },
      }
    );
    gsap.fromTo(
      "#rule-section",
      {
        opacity: 0,
        z: 0,
        scale: 0.8,
      },
      {
        opacity: 1,
        duration: 0.5,
        z: 30,
        scale: 1,
        scrollTrigger: {
          trigger: "#rule-section",
          start: "top 75%",
          end: "top 25%",
          scrub: true,
          // markers: true,
        },
      }
    );
    gsap.fromTo(
      "#waiting-section",
      {
        opacity: 0,
        z: 0,
        scale: 0.8,
      },
      {
        opacity: 1,
        duration: 0.5,
        z: 30,
        scale: 1,
        scrollTrigger: {
          trigger: "#waiting-section",
          start: "top 75%",
          end: "top 25%",
          scrub: true,
          // markers: true,
        },
      }
    );
    gsap.fromTo(
      "#timeline-section",
      {
        opacity: 0,
        z: 0,
        scale: 0.8,
      },
      {
        opacity: 1,
        duration: 0.5,
        z: 30,
        scale: 1,
        scrollTrigger: {
          trigger: "#timeline-section",
          start: "top 75%",
          end: "top 25%",
          scrub: true,
          // markers: true,
        },
      }
    );
    gsap.fromTo(
      "#timeline-section-line",
      {
        opacity: 0,
        z: 0,
        scale: 0.8,
      },
      {
        opacity: 1,
        duration: 0.5,
        z: 30,
        scale: 1,
        scrollTrigger: {
          trigger: "#timeline-section-line",
          start: "top 75%",
          end: "top 25%",
          scrub: true,
          // markers: true,
        },
      }
    );
    gsap.fromTo(
      "#timeline-section-btm",
      {
        opacity: 0,
        z: 0,
        scale: 0.8,
      },
      {
        opacity: 1,
        duration: 0.5,
        z: 30,
        scale: 1,
        scrollTrigger: {
          trigger: "#timeline-section-btm",
          start: "top 75%",
          end: "top 25%",
          scrub: true,
          // markers: true,
        },
      }
    );
    gsap.fromTo(
      "#round1-l",
      {
        x: -20,
        opacity: 0,
        scale: 0.9,
        filter: "blur(2px)",
      },
      {
        x: 0,
        opacity: 1,
        scale: 1,
        filter: "blur(0px)",
        duration: 0.5,
        scrollTrigger: {
          trigger: "#round1-l",
          start: "top 55%",
          end: "top 45%",
          scrub: true,
          // markers:true,
        },
      }
    );
    gsap.fromTo(
      "#round1-r",
      {
        x: 20,
        opacity: 0,
        scale: 0.9,
        filter: "blur(2px)",
      },
      {
        x: 0,
        opacity: 1,
        scale: 1,
        filter: "blur(0px)",
        duration: 0.5,
        scrollTrigger: {
          trigger: "#round1-r",
          start: "top 55%",
          end: "top 40%",
          scrub: true,
          // markers:true,
        },
      }
    );

    gsap.fromTo(
      "#round2-l",
      {
        x: -20,
        opacity: 0,
        scale: 0.9,
        filter: "blur(2px)",
      },
      {
        x: 0,
        opacity: 1,
        scale: 1,
        filter: "blur(0px)",
        duration: 0.5,
        scrollTrigger: {
          trigger: "#round2-l",
          start: "top 55%",
          end: "top 45%",
          scrub: true,
          // markers:true,
        },
      }
    );
    gsap.fromTo(
      "#round2-r",
      {
        x: 20,
        opacity: 0,
        scale: 0.9,
        filter: "blur(2px)",
      },
      {
        x: 0,
        opacity: 1,
        scale: 1,
        filter: "blur(0px)",
        duration: 0.5,
        scrollTrigger: {
          trigger: "#round2-r",
          start: "top 55%",
          end: "top 40%",
          scrub: true,
          // markers:true,
        },
      }
    );
    gsap.fromTo(
      "#round3-l",
      {
        x: -20,
        opacity: 0,
        scale: 0.9,
        filter: "blur(2px)",
      },
      {
        x: 0,
        opacity: 1,
        scale: 1,
        filter: "blur(0px)",
        duration: 0.5,
        scrollTrigger: {
          trigger: "#round3-l",
          start: "top 55%",
          end: "top 45%",
          scrub: true,
          // markers:true,
        },
      }
    );
    gsap.fromTo(
      "#round3-r",
      {
        x: 20,
        opacity: 0,
        scale: 0.9,
        filter: "blur(2px)",
      },
      {
        x: 0,
        opacity: 1,
        scale: 1,
        filter: "blur(0px)",
        duration: 0.5,
        scrollTrigger: {
          trigger: "#round3-r",
          start: "top 55%",
          end: "top 40%",
          scrub: true,
          // markers:true,
        },
      }
    );
    gsap.fromTo(
      "#round4-l",
      {
        x: -20,
        opacity: 0,
        scale: 0.9,
        filter: "blur(2px)",
      },
      {
        x: 0,
        opacity: 1,
        scale: 1,
        filter: "blur(0px)",
        duration: 0.5,
        scrollTrigger: {
          trigger: "#round4-l",
          start: "top 55%",
          end: "top 45%",
          scrub: true,
          // markers:true,
        },
      }
    );
    gsap.fromTo(
      "#round4-r",
      {
        x: 20,
        opacity: 0,
        scale: 0.9,
        filter: "blur(2px)",
      },
      {
        x: 0,
        opacity: 1,
        scale: 1,
        filter: "blur(0px)",
        duration: 0.5,
        scrollTrigger: {
          trigger: "#round4-r",
          start: "top 55%",
          end: "top 40%",
          scrub: true,
          // markers:true,
        },
      }
    );
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* Hero Section */}
      <section
        id="hero-section"
        className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-white via-purple-50 to-pink-50 border-b-4 border-black overflow-hidden"
      >
        {/* Speed Lines Background */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(25)].map((_, i) => (
            <div
              key={i}
              className="absolute bg-black/10 animate-[slide-down_3s_linear_infinite]"
              style={{
                left: `${(i * 4) % 100}%`,
                width: "2px",
                height: "200%",
                top: "-100%",
                transform: `rotate(${15 + (i % 5)}deg)`,
                animationDelay: `${i * 0.1}s`,
              }}
            />
          ))}
        </div>

        {/* Action Burst Lines from Top Corner */}
        <div className="absolute top-0 right-0 w-96 h-96">
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="absolute top-0 right-0 bg-yellow-400/20 origin-top-right"
              style={{
                width: "4px",
                height: "400px",
                transform: `rotate(${i * 15}deg)`,
              }}
            />
          ))}
        </div>

        {/* Japanese Sound Effects */}
        <div
          id={"jpn-txt-tl"}
          className="absolute top-20 left-20 text-6xl font-black text-teal-500/20 rotate-12"
        >
          ドドド
        </div>
        <div
          id={"jpn-txt-tr"}
          className="absolute top-40 right-20 text-5xl font-black text-blue-500/20 -rotate-12"
        >
          バン!
        </div>
        <div
          id={"jpn-txt-bl"}
          className="absolute bottom-40 left-20 text-7xl font-black text-pink-500/20 rotate-6"
        >
          ゴゴゴ
        </div>

        <div className="relative z-10 text-center px-4 w-full max-w-6xl">
          {/* Organizers Badges */}
          <div className="flex items-center justify-center gap-4 mb-8 flex-wrap">
            <div
              id={"title-clg"}
              className="bg-teal-400 text-black font-black text-sm px-6 py-2 border-4 border-black rotate-2 shadow-[4px_4px_0_0_rgba(0,0,0,1)]"
            >
              GFG CAMPUS BODY RBU
            </div>
            <div id={"title-x"} className="text-4xl font-black">
              ×
            </div>
            <div
              id={"title-plt"}
              className="bg-blue-400 text-black font-black text-sm px-6 py-2 border-4 border-black -rotate-2 shadow-[4px_4px_0_0_rgba(0,0,0,1)]"
            >
              UNSTOP
            </div>
          </div>

          {/* Main Title */}
          <h1
            id={"main-title"}
            className="text-7xl md:text-9xl font-black italic mb-6 relative"
            style={{
              WebkitTextStroke: "3px black",
              textShadow: `
                2px 2px 0 #6b7280,
                4px 4px 0 #4b5563,
                4px 4px 0 #14b8a6,
                8px 8px 0 #0ea5e9
              `,
            }}
          >
            <span className="text-white">BYTE QUEST</span>
          </h1>

          {/* Subtitle in Speech Bubble */}
          <div id={"subtitle"} className="relative inline-block mb-12">
            <div className="bg-white border-4 border-black px-8 py-4 rounded-3xl shadow-[6px_6px_0_0_rgba(0,0,0,1)] relative">
              <p className="text-xl md:text-2xl font-bold text-black">
                AI-POWERED ONLINE HACKATHON
              </p>
              {/* Speech Bubble Tail */}
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[20px] border-l-transparent border-r-[20px] border-r-transparent border-t-[20px] border-t-white" />
              <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[24px] border-l-transparent border-r-[24px] border-r-transparent border-t-[24px] border-t-black" />
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex items-center justify-center gap-6 mb-16 flex-wrap">
            <button
              id={"cta-btn1"}
              className="bg-red-500 hover:bg-red-600 text-white font-black text-xl px-8 py-4 border-4 border-black uppercase shadow-[6px_6px_0_0_rgba(0,0,0,1)] hover:shadow-[4px_4px_0_0_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all"
            >
              REGISTER NOW
            </button>
            <button
              id={"cta-btn2"}
              className="bg-yellow-400 hover:bg-yellow-500 text-black font-black text-xl px-8 py-4 border-4 border-black uppercase shadow-[6px_6px_0_0_rgba(0,0,0,1)] hover:shadow-[4px_4px_0_0_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all"
            >
              LEARN MORE
            </button>
          </div>

          {/* Info Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mb-12">
            <div
              id={"info-card1"}
              className="bg-teal-400 border-4 border-black p-4 shadow-[4px_4px_0_0_rgba(0,0,0,1)]"
            >
              <Calendar className="w-8 h-8 mb-2 mx-auto" />
              <div className="font-black text-sm">3-4 JAN 2026</div>
            </div>
            <div
              id={"info-card2"}
              className="bg-blue-400 border-4 border-black p-4 shadow-[4px_4px_0_0_rgba(0,0,0,1)]"
            >
              <Users className="w-8 h-8 mb-2 mx-auto" />
              <div className="font-black text-sm">2-4 MEMBERS</div>
            </div>
            <div
              id={"info-card3"}
              className="bg-pink-400 border-4 border-black p-4 shadow-[4px_4px_0_0_rgba(0,0,0,1)]"
            >
              <Trophy className="w-8 h-8 mb-2 mx-auto" />
              <div className="font-black text-sm">₹10000 PRIZE</div>
            </div>
            <div
              id={"info-card4"}
              className="bg-yellow-400 border-4 border-black p-4 shadow-[4px_4px_0_0_rgba(0,0,0,1)]"
            >
              <Monitor className="w-8 h-8 mb-2 mx-auto" />
              <div className="font-black text-sm">ONLINE MODE</div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div id={"scroll-indicator"} className="animate-bounce">
            <ArrowDown className="w-12 h-12 mx-auto text-black" />
          </div>
        </div>
      </section>

      {/* Story Section - Comic Panels */}
      <section
        id={"quest-section"}
        className="py-20 px-4 bg-white border-b-4 border-black"
      >
        <div className="max-w-6xl mx-auto">
          <div className="mb-12 text-center">
            <div className="inline-block bg-yellow-400 border-4 border-black px-8 py-3 -rotate-1 shadow-[6px_6px_0_0_rgba(0,0,0,1)]">
              <h2 className="text-4xl md:text-5xl font-black italic">
                THE QUEST BEGINS
              </h2>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Panel 1 */}
            <div className="relative border-4 border-black bg-gradient-to-br from-purple-300 to-pink-300 p-8 shadow-[8px_8px_0_0_rgba(0,0,0,1)]">
              <div className="absolute -top-3 -left-3 bg-black text-white px-3 py-1 font-black text-sm border-2 border-white">
                PANEL 01
              </div>
              {/* Thought Bubble */}
              <div className="relative bg-white border-3 border-black rounded-[40px] p-6 mb-4">
                <p className="font-bold text-lg">Semester chal raha tha...</p>
                <p className="text-sm mt-2">Everything normal tha...</p>
                {/* Thought bubble circles */}
                <div className="absolute -bottom-8 left-8">
                  <div className="w-4 h-4 bg-white border-2 border-black rounded-full" />
                </div>
                <div className="absolute -bottom-12 left-6">
                  <div className="w-2 h-2 bg-white border-2 border-black rounded-full" />
                </div>
              </div>
              <div className="text-6xl text-center mt-8">😌</div>
            </div>

            {/* Panel 2 */}
            <div className="relative border-4 border-black bg-gradient-to-br from-blue-300 to-teal-300 p-8 shadow-[8px_8px_0_0_rgba(0,0,0,1)]">
              <div className="absolute -top-3 -left-3 bg-black text-white px-3 py-1 font-black text-sm border-2 border-white">
                PANEL 02
              </div>
              {/* Speech Bubble */}
              <div className="relative bg-white border-3 border-black rounded-2xl p-6 mb-4">
                <p className="font-bold text-lg">
                  Assignments pile up hone lage...
                </p>
                <p className="text-sm mt-2">Projects pending the...</p>
                {/* Speech bubble tail */}
                <div className="absolute -bottom-3 left-12 w-0 h-0 border-l-[15px] border-l-transparent border-r-[15px] border-r-transparent border-t-[15px] border-t-white" />
                <div className="absolute -bottom-4 left-11 w-0 h-0 border-l-[18px] border-l-transparent border-r-[18px] border-r-transparent border-t-[18px] border-t-black" />
              </div>
              <div className="text-6xl text-center mt-8">😰</div>
            </div>

            {/* Panel 3 */}
            <div className="relative border-4 border-black bg-gradient-to-br from-yellow-300 to-orange-300 p-8 shadow-[8px_8px_0_0_rgba(0,0,0,1)] overflow-hidden">
              <div className="absolute -top-3 -left-3 bg-black text-white px-3 py-1 font-black text-sm border-2 border-white z-10">
                PANEL 03
              </div>
              {/* Dramatic Speed Lines */}
              {[...Array(15)].map((_, i) => (
                <div
                  key={i}
                  className="absolute bg-black/20"
                  style={{
                    left: `${(i * 7) % 100}%`,
                    width: "3px",
                    height: "150%",
                    top: "-25%",
                    transform: `rotate(${25 + (i % 3) * 5}deg)`,
                  }}
                />
              ))}
              <div className="relative z-10">
                <div className="bg-red-500 border-3 border-black p-4 mb-4 transform -rotate-2">
                  <p
                    className="font-black text-2xl text-white text-center"
                    style={{ WebkitTextStroke: "1px black" }}
                  >
                    THE GEEKS APPEAR!!
                  </p>
                </div>
                <div className="text-6xl text-center mt-8">🔥💻🔥</div>
                <p className="text-center font-black text-xl mt-4">
                  BYTE QUEST IS HERE!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section
        id={"skills-section"}
        className="py-20 px-4 bg-gradient-to-b from-white to-gray-100 border-b-4 border-black"
      >
        <div className="max-w-6xl mx-auto">
          <div className="mb-12 text-center">
            <div className="inline-block bg-red-500 border-4 border-black px-8 py-3 rotate-1 shadow-[6px_6px_0_0_rgba(0,0,0,1)] relative">
              <Star className="absolute -top-4 -left-4 w-8 h-8 text-yellow-400 fill-yellow-400" />
              <Star className="absolute -top-4 -right-4 w-8 h-8 text-yellow-400 fill-yellow-400" />
              <h2 className="text-4xl md:text-5xl font-black italic text-white">
                SKILLS NEEDED
              </h2>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="relative group">
              <div className="absolute -top-3 -left-3 w-12 h-12 bg-black text-white rounded-full flex items-center justify-center font-black text-xl border-4 border-white z-10">
                1
              </div>
              <div className="bg-red-400 border-4 border-black p-8 shadow-[6px_6px_0_0_rgba(0,0,0,1)] hover:shadow-[4px_4px_0_0_rgba(0,0,0,1)] hover:-translate-y-0.5 transition-all">
                <Zap className="w-16 h-16 mb-4 mx-auto" />
                <h3 className="text-2xl font-black mb-2 text-center">
                  SHARP LOGIC
                </h3>
                <p className="text-center font-bold">Logic sharp chahiye</p>
              </div>
            </div>

            <div className="relative group">
              <div className="absolute -top-3 -left-3 w-12 h-12 bg-black text-white rounded-full flex items-center justify-center font-black text-xl border-4 border-white z-10">
                2
              </div>
              <div className="bg-blue-400 border-4 border-black p-8 shadow-[6px_6px_0_0_rgba(0,0,0,1)] hover:shadow-[4px_4px_0_0_rgba(0,0,0,1)] hover:-translate-y-0.5 transition-all">
                <Target className="w-16 h-16 mb-4 mx-auto" />
                <h3 className="text-2xl font-black mb-2 text-center">
                  FAST SPEED
                </h3>
                <p className="text-center font-bold">Speed fast honi chahiye</p>
              </div>
            </div>

            <div className="relative group">
              <div className="absolute -top-3 -left-3 w-12 h-12 bg-black text-white rounded-full flex items-center justify-center font-black text-xl border-4 border-white z-10">
                3
              </div>
              <div className="bg-yellow-400 border-4 border-black p-8 shadow-[6px_6px_0_0_rgba(0,0,0,1)] hover:shadow-[4px_4px_0_0_rgba(0,0,0,1)] hover:-translate-y-0.5 transition-all">
                <Shield className="w-16 h-16 mb-4 mx-auto" />
                <h3 className="text-2xl font-black mb-2 text-center">
                  UNBREAKABLE FOCUS
                </h3>
                <p className="text-center font-bold">Focus unbreakable</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Rules Section */}
      <section className="py-20 px-4 bg-black relative overflow-hidden">
        <div id={"rule-section"}>
          {/* Red gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-red-900/50 to-black" />

          {/* Japanese-style banner */}
          <div className="relative z-10 max-w-6xl mx-auto">
            <div className="mb-12 text-center relative">
              <div className="inline-block bg-red-600 border-4 border-white px-12 py-4 shadow-[8px_8px_0_0_rgba(255,255,255,0.3)]">
                <h2 className="text-4xl md:text-5xl font-black italic text-white">
                  賞金 QUEST RULES 規則
                </h2>
              </div>
              {/* Decorative tassels */}
              <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 flex gap-8">
                <div className="w-1 h-12 bg-red-600" />
                <div className="w-1 h-12 bg-red-600" />
                <div className="w-1 h-12 bg-red-600" />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mt-20">
              <div className="relative bg-white border-4 border-white p-8 shadow-[8px_8px_0_0_rgba(255,255,255,0.2)]">
                <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-teal-400 to-blue-500 border-4 border-white flex items-center justify-center font-black text-2xl rotate-12 shadow-[4px_4px_0_0_rgba(0,0,0,1)]">
                  1
                </div>
                <div className="text-6xl mb-4">👥</div>
                <h3 className="text-2xl font-black mb-2">TEAM BANAO</h3>
                <p className="font-bold text-gray-700">
                  Team banao, roles divide karo, aur game plan set karo
                </p>
              </div>

              <div className="relative bg-white border-4 border-white p-8 shadow-[8px_8px_0_0_rgba(255,255,255,0.2)]">
                <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-pink-400 to-red-500 border-4 border-white flex items-center justify-center font-black text-2xl rotate-12 shadow-[4px_4px_0_0_rgba(0,0,0,1)]">
                  2
                </div>
                <div className="text-6xl mb-4">🎓</div>
                <h3 className="text-2xl font-black mb-2">RBU STUDENTS ONLY</h3>
                <p className="font-bold text-gray-700">
                  Sirf RBU ke students hi participate kar sakte hain
                </p>
              </div>

              <div className="relative bg-white border-4 border-white p-8 shadow-[8px_8px_0_0_rgba(255,255,255,0.2)]">
                <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-blue-400 to-purple-500 border-4 border-white flex items-center justify-center font-black text-2xl rotate-12 shadow-[4px_4px_0_0_rgba(0,0,0,1)]">
                  3
                </div>
                <div className="text-6xl mb-4">💻</div>
                <h3 className="text-2xl font-black mb-2">ONLINE FORMAT</h3>
                <p className="font-bold text-gray-700">
                  Ghar baithe compete karo, laptop aur internet ready rakho
                </p>
              </div>

              <div className="relative bg-white border-4 border-white p-8 shadow-[8px_8px_0_0_rgba(255,255,255,0.2)]">
                <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 border-4 border-white flex items-center justify-center font-black text-2xl rotate-12 shadow-[4px_4px_0_0_rgba(0,0,0,1)]">
                  4
                </div>
                <div className="text-6xl mb-4">💰</div>
                <h3 className="text-2xl font-black mb-2">PRIZE POOL ₹10000</h3>
                <p className="font-bold text-gray-700">
                  Skills ka reward milta hai - total ₹10000 prize money &
                  exciting goodies!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Event Timeline Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-pink-100 via-purple-100 to-blue-100 border-b-4 border-black relative overflow-hidden">
        {/* Speed lines in background */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute bg-black/5"
              style={{
                left: `${(i * 5) % 100}%`,
                width: "2px",
                height: "200%",
                top: "-50%",
                transform: `rotate(${20 + (i % 4) * 3}deg)`,
              }}
            />
          ))}
        </div>

        {/* Japanese sound effect */}
        <div className="absolute top-10 right-10 text-7xl font-black text-teal-400/20 -rotate-12">
          時間
        </div>

        <div className="relative z-10 max-w-5xl mx-auto">
          <div id={"timeline-section"} className="mb-16 text-center">
            <div className="inline-block bg-gradient-to-r from-teal-400 to-blue-400 border-4 border-black px-12 py-4 -rotate-1 shadow-[8px_8px_0_0_rgba(0,0,0,1)]">
              <h2
                className="text-4xl md:text-5xl font-black italic text-white"
                style={{ WebkitTextStroke: "2px black" }}
              >
                EVENT TIMELINE
              </h2>
            </div>
          </div>

          <div className="relative">
            {/* Vertical Timeline Line */}
            <div
              id={"timeline-section-line"}
              className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-black"
            />

            {/* Timeline Events */}
            <div className="space-y-12">
              {/* Event 1: Kickoff */}
              <div className="relative flex flex-col md:flex-row items-start md:items-center gap-8">
                {/* Time Badge */}
                <div
                  id={"round1-l"}
                  className="md:w-1/2 md:text-right md:pr-12"
                >
                  <div className="inline-block bg-red-500 border-4 border-black px-6 py-3 rotate-2 shadow-[6px_6px_0_0_rgba(0,0,0,1)]">
                    <p className="font-black text-xl text-white">JAN 3 (2PM)</p>
                  </div>
                </div>

                {/* Center Circle */}
                <div id={"round1-r"} className="absolute left-8 md:left-1/2 -translate-x-1/2 w-16 h-16 bg-red-500 border-4 border-black rounded-full flex items-center justify-center shadow-[4px_4px_0_0_rgba(0,0,0,1)] z-10">
                  <Zap className="w-8 h-8 text-white" />
                </div>

                {/* Event Details */}
                <div
                  id={"round1-r"}
                  className="md:w-1/2 md:pl-12 ml-24 md:ml-0"
                >
                  <div className="bg-white border-4 border-black p-6 shadow-[6px_6px_0_0_rgba(0,0,0,1)] relative">
                    <div className="absolute -top-3 -right-3 bg-red-500 text-white font-black text-sm px-4 py-1 border-2 border-black">
                      ROUND 1
                    </div>
                    <h3 className="text-2xl font-black mb-2">Kickoff</h3>
                    <p className="font-bold text-gray-700">
                      24-hour hackathon begins! Code your heart out and submit
                      your GitHub repo & PPT.
                    </p>
                  </div>
                </div>
              </div>

              {/* Event 2: Deadline */}
              <div className="relative flex flex-col md:flex-row items-start md:items-center gap-8">
                {/* Time Badge */}
                <div
                  id={"round2-l"}
                  className="md:w-1/2 md:text-right md:pr-12"
                >
                  <div className="inline-block bg-yellow-400 border-4 border-black px-6 py-3 -rotate-2 shadow-[6px_6px_0_0_rgba(0,0,0,1)]">
                    <p className="font-black text-xl text-black">JAN 4 (2PM)</p>
                  </div>
                </div>

                {/* Center Circle */}
                <div id={"round2-r"} className="absolute left-8 md:left-1/2 -translate-x-1/2 w-16 h-16 bg-yellow-400 border-4 border-black rounded-full flex items-center justify-center shadow-[4px_4px_0_0_rgba(0,0,0,1)] z-10">
                  <Target className="w-8 h-8 text-black" />
                </div>

                {/* Event Details */}
                <div
                  id={"round2-r"}
                  className="md:w-1/2 md:pl-12 ml-24 md:ml-0"
                >
                  <div className="bg-white border-4 border-black p-6 shadow-[6px_6px_0_0_rgba(0,0,0,1)] relative">
                    <div className="absolute -top-3 -right-3 bg-yellow-400 text-black font-black text-sm px-4 py-1 border-2 border-black">
                      ROUND 1
                    </div>
                    <h3 className="text-2xl font-black mb-2">Deadline</h3>
                    <p className="font-bold text-gray-700">
                      Submission window closes. The judges begin the preliminary
                      scan of the digital realms.
                    </p>
                  </div>
                </div>
              </div>

              {/* Event 3: Showdown */}
              <div className="relative flex flex-col md:flex-row items-start md:items-center gap-8">
                {/* Time Badge */}
                <div
                  id={"round3-l"}
                  className="md:w-1/2 md:text-right md:pr-12"
                >
                  <div className="inline-block bg-blue-500 border-4 border-black px-6 py-3 rotate-1 shadow-[6px_6px_0_0_rgba(0,0,0,1)]">
                    <p className="font-black text-xl text-white">JAN 4 (4PM)</p>
                  </div>
                </div>

                {/* Center Circle */}
                <div id={"round3-r"} className="absolute left-8 md:left-1/2 -translate-x-1/2 w-16 h-16 bg-blue-500 border-4 border-black rounded-full flex items-center justify-center shadow-[4px_4px_0_0_rgba(0,0,0,1)] z-10">
                  <Sword className="w-8 h-8 text-white" />
                </div>

                {/* Event Details */}
                <div
                  id={"round3-r"}
                  className="md:w-1/2 md:pl-12 ml-24 md:ml-0"
                >
                  <div className="bg-white border-4 border-black p-6 shadow-[6px_6px_0_0_rgba(0,0,0,1)] relative">
                    <div className="absolute -top-3 -right-3 bg-blue-500 text-white font-black text-sm px-4 py-1 border-2 border-black">
                      ROUND 2
                    </div>
                    <h3 className="text-2xl font-black mb-2">Showdown</h3>
                    <p className="font-bold text-gray-700">
                      The top teams face the jury for live presentations and
                      project demonstrations.
                    </p>
                  </div>
                </div>
              </div>

              {/* Event 4: Victory */}
              <div className="relative flex flex-col md:flex-row items-start md:items-center gap-8">
                {/* Time Badge */}
                <div
                  id={"round4-l"}
                  className="md:w-1/2 md:text-right md:pr-12"
                >
                  <div className="inline-block bg-gradient-to-r from-yellow-400 to-orange-400 border-4 border-black px-6 py-3 -rotate-1 shadow-[6px_6px_0_0_rgba(0,0,0,1)]">
                    <p className="font-black text-xl text-black">RESULTS</p>
                  </div>
                </div>

                {/* Center Circle with Stars */}
                <div id={"round4-r"} className="absolute left-8 md:left-1/2 -translate-x-1/2 w-20 h-20 bg-gradient-to-br from-yellow-400 to-orange-400 border-4 border-black rounded-full flex items-center justify-center shadow-[6px_6px_0_0_rgba(0,0,0,1)] z-10">
                  <Trophy className="w-10 h-10 text-black" />
                  <Star className="absolute -top-2 -right-2 w-6 h-6 text-yellow-400 fill-yellow-400 animate-pulse" />
                  <Star
                    className="absolute -bottom-2 -left-2 w-5 h-5 text-orange-400 fill-orange-400 animate-pulse"
                    style={{ animationDelay: "0.2s" }}
                  />
                </div>

                {/* Event Details */}
                <div
                  id={"round4-r"}
                  className="md:w-1/2 md:pl-12 ml-24 md:ml-0"
                >
                  <div className="bg-gradient-to-br from-yellow-100 to-orange-100 border-4 border-black p-6 shadow-[8px_8px_0_0_rgba(0,0,0,1)] relative overflow-hidden">
                    {/* Confetti effect */}
                    <div className="absolute inset-0 opacity-20">
                      {[...Array(10)].map((_, i) => (
                        <div
                          key={i}
                          className="absolute w-2 h-2 bg-yellow-400 border border-black"
                          style={{
                            left: `${(i * 10) % 100}%`,
                            top: `${(i * 15) % 100}%`,
                            transform: `rotate(${i * 45}deg)`,
                          }}
                        />
                      ))}
                    </div>
                    <div className="absolute -top-3 -right-3 bg-gradient-to-r from-yellow-400 to-orange-400 text-black font-black text-sm px-4 py-1 border-2 border-black">
                      FINAL
                    </div>
                    <h3 className="text-2xl font-black mb-2 relative">
                      The Byte Victory
                    </h3>
                    <p className="font-bold text-gray-700 relative">
                      Certificates, Goodies, and the ₹10,000 Prize Pool are
                      claimed by the champions.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom decorative element */}
          <div className="mt-16 text-center">
            <div
              id={"timeline-section-btm"}
              className="inline-block bg-black text-white border-4 border-white px-8 py-3 rotate-1 shadow-[6px_6px_0_0_rgba(0,0,0,1)]"
            >
              <p className="font-black text-lg">戦い TIME TO BATTLE 開始</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-red-400 via-yellow-400 to-orange-400 border-b-4 border-black overflow-hidden">
        {/* Dramatic Background Lines */}
        <div className="absolute inset-0">
          {[...Array(35)].map((_, i) => (
            <div
              key={i}
              className="absolute bg-black/10"
              style={{
                left: `${(i * 3) % 100}%`,
                width: "4px",
                height: "200%",
                top: "-50%",
                transform: `rotate(${30 + (i % 7) * 3}deg)`,
              }}
            />
          ))}
        </div>

        <div
          id={"waiting-section"}
          className="relative z-10 text-center px-4 max-w-4xl"
        >
          {/* Main Title with Duplicate Layer */}
          <div className="relative mb-8">
            <h2
              className="text-6xl md:text-8xl font-black italic absolute inset-0 blur-sm opacity-30"
              style={{
                transform: "scale(1.1)",
              }}
            >
              WE ARE WAITING
            </h2>
            <h2
              className="text-6xl md:text-8xl font-black italic relative text-white"
              style={{
                WebkitTextStroke: "3px black",
                textShadow: `
                  5px 5px 0 #fbbf24,
                  10px 10px 0 #ef4444
                `,
              }}
            >
              WE ARE WAITING
            </h2>
          </div>

          {/* Date Badge */}
          <div className="inline-block bg-white border-4 border-black px-8 py-3 rotate-2 shadow-[8px_8px_0_0_rgba(0,0,0,1)] mb-8">
            <p className="text-3xl font-black">3RD & 4TH JANUARY 2026</p>
          </div>

          {/* Sword Icon with Speech Bubble */}
          <div className="relative inline-block mb-12">
            <div className="w-24 h-24 bg-teal-400 rounded-full border-4 border-black flex items-center justify-center shadow-[6px_6px_0_0_rgba(0,0,0,1)] mx-auto mb-4">
              <Sword className="w-12 h-12 text-black" />
            </div>
            <div className="bg-white border-3 border-black px-6 py-3 rounded-2xl inline-block shadow-[4px_4px_0_0_rgba(0,0,0,1)]">
              <p className="font-bold text-lg">Your coding katana ready hai?</p>
            </div>
          </div>

          {/* Large CTA Button with Shine Effect */}
          <button className="group relative bg-black text-white font-black text-3xl px-16 py-6 border-4 border-white uppercase shadow-[10px_10px_0_0_rgba(255,255,255,0.5)] hover:shadow-[8px_8px_0_0_rgba(255,255,255,0.5)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all overflow-hidden mb-12">
            <span className="relative z-10">JOIN THE QUEST</span>
            {/* Shine effect */}
            <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
          </button>

          {/* Motivational Quote */}
          <div className="inline-block bg-yellow-400 border-4 border-black px-8 py-4 -rotate-1 shadow-[6px_6px_0_0_rgba(0,0,0,1)]">
            <p className="text-xl md:text-2xl font-black italic">
              "HEROES EXAMS KA WAIT NAHI KARTE!"
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-12 text-center border-t-4 border-white">
        <p className="text-2xl font-black mb-4">GFG CAMPUS BODY RBU × UNSTOP</p>
        <p className="text-xl font-bold italic text-yellow-400">
          Social Handles
        </p>
        <div className="flex justify-center items-center gap-10 list-none mt-10">
          <li className="hover:scale-120 hover:-translate-y-2 ease-out transition-all duration-300">
            <Github size={32} />
          </li>
          <li className="hover:scale-120 hover:-translate-y-2 ease-out transition-all duration-300">
            <Linkedin size={32} />
          </li>
          <li className="hover:scale-120 hover:-translate-y-2 ease-out transition-all duration-300">
            <CodeXml size={32} />
          </li>
          <li className="hover:scale-120 hover:-translate-y-2 ease-out transition-all duration-300">
            <Instagram size={32} />
          </li>
        </div>
      </footer>

      <style jsx>{`
        @keyframes slide-down {
          0% {
            transform: translateY(-100%) rotate(15deg);
          }
          100% {
            transform: translateY(100vh) rotate(15deg);
          }
        }
      `}</style>
    </div>
  );
}
