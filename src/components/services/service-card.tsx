import { IconType } from "react-icons";

interface ServiceCardProps {
  id: number;
  icon: IconType;
  title: string;
  description: string;
}

export const ServiceCard = ({ icon: Icon, title, id }: ServiceCardProps) => {
  const handleRedirect = (id: number) => {
    window.open(`/services/${id}`, "_self");
  };
  return (
    <div
      onClick={() => handleRedirect(id)}
      className="w-[280px] bg-gradient-to-r from-secondary to-green-200 rounded-md h-[300px] flex flex-col items-center justify-center relative overflow-hidden cursor-pointer hover:scale-110 transition-all"
    >
      <span className="w-24 h-24 bg-white rounded-full flex items-center justify-center p-4 text-green-500">
        <Icon size={80} />
      </span>
      <p className="text-white text-lg mt-5">{title}</p>
      <button className="absolute bottom-0 bg-gradient-to-b from-black to-zinc-600 w-full p-2 text-white text-lg hover:opacity-90">
        + Saiba mais
      </button>
    </div>
  );
};
