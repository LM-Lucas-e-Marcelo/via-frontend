import { ServiceCard } from "./service-card";
import { services } from "../../constants/services";

export const Services = () => {
  return (
    <div
      className=" bg-gradient-to-r from-white to-zinc-100 w-full max-w-[1440px] flex flex-col items-center p-10"
      id="services"
    >
      <p>Serviços VIA</p>
      <strong className="text-3xl">
        Vistorias veiculares para sua segurança
      </strong>
      <div className="flex flex-wrap gap-4 justify-center">
        {services.map(({ title, description, icon }) => {
          return (
            <ServiceCard
              key={title}
              title={title}
              description={description}
              icon={icon}
            />
          );
        })}
      </div>
    </div>
  );
};
