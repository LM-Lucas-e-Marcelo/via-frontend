import { IconType } from "react-icons";
import { FaCheck } from "../../assets/icons";

interface FranchiseCardProps {
  icon: IconType;
  title: string;
  description: string;
}

export const FranchiseCard = ({
  icon: Icon,
  title,
  description,
}: FranchiseCardProps) => {
  return (
    <div className="w-[350px] bg-white relative rounded-md py-10 px-4 border border-zinc-400 mt-10 shadow-zinc-300 shadow-md">
      <span className="w-14 h-14 rounded-full flex items-center justify-center bg-white absolute top-[-28px] left-1/2 -translate-x-1/2 border border-zinc-400">
        <Icon size={30} className="text-primary" />
      </span>
      <strong className="text-lg mb-4 flex items-center gap-2">
        <FaCheck size={18} className="text-primary" />
        {title}
      </strong>
      <p>{description}</p>
    </div>
  );
};
