// NEXTJS HOOKS
import Image from "next/image";

interface IShoeCardProps {
  shoeURL: string;
  isSelectedShoe: boolean;
}

const ShoeCard = ({ shoeURL, isSelectedShoe }: IShoeCardProps) => {
  return (
    <div
      className={`${
        isSelectedShoe ? "border-coral-red" : "border-transparent"
      } border-2 rounded-xl cursor-pointer max-sm:flex-1`}
    >
      <div className="flex justify-center items-center bg-card bg-center bg-cover sm:w-40 sm:h-40 rounded-xl max-sm:p-4">
        <Image
          src={shoeURL}
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
