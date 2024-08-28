import { ServiceCard } from "./service-card";
import { services } from "../../constants/services";

export const Services = () => {
  return (
    <div
      className="w-full max-w-[1440px] flex flex-col items-center p-10"
      id="services"
    >
      <strong className="text-primary text-xl">SERVIÇOS VIA VISTORIA</strong>
      <p className="text-xl text-center mb-10">
        Aqui você tem serviços de qualidade e segurança!
      </p>
      <div className="flex flex-wrap gap-6 justify-center">
        {services.map(({ id, title, description, icon }) => {
          return (
            <ServiceCard
              id={id}
              key={id}
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
