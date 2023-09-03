// NEAXTJS HOOKS
import Image from "next/image";
// COMPONENTS
import Button from "./Button";
// FROM PUBLIC
import { shoe8 } from "../../public/images";

const SuperQuality = () => {
  return (
    <section id="about-us" className="padding">
      <div className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container">
        {/* LEFT WRAPPER */}
        <div className="flex flex-col flex-1">
          <h2 className="font-palanquin capitalize text-4xl lg:max-w-lg font-bold">
            we provide you
            <span className="text-coral-red"> super </span>
            <span className="text-coral-red">quality </span> shoes
          </h2>
          <p className="mt-4 lg:max-w-lg info-text">
            Ensuring premium comfort and style, our meticulously crafted
            footwear is designed to elevate your experience, providing you with
            unmatched quality, innovation, and a touch of elegance.
          </p>
          <p className="mt-6 lg:max-w-lg info-text">
            Our dedication to detail and excellence ensures your satisfaction
          </p>
          <div className="mt-11">
            <Button label="View details" />
          </div>
        </div>

        {/* RIGHT WRAPPER */}
        <div className="flex flex-1 justify-center items-center">
          <Image
            src={shoe8}
            alt="shoe8"
            width={570}
            height={522}
            className="object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default SuperQuality;
