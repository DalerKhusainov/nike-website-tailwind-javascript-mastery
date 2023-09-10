// NEXTJS HOOKS
import Image from "next/image";
// TYPE MODULE
import { IReviews } from "@/modules/types";
import { star } from "../../public/icons";

const ReviewCard = ({ imgURL, customerName, rating, feedback }: IReviews) => {
  return (
    <div className="flex justify-center items-center flex-col">
      <Image
        src={imgURL}
        alt={customerName}
        width={120}
        height={120}
        className="rounded-full"
      />
      <p className="mt-6 max-w-sm text-center info-text">{feedback}</p>
      <div className="flex mt-3 justify-center items-center gap-2.5">
        <Image src={star} alt="start icon" width={24} height={24} />
        <p className="text-xl font-montserrat text-slate-gray">({rating})</p>
      </div>
      <h3 className="mt-1 font-palanquin text-3xl text-center font-bold">
        {customerName}
      </h3>
    </div>
  );
};

export default ReviewCard;
