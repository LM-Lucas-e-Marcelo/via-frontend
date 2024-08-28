import { useParams } from "react-router-dom";
import { services } from "../constants/services";

export function Services() {
  const { id } = useParams();

  if (!id) return;

  const selectedService = services.find((service) => service.id === +id);

  return (
    <div className="w-full mt-[60px] md:mt-[102px] bg-gradient-to-r from-white to-zinc-100 min-h-[70vh]">
      <div className="w-full bg-[url(/bg-service.jpg)] bg-cover h-[400px] p-10 relative">
        <h1 className="absolute inset-0 flex items-center justify-center z-50 text-white text-4xl">
          {selectedService?.title}
        </h1>
        <div className="absolute top-0 bottom-0 left-0 right-0 bg-primary opacity-60 z-0" />
      </div>
      <div className="p-10 flex gap-20 items-center justify-center flex-col md:flex-row">
        <h1 className="text-3xl">Saiba mais sobre {selectedService?.title}</h1>
        <p className="w-[100%] md:w-[50%] text-xl">
          {selectedService?.description}
        </p>
      </div>
    </div>
  );
}
