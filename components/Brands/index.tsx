"use client";
import React from "react";
import SingleBrand from "./SingleBrand";
import { 
  SiAutodesk, 
  SiTensorflow, 
  SiPytorch, 
  SiNvidia, 
  SiRhinoceros,
  SiGooglecloud 
} from "react-icons/si";

const brandData = [
  {
    id: 1,
    name: "Autodesk",
    href: "#",
    image: SiAutodesk,
    imageLight: SiAutodesk,
    imageDark: SiAutodesk,
  },
  {
    id: 2,
    name: "TensorFlow",
    href: "#",
    image: SiTensorflow,
    imageLight: SiTensorflow,
    imageDark: SiTensorflow,
  },
  {
    id: 3,
    name: "PyTorch",
    href: "#",
    image: SiPytorch,
    imageLight: SiPytorch,
    imageDark: SiPytorch,
  },
  {
    id: 4,
    name: "NVIDIA",
    href: "#",
    image: SiNvidia,
    imageLight: SiNvidia,
    imageDark: SiNvidia,
  },
  {
    id: 5,
    name: "Rhino",
    href: "#",
    image: SiRhinoceros,
    imageLight: SiRhinoceros,
    imageDark: SiRhinoceros,
  },
  {
    id: 6,
    name: "Google Cloud",
    href: "#",
    image: SiGooglecloud,
    imageLight: SiGooglecloud,
    imageDark: SiGooglecloud,
  },
];

const Brands = () => {
  return (
    <>
      {/* <!-- ===== Clients Start ===== --> */}
      <section className="border border-x-0 border-y-stroke bg-alabaster py-11 dark:border-y-strokedark dark:bg-black">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          <div className="grid grid-cols-3 items-center justify-center gap-7.5 md:grid-cols-6 lg:gap-12.5 xl:gap-29">
            {brandData.map((brand, key) => (
              <SingleBrand brand={brand} key={key} />
            ))}
          </div>
        </div>
      </section>
      {/* <!-- ===== Clients End ===== --> */}
    </>
  );
};

export default Brands;
