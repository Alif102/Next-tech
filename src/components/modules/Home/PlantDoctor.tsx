"use client";

import Image from "next/image";
import React, { useState } from "react";
import { FaLeaf, FaTint, FaSun, FaBug, FaRedo } from "react-icons/fa";

type Option = {
  id: string;
  label: string;
  icon: React.ReactNode;
  color: string;
};

type Question = {
  id: number;
  question: string;
  options: Option[];
};

type Diagnosis = {
  title: string;
  solution: string;
  image: string;
  icon: React.ReactNode;
  color: string;
};

const PlantDoctor: React.FC = () => {
  const [step, setStep] = useState<number>(1);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [diagnosis, setDiagnosis] = useState<Diagnosis | null>(null);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const questions: Question[] = [
    {
      id: 1,
      question: "What's happening with your plant?",
      options: [
        {
          id: "yellow",
          label: "Yellowing leaves",
          icon: <FaLeaf className="text-yellow-500 text-3xl" />,
          color: "bg-yellow-100",
        },
        {
          id: "spots",
          label: "Spots on leaves",
          icon: <FaBug className="text-red-500 text-3xl" />,
          color: "bg-red-100",
        },
        {
          id: "droop",
          label: "Drooping/wilting",
          icon: "🥀",
          color: "bg-purple-100",
        },
        {
          id: "growth",
          label: "Stunted growth",
          icon: "📏",
          color: "bg-blue-100",
        },
      ],
    },
    {
      id: 2,
      question: "How often do you water?",
      options: [
        {
          id: "daily",
          label: "Daily",
          icon: <FaTint className="text-blue-500 text-3xl" />,
          color: "bg-blue-100",
        },
        {
          id: "weekly",
          label: "Weekly",
          icon: "📅",
          color: "bg-green-100",
        },
        {
          id: "biweekly",
          label: "Every 2 weeks",
          icon: "🗓️",
          color: "bg-teal-100",
        },
        {
          id: "random",
          label: "When I remember",
          icon: "🤔",
          color: "bg-gray-100",
        },
      ],
    },
    {
      id: 3,
      question: "How much sunlight does it get?",
      options: [
        {
          id: "direct",
          label: "6+ hours direct",
          icon: <FaSun className="text-yellow-500 text-3xl" />,
          color: "bg-yellow-100",
        },
        {
          id: "indirect",
          label: "Bright indirect",
          icon: "⛅",
          color: "bg-orange-100",
        },
        {
          id: "low",
          label: "Low light",
          icon: "🌑",
          color: "bg-indigo-100",
        },
        {
          id: "artificial",
          label: "Artificial light",
          icon: "💡",
          color: "bg-pink-100",
        },
      ],
    },
  ];

  const diagnoses: Record<string, Diagnosis> = {
    overwater: {
      title: "Overwatering",
      solution:
        "Reduce watering frequency and ensure proper drainage. Let soil dry between waterings.",
      image: "https://i.ibb.co/pjVd55V6/r.jpg",
      icon: <FaTint className="text-blue-500 text-5xl mb-4" />,
      color: "bg-blue-50",
    },
    underwater: {
      title: "Underwatering",
      solution:
        "Water more frequently and thoroughly until water drains from the bottom.",
      image: "https://i.ibb.co/1fDrdjjd/www.jpg",
      icon: "💧",
      color: "bg-blue-50",
    },
    fungus: {
      title: "Fungal Infection",
      solution:
        "Remove affected leaves, improve air circulation, and apply organic fungicide.",
      image: "https://i.ibb.co/hJBwTwmh/ne.jpg",
      icon: <FaBug className="text-red-500 text-5xl mb-4" />,
      color: "bg-red-50",
    },
    light: {
      title: "Incorrect Lighting",
      solution:
        "Move plant to better suited location based on its light requirements.",
      image: "https://i.ibb.co/Vp5SYB9s/l.webp",
      icon: <FaSun className="text-yellow-500 text-5xl mb-4" />,
      color: "bg-yellow-50",
    },
  };

  const handleAnswer = (questionId: number, answerId: string) => {
    setSelectedOption(answerId);

    setTimeout(() => {
      const updatedAnswers = { ...answers, [questionId]: answerId };
      setAnswers(updatedAnswers);
      setSelectedOption(null);

      if (step < questions.length) {
        setStep(step + 1);
      } else {
        if (updatedAnswers[1] === "yellow" && updatedAnswers[2] === "daily") {
          setDiagnosis(diagnoses.overwater);
        } else if (
          updatedAnswers[1] === "droop" &&
          updatedAnswers[2] === "random"
        ) {
          setDiagnosis(diagnoses.underwater);
        } else if (updatedAnswers[1] === "spots") {
          setDiagnosis(diagnoses.fungus);
        } else {
          setDiagnosis(diagnoses.light);
        }
      }
    }, 300);
  };

  const restartDiagnosis = () => {
    setStep(1);
    setAnswers({});
    setDiagnosis(null);
  };

  return (
    <section className="py-16 px-4 bg-white">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-3 text-green-800">
            🌱 Plant Doctor
          </h2>
          <p className="text-xl text-gray-600">
            Diagnose plant problems with our interactive tool
          </p>
        </div>

        <div className="rounded-2xl p-8 bg-green-50 shadow-inner">
          {!diagnosis ? (
            <>
              <h3 className="text-2xl font-semibold text-center mb-8 text-gray-800">
                {questions[step - 1].question}
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {questions[step - 1].options.map((option) => (
                  <button
                    key={option.id}
                    onClick={() =>
                      handleAnswer(questions[step - 1].id, option.id)
                    }
                    className={`p-6 rounded-xl shadow-md transition-all flex flex-col items-center ${option.color} ${
                      selectedOption === option.id
                        ? "ring-2 ring-green-500"
                        : ""
                    }`}
                  >
                    <div className="mb-3">{option.icon}</div>
                    <span className="text-lg font-medium text-gray-800">
                      {option.label}
                    </span>
                  </button>
                ))}
              </div>
            </>
          ) : (
            <div className="text-center">
              <div
                className={`rounded-xl p-6 shadow-md mb-8 ${diagnosis.color}`}
              >
                {diagnosis.icon}
                <h3 className="text-2xl font-bold mb-4 text-green-700">
                  Diagnosis: {diagnosis.title}
                </h3>
               <Image
  src={diagnosis.image}      // original src
  alt={diagnosis.title}      // alt text
  width={600}                // set a width
  height={192}               // set a height (maintain aspect ratio)
  className="rounded-lg mb-6 mx-auto object-cover w-full h-48"
/>
                <p className="text-lg mb-6 text-gray-700">
                  {diagnosis.solution}
                </p>
                <button
                  onClick={restartDiagnosis}
                  className="px-6 py-3 rounded-full bg-green-700 hover:bg-green-800 text-white flex items-center mx-auto"
                >
                  <FaRedo className="mr-2" />
                  Diagnose Another Plant
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default PlantDoctor;
