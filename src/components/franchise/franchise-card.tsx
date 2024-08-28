import { IconType } from "react-icons";
import { FaCheck } from "../../assets/icons";
import { motion } from "framer-motion";

interface FranchiseCardProps {
  icon: IconType;
  title: string;
  description: string;
}

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

export const FranchiseCard = ({
  icon: Icon,
  title,
  description,
}: FranchiseCardProps) => {
  return (
    <motion.div
      className="w-[350px] bg-white relative rounded-md py-10 px-4 border border-zinc-400 mt-10 shadow-zinc-300 shadow-md"
      variants={item}
    >
      <span className="w-14 h-14 rounded-full flex items-center justify-center bg-white absolute top-[-28px] left-1/2 -translate-x-1/2 border border-zinc-400">
        <Icon size={30} className="text-primary" />
      </span>
      <strong className="text-lg mb-4 flex items-center gap-2">
        <FaCheck size={18} className="text-primary" />
        {title}
      </strong>
      <p>{description}</p>
    </motion.div>
  );
};
