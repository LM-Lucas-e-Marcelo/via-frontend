import { tv } from "tailwind-variants";
import { FaWhatsapp, FiPhone, GrLocation } from "../../assets/icons";

const locationCard = tv({
  slots: {
    card: "flex flex-col overflow-hidden rounded-md w-[350px] gap-2 border border-zinc-400 shadow-zinc-300 shadow-md",
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
  phoneNumber,
  street,
  whatsappNumber,
  image,
}: LocationCardProps) => {
  return (
    <div className={card()}>
      <img src={image} className={img()} />
      <div className={infos()}>
        <strong className="text-xl">{cityAndNeigh}</strong>

        <a className={infoItem()} target="_blank" href={mapUrl}>
          <GrLocation size={24} className="text-red-600" /> {street}
        </a>

        <a className={infoItem()} target="_blank" href={`Tel:${phoneNumber}`}>
          <FiPhone size={24} className="text-blue-950" />
          {phoneNumber}
        </a>

        <a
          className={infoItem()}
          target="_blank"
          href={`https://wa.me/${whatsappNumber}`}
        >
          <FaWhatsapp size={24} className="text-green-500" />
          {whatsappNumber}
        </a>
      </div>
    </div>
  );
};
