import { tv } from "tailwind-variants";
import { GrLocation } from "../../assets/icons";
import { motion } from "framer-motion";

const locationCard = tv({
  slots: {
    card: "flex flex-col overflow-hidden rounded-md w-[350px] gap-2 border border-zinc-400 shadow-zinc-300 shadow-md relative h-[360px]",
    img: "w-full object-contain",
    infos: "flex flex-col gap-4 p-4",
    infoItem: "flex gap-2 items-center",
  },
});

interface LocationCardProps {
  cityAndNeigh: string;
  street: string;
  phoneNumber: string;
  whatsappNumber: string;
  mapUrl: string;
  image: string;
}

const { card, img, infos, infoItem } = locationCard();

export const LocationCard = ({
  cityAndNeigh,
  mapUrl,
  street,
  whatsappNumber,
  image,
}: LocationCardProps) => {
  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <motion.div className={card()} variants={item}>
      <img src={image} className={img()} alt="store picture" />
      <div className={infos()}>
        <strong className="text-xl">{cityAndNeigh}</strong>

        <a className={infoItem()} target="_blank" href={mapUrl}>
          <GrLocation size={24} className="text-red-600 flex-shrink-0" />{" "}
          {street}
        </a>

        <a
          className=" absolute bottom-0 left-0 right-0 bg-gradient-to-b from-black to-zinc-600 text-white px-5 py-4 hover:opacity-90 flex items-center gap-3 justify-center"
          target="_blank"
          href={`https://wa.me/${whatsappNumber}`}
        >
          Fale conosco
        </a>
      </div>
    </motion.div>
  );
};
