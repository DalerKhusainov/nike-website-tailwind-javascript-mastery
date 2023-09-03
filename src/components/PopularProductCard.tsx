// NEXTJS HOOKS
import Image from "next/image";
// TYPES
import { IProducts } from "@/modules/types";
//
import { star } from "../../public/icons";

interface ProductProps {
  product: IProducts;
}

const PopularProductCard = ({ product }: ProductProps) => {
  const { imgURL, name, price } = product;

  return (
    <div className="flex flex-col flex-1 w-full max-sm:w-full">
      <Image src={imgURL.src} alt={name} width={280} height={280} />
      <div className="mt-8 flex justify-start gap-2.5">
        <Image src={star} alt="rating" width={24} height={24} />
        <p className="font-montserrat text-xl leading-normal text-slate-gray">
          (4.5)
        </p>
      </div>
      <h3 className="text-2xl mt-2 leading-normal font-semibold font-palanquin">
        {name}
      </h3>
      <p className="mt-2 font-semibold font-montserrat text-coral-red text-2xl leading-normal">
        {price}
      </p>
    </div>
  );
};

export default PopularProductCard;
