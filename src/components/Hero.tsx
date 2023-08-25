"use client";
// REACT HOOKS
import { useState } from "react";
// NEXTJS HOOKS
import Image from "next/image";
// COMPONENTS
import Button from "./Button";
import ShoeCard from "./ShoeCard";
// FROM CONTANSTS
import { statistics } from "@/constants";
import { shoes } from "@/constants";

const Hero = () => {
  const [bigShoeImg, setBigShoeImg] = useState("../../public/images/big-shoe1");

  return (
    <section className="xl:padding-l wide:padding-r padding-b">
      <div
        id="home"
        className="w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container"
      >
        {/* LEFT SIDE OF HERO SECTION */}
        <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28">
          <p className="text-xl font-montserrat text-coral-red">
            Our Summer Collection
          </p>
          <h1 className="mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82] font-bold">
            <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10">
              The New Arrival
            </span>
            <br />
            <span className="text-coral-red inline-block mt-3">Nike</span> Shoes
          </h1>
          <p className="font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm">
            Discover stylish Nike arrivals, quality comfort, and innovation for
            your active life.
          </p>
          {/* SHOP NOW BUTTON */}
          <Button label="Shop now" iconUrl="/icons/arrow-right.svg" />
          <div className="flex justify-start items-start flex-wrap w-full mt-20 gap-16">
            {/* STATISTICS */}
            {statistics.map((stat) => (
              <div key={stat.label}>
                <p className="text-4xl font-palanquin font-bold">
                  {stat.value}
                </p>
                <p className="leading-7 font-montserrat text-slate-gray">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
        {/* RIGHT SIDE HERO SECTION */}
        <div className="relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center">
          <Image
            src={bigShoeImg}
            alt="Nike shoe"
            width={610}
            height={500}
            className="object-contain relative z-10"
          />
          <div className="flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[10%] max-sm:px-6">
            {shoes.map((shoe, index) => (
              <div key={index}>
                <ShoeCard
                  imgUrl={shoe}
                  changeBigShoeImage={(shoe) => {
                    setBigShoeImg(shoe);
                  }}
                  bigShoeImg={bigShoeImg}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
