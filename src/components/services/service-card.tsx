import { IconType } from "react-icons";

interface ServiceCardProps {
  id: number;
  icon: IconType;
  title: string;
  description: string;
  img: string;
}

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
    <div
      onClick={() => handleRedirect(id)}
      className="w-[280px] rounded-md h-[300px] flex flex-col items-center justify-center relative overflow-hidden cursor-pointer hover:scale-110 transition-all"
    >
      <img
        src={img}
        alt={title}
        className="w-[100%] h-[100%] mt-[-80px] object-cover"
      />
      <div className="absolute top-0 bottom-0 left-0 right-0 bg-primary opacity-60 z-0" />
      <span className="w-24 h-24 bg-white rounded-full flex items-center justify-center p-4 text-green-500 z-60 absolute top-[60px]">
        <Icon size={80} />
      </span>
      <p className="text-white text-lg mt-16 absolute">{title}</p>
      <button className="absolute bottom-0 bg-gradient-to-b from-black to-zinc-600 w-full p-2 text-white text-lg hover:opacity-90">
        + Saiba mais
      </button>
    </div>
  );
};
