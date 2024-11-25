import { IconType } from "react-icons";
import { motion } from "framer-motion";
import { VariantProps, tv } from "tailwind-variants";

const cardStyles = tv({
  slots: {
    card: "w-[280px] rounded-md h-[300px] flex flex-col items-center justify-center relative overflow-hidden cursor-pointer hover:scale-110 transition-all",
    image: "h-[450px] mt-[-80px] object-cover",
    overlay: "absolute top-0 bottom-0 left-0 right-0 bg-primary opacity-60 z-0",
    iconStyle:
      "w-24 h-24 bg-white rounded-full flex items-center justify-center p-4 text-[#2a4c7f] z-60 absolute top-[60px]",
    titleStyle: "text-white text-lg mt-20 absolute text-center",
    button:
      "absolute bottom-0 bg-gradient-to-b from-black to-zinc-600 w-full p-2 text-white text-lg hover:opacity-90",
  },
  variants: {
    isPrecautionary: {
      true: {
        overlay: "bg-zinc-500",
        iconStyle: "text-zinc-600",
      },
    },
  },
});

interface ServiceCardProps extends VariantProps<typeof cardStyles> {
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

const { card, image, overlay, iconStyle, titleStyle, button } = cardStyles();

export const ServiceCard = ({
  icon: Icon,
  title,
  id,
  img,
  isPrecautionary,
}: ServiceCardProps) => {
  const handleRedirect = (id: number) => {
    window.open(`/services/${id}`, "_self");
  };
  return (
    <motion.div
      variants={item}
      animate={{}}
      onClick={() => handleRedirect(id)}
      className={card()}
    >
      <img src={img} alt={title} className={image()} loading="lazy" />
      <div className={overlay({ isPrecautionary })} />
      <span className={iconStyle({ isPrecautionary })}>
        <Icon size={80} />
      </span>
      <p className={titleStyle()}>{title}</p>
      <button className={button()}>+ Saiba mais</button>
    </motion.div>
  );
};
