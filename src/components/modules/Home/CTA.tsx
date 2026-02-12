
"use client"
import React from "react";
import { FaSeedling, FaArrowRight, FaInfoCircle } from "react-icons/fa";
import { motion } from "framer-motion";

const CTA = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-green-400 via-emerald-500 to-green-600 
                     rounded-3xl shadow-2xl p-12 text-center text-white"
        >
          <motion.h2
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ repeat: Infinity, duration: 4 }}
            className="text-3xl md:text-4xl font-bold mb-6 flex items-center justify-center gap-3"
          >
            <FaSeedling className="text-yellow-300 animate-bounce" />
            Ready to Grow With Us?
          </motion.h2>

          <p className="max-w-2xl mx-auto mb-8 text-lg text-green-50">
            Join our community of passionate gardeners today and start sharing
            your knowledge!
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <motion.button
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-green-600 px-8 py-4 rounded-full font-medium 
                         text-lg shadow-lg hover:bg-green-100 flex items-center gap-2"
            >
              Sign Up Now <FaArrowRight />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              className="border border-white px-8 py-4 rounded-full font-medium 
                         text-lg hover:bg-white hover:text-green-600 
                         transition flex items-center gap-2"
            >
              <FaInfoCircle /> Learn More
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
