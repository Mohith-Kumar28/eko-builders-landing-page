"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import FAQItem from "./FAQItem";

const faqData = [
  {
    id: 1,
    quest: "How does the AI simulation improve building energy efficiency?",
    ans: "Our platform uses deep neural networks and reinforcement learning to analyze complex interactions between design elements and environmental factors. It provides real-time feedback on energy performance, helping architects optimize their designs for maximum efficiency. The system typically achieves 85% improvement in energy efficiency compared to traditional methods."
  },
  {
    id: 2,
    quest: "Can I integrate the platform with my existing design tools?",
    ans: "Yes, our platform seamlessly integrates with industry-standard tools like Autodesk Revit and Rhino/Grasshopper through custom-developed plugins and APIs. This allows you to maintain your existing workflow while gaining advanced simulation capabilities and real-time performance insights."
  },
  {
    id: 3,
    quest: "How accurate are the simulation predictions?",
    ans: "Our ensemble of deep neural networks achieves 99.9% prediction accuracy, significantly outperforming traditional simulation methods. The system continuously learns from real-world data and simulation outcomes, refining its predictions through sophisticated machine learning algorithms."
  },
  {
    id: 4,
    quest: "What computational resources are required to run the simulations?",
    ans: "None on your end - our platform utilizes a GPU-accelerated cloud infrastructure capable of handling thousands of parallel simulations. This allows you to receive instant feedback on design changes without needing specialized hardware or computational resources."
  },
  {
    id: 5,
    quest: "How does the platform handle different building types and regions?",
    ans: "The system is trained on diverse architectural and climatic datasets, allowing it to adapt to various building types and geographic locations. Our machine learning models account for local environmental conditions, building codes, and specific design requirements."
  },
  {
    id: 6,
    quest: "What makes this platform different from traditional simulation tools?",
    ans: "Unlike traditional static tools, our platform uses an ensemble of specialized neural networks, each focused on different aspects of building performance. Combined with reinforcement learning algorithms, this allows the system to continuously improve its predictions and adapt to new scenarios, going beyond simple energy analysis to provide comprehensive design optimization."
  }
];

const FAQ = () => {
  const [activeFaq, setActiveFaq] = useState(1);

  const handleFaqToggle = (id: number) => {
    activeFaq === id ? setActiveFaq(0) : setActiveFaq(id);
  };

  return (
    <>
      {/* <!-- ===== FAQ Start ===== --> */}
      <section className="overflow-hidden pb-20 lg:pb-25 xl:pb-30">
        <div className="relative mx-auto max-w-c-1235 px-4 md:px-8 xl:px-0">
          <div className="absolute -bottom-16 -z-1 h-full w-full">
            <Image
              fill
              src="/images/shape/shape-dotted-light.svg"
              alt="Dotted"
              className="dark:hidden"
            />
            <Image
              fill
              src="/images/shape/shape-dotted-light.svg"
              alt="Dotted"
              className="hidden dark:block"
            />
          </div>
          <div className="flex flex-wrap gap-8 md:flex-nowrap md:items-center xl:gap-32.5">
            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  x: -20,
                },
                visible: {
                  opacity: 1,
                  x: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 1, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_left md:w-2/5 lg:w-1/2"
            >
              <span className="font-medium uppercase text-black dark:text-white">
                COMMON QUESTIONS
              </span>
              <h2 className="relative mb-6 text-3xl font-bold text-black dark:text-white xl:text-hero">
                Understanding Our
                <span className="relative inline-block before:absolute before:bottom-2.5 before:left-0 before:-z-1 before:h-3 before:w-full before:bg-titlebg2 dark:before:bg-titlebgdark">
                  AI Platform
                </span>
              </h2>

              <a
                href="#"
                className="group mt-7.5 inline-flex items-center gap-2.5 text-black hover:text-primary dark:text-white dark:hover:text-primary"
              >
                <span className="duration-300 group-hover:pr-2">Learn More</span>
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.4767 6.16701L6.00668 1.69701L7.18501 0.518677L13.6667 7.00034L7.18501 13.482L6.00668 12.3037L10.4767 7.83368H0.333344V6.16701H10.4767Z"
                    fill="currentColor"
                  />
                </svg>
              </a>
            </motion.div>

            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  x: 20,
                },
                visible: {
                  opacity: 1,
                  x: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 1, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_right md:w-3/5 lg:w-1/2"
            >
              <div className="rounded-lg bg-white shadow-solid-8 dark:border dark:border-strokedark dark:bg-blacksection">
                {faqData.map((faq, key) => (
                  <FAQItem
                    key={key}
                    faqData={{ ...faq, activeFaq, handleFaqToggle }}
                  />
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      {/* <!-- ===== FAQ End ===== --> */}
    </>
  );
};

export default FAQ;
