// NEXTJS HOOKS
import Image from "next/image";

// DEFINING PROPS TYPES
interface ButtonProps {
  label: string;
  iconUrl?: string;
  backgroundColor?: string;
  borderColor?: string;
  textColor?: string;
}

const Button = ({
  label,
  iconUrl,
  backgroundColor,
  borderColor,
  textColor,
}: ButtonProps) => {
  return (
    <button
      className={`flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none ${
        backgroundColor ? backgroundColor : "bg-coral-red"
      } rounded-full ${textColor ? textColor : "text-white"} ${
        borderColor ? borderColor : "border-coral-red"
      }`}
    >
      {label}
      {iconUrl && (
        <Image
          src={iconUrl}
          alt={`${label} button`}
          width={20}
          height={20}
          className="ml-2 rounded-full w-5 h-5"
        />
      )}
    </button>
  );
};

export default Button;
