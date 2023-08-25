// NEXTJS HOOKS
import Image from "next/image";

// DEFINING PROPS TYPES
interface ButtonProps {
  label: string;
  iconUrl: string;
}

const Button = ({ label, iconUrl }: ButtonProps) => {
  return (
    <button className="flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none bg-coral-red rounded-full text-white border-coral-red">
      {label}
      <Image
        src={iconUrl}
        alt={`${label} button`}
        width={20}
        height={20}
        className="ml-2 rounded-full w-5 h-5"
      />
    </button>
  );
};

export default Button;
