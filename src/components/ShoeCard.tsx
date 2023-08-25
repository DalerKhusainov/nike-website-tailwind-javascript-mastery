"use client";
// NEXTJS HOOKS
import Image from "next/image";

interface IShoeCardProps {
  imgUrl: any;
  changeBigShoeImage: (shoe: string) => void;
  bigShoeImg: any;
}
[];

const ShoeCard = ({
  imgUrl,
  changeBigShoeImage,
  bigShoeImg,
}: IShoeCardProps) => {
  // CLICK HANDLER FUNCTION
  const handleClick = () => {
    if (bigShoeImg !== imgUrl.bigShoe) {
      changeBigShoeImage(imgUrl.bigShoe);
    }
  };

  return (
    <div
      onClick={handleClick}
      className={`border-2 rounded-xl ${
        bigShoeImg === imgUrl.bigShoe
          ? "border-coral-red"
          : "border-transparent"
      } cursor-pointer max-sm:flex-1`}
    >
      <div className="flex justify-center items-center bg-card bg-center bg-cover sm:w-40 sm:h-40 rounded-xl max-sm:p-4">
        <Image
          src={imgUrl.thumbnail}
          alt="Shoe collection"
          width={127}
          height={103.34}
          className="object-contain"
        />
      </div>
    </div>
  );
};

export default ShoeCard;
