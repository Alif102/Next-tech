"use client";

import Link from "next/link";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Typewriter from "typewriter-effect";
import { motion } from "framer-motion";
import { FaLeaf, FaSeedling, FaSun, FaCloud } from "react-icons/fa";

export default function Hero() {
  useEffect(() => {
    AOS.init({
      duration: 900,
      once: true,
      easing: "ease-out-cubic",
    });
  }, []);

  const float = {
    animate: {
      y: [0, -15, 0],
    },
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut",
    },
  };

  return (
    <div className="max-h-screen w-full relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-green-100 to-green-50" />

      {/* Floating Icons */}
      <motion.div {...float} className="absolute top-24 left-16 text-green-400 text-4xl">
        <FaLeaf />
      </motion.div>

      <motion.div
        animate={{ y: [0, -20, 0], rotate: [0, 10, -10, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
        className="absolute top-40 right-20 text-yellow-400 text-4xl"
      >
        <FaSun />
      </motion.div>

      <motion.div
        animate={{ y: [0, -18, 0] }}
        transition={{ duration: 3.5, repeat: Infinity }}
        className="absolute bottom-40 left-24 text-emerald-500 text-4xl"
      >
        <FaSeedling />
      </motion.div>

      <motion.div
        animate={{ x: [0, 15, 0] }}
        transition={{ duration: 5, repeat: Infinity }}
        className="absolute bottom-52 right-32 text-green-300 text-4xl"
      >
        <FaCloud />
      </motion.div>

      <section className="relative flex flex-col items-center justify-center text-center py-28 px-6 text-green-900 z-10">
        <h1
          data-aos="fade-up"
          className="text-5xl md:text-7xl font-extrabold tracking-tight max-w-5xl leading-tight"
        >
          <span className="text-green-800">Grow.</span>{" "}
          <span className="text-green-600">Learn.</span>{" "}
          <span className="text-green-700">Harvest.</span>

          <span className="block mt-3 text-4xl">
            <Typewriter
              options={{
                strings: [
                  "Your Smart Garden Hub",
                  "Build a Greener Future",
                  "Grow Smarter Every Day",
                ],
                autoStart: true,
                loop: true,
                delay: 60,
                deleteSpeed: 40,
              }}
            />
          </span>
        </h1>

        <p
          data-aos="fade-up"
          data-aos-delay="150"
          className="mt-6 text-lg md:text-xl max-w-2xl text-green-900/80"
        >
          Welcome to{" "}
          <span className="text-green-700 font-semibold">Garden Hub</span> — your
          modern space for plant care, eco-friendly gardening, seasonal growing
          tips, and practical guides to build a{" "}
          <span className="text-green-800 font-semibold">healthier, greener</span>{" "}
          lifestyle.
        </p>

        <div
          data-aos="zoom-in"
          data-aos-delay="300"
          className="mt-10 flex flex-col sm:flex-row gap-4"
        >
          <Link
            href="/blogs"
            className="inline-flex items-center justify-center px-8 py-4 font-medium rounded-xl border border-green-500 text-green-800 hover:bg-green-500 hover:text-white transition"
          >
            Explore Garden Hub
          </Link>
        </div>
      </section>
    </div>
  );
}
