import React, { useRef, useEffect } from "react";
import Image from "next/image";
import { Brand } from "@/types/brand";
import { motion } from "framer-motion";
import { IconType } from "react-icons";

type Props = {
  brand: {
    id: number;
    name: string;
    href: string;
    image: IconType;
    imageLight: IconType;
    imageDark: IconType;
  };
};

const SingleBrand = ({ brand }: Props) => {
  const Icon = brand.image;
  
  return (
    <div className="animate_top text-center">
      <a href={brand.href} className="relative block dark:hidden">
        <Icon className="mx-auto h-10 w-auto opacity-65 transition-all duration-300 hover:opacity-100" />
      </a>
      <a href={brand.href} className="relative hidden dark:block">
        <Icon className="mx-auto h-10 w-auto text-white opacity-65 transition-all duration-300 hover:opacity-100" />
      </a>
    </div>
  );
};

export default SingleBrand;
