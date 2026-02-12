"use client";

import React, { useState } from "react";
import { FaLeaf, FaSun, FaSnowflake, FaTree } from "react-icons/fa";

type Season = "spring" | "summer" | "fall" | "winter";

interface Plant {
  name: string;
  when: string;
  tip: string;
  icon: string;
}

const SeasonalGuide: React.FC = () => {
  const [activeSeason, setActiveSeason] = useState<Season>("spring");

  const seasonalPlants: Record<Season, Plant[]> = {
    spring: [
      { name: "Tomatoes", when: "After last frost", tip: "Start indoors 6-8 weeks before transplanting", icon: "🍅" },
      { name: "Lettuce", when: "Early spring", tip: "Can tolerate light frosts", icon: "🥬" },
      { name: "Peas", when: "As soon as soil can be worked", tip: "Direct sow for best results", icon: "🌱" },
    ],
    summer: [
      { name: "Beans", when: "When soil is warm", tip: "Bush varieties mature faster", icon: "🫘" },
      { name: "Cucumbers", when: "Late spring to early summer", tip: "Provide trellis for vertical growth", icon: "🥒" },
      { name: "Zucchini", when: "After frost danger passes", tip: "Only plant 1-2 plants per household", icon: "🎃" },
    ],
    fall: [
      { name: "Kale", when: "6-8 weeks before first frost", tip: "Flavor improves after frost", icon: "🥬" },
      { name: "Garlic", when: "4-6 weeks before ground freezes", tip: "Plant pointy end up", icon: "🧄" },
      { name: "Spinach", when: "Late summer to early fall", tip: "Harvest leaves when young", icon: "🍃" },
    ],
    winter: [
      { name: "Indoor Herbs", when: "Year-round", tip: "Use grow lights for best results", icon: "🌿" },
      { name: "Microgreens", when: "Year-round", tip: "Harvest in 10-14 days", icon: "🌱" },
      { name: "Planning", when: "Winter months", tip: "Sketch garden layouts for spring", icon: "📝" },
    ],
  };

  const seasonIcons: Record<Season, JSX.Element> = {
    spring: <FaLeaf className="text-green-500" />,
    summer: <FaSun className="text-yellow-500" />,
    fall: <FaTree className="text-orange-500" />,
    winter: <FaSnowflake className="text-blue-400" />,
  };

  const buttonStyles = {
    active: "bg-green-600 text-white",
    inactive: "bg-white text-green-800 hover:bg-green-100",
  };

  const cardStyles = "bg-white p-6 rounded-xl shadow-lg overflow-hidden relative";

  return (
    <section className="py-16 px-4 bg-gradient-to-b from-green-50 to-white">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-green-800">Seasonal Planting Guide</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover the perfect plants for each season and expert tips for thriving gardens
          </p>
        </div>

        <div className="flex justify-center flex-col md:flex-row gap-2 mb-12 space-x-2">
          {(["spring", "summer", "fall", "winter"] as Season[]).map((season) => (
            <button
              key={season}
              onClick={() => setActiveSeason(season)}
              className={`px-6 py-3 rounded-full capitalize flex items-center space-x-2 transition-all ${
                activeSeason === season ? buttonStyles.active : buttonStyles.inactive
              }`}
            >
              <span>{seasonIcons[season]}</span>
              <span>{season}</span>
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {seasonalPlants[activeSeason].map((plant, index) => (
            <div key={index} className={cardStyles}>
              <div className="absolute top-4 right-4 text-3xl">{plant.icon}</div>
              <h3 className="text-2xl font-semibold mb-3 text-green-700">{plant.name}</h3>

              <div className="mb-4">
                <div className="flex items-start space-x-2">
                  <span className="font-medium text-green-600">When to plant:</span>
                  <p className="text-gray-600">{plant.when}</p>
                </div>
              </div>

              <div className="bg-opacity-20 rounded-lg p-4" style={{ backgroundColor: "rgba(22, 163, 74, 0.1)" }}>
                <p className="font-medium text-green-600">🌱 Expert tip:</p>
                <p className="text-gray-600">{plant.tip}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center text-gray-600">
          <p>Remember: These are general guidelines - adjust based on your local climate!</p>
        </div>
      </div>
    </section>
  );
};

export default SeasonalGuide;
