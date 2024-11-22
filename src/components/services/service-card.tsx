import { IconType } from "react-icons";
import { motion } from "framer-motion";

interface ServiceCardProps {
  id: number;
  icon: IconType;
  title: string;
  description: string;
  img?: string;
}

const item = {
  hidden: { y: 50, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

export const ServiceCard = ({
  icon: Icon,
  title,
  id,
  img,
}: ServiceCardProps) => {
  const handleRedirect = (id: number) => {
    window.open(`/services/${id}`, "_self");
  };
  return (
    <motion.div
      variants={item}
      animate={{}}
      onClick={() => handleRedirect(id)}
      className="w-[280px] rounded-md h-[300px] flex flex-col items-center justify-center relative overflow-hidden cursor-pointer hover:scale-110 transition-all"
    >
      <img
        src={img}
        alt={title}
        className="h-[450px] mt-[-80px] object-cover"
        loading="lazy"
      />
      <div className="absolute top-0 bottom-0 left-0 right-0 bg-primary opacity-60 z-0" />
      <span className="w-24 h-24 bg-white rounded-full flex items-center justify-center p-4 text-[#2a4c7f] z-60 absolute top-[60px]">
        <Icon size={80} />
      </span>
      <p className="text-white text-lg mt-20 absolute text-center">{title}</p>
      <button className="absolute bottom-0 bg-gradient-to-b from-black to-zinc-600 w-full p-2 text-white text-lg hover:opacity-90">
        + Saiba mais
      </button>
    </motion.div>
  );
};
