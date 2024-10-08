import { useRef } from "react";
import franchiseImg from "../../assets/franchise.png";
import { motion, useInView } from "framer-motion";

export const FranchiseSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);

  const handleOpenFranchise = () => {
    window.open("/franchise", "_self");
  };

  return (
    <div
      onClick={handleOpenFranchise}
      className="bg-[#052b54] w-[100%] overflow-hidden cursor-pointer h-[300px] md:h-[350px]"
    >
      <motion.img
        ref={ref}
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: isInView ? 0 : 50 }}
        transition={{ duration: 1 }}
        src={franchiseImg}
        alt="franchise"
        className="bg-primary h-full w-full object-position-sm object-cover"
      />
    </div>
  );
};