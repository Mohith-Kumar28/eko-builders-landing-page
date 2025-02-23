import React from "react";
import { Feature } from "@/types/feature";
import Image from "next/image";
import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface SingleFeatureProps {
  feature: {
    id: number;
    icon: LucideIcon;
    title: string;
    description: string;
  };
}

const SingleFeature = ({ feature }: SingleFeatureProps) => {
  const Icon = feature.icon;

  return (
    <div className="group relative rounded-lg bg-white p-7.5 shadow-solid-3 dark:bg-blacksection dark:shadow-none">
      <div className="relative mb-7.5 flex h-16 w-16 items-center justify-center rounded-[4px] bg-primary/5 dark:bg-primary/10">
        <Icon className="w-8 h-8 text-primary" />
      </div>
      <h3 className="mb-5 text-xl font-semibold text-black dark:text-white">
        {feature.title}
      </h3>
      <p className="mb-10 text-base leading-relaxed text-body-color">
        {feature.description}
      </p>
    </div>
  );
};

export default SingleFeature;
