import { useRef } from "react";
import franchiseImg from "../../assets/franchise.png";
import { motion, useInView } from "framer-motion";

export const FranchiseSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <div
      className="bg-[#052b54] w-[100%] overflow-hidden cursor-pointer -mt-1"
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
