import { useParams } from "react-router-dom";
import { services } from "../constants/services";
import { Fragment, useEffect, useState } from "react";
import { IconType } from "react-icons";
import { precautionaryServices } from "../constants/precautionary-services";
import { tv } from "tailwind-variants";

const overlayStyles = tv({
  base: "absolute top-0 bottom-0 left-0 right-0 bg-primary opacity-60 z-0",
  variants: {
    isPrecautionary: {
      true: "bg-zinc-500",
    },
  },
});

interface ISelectedService {
  id: number;
  title: string;
  description: string;
  icon: IconType;
  img: string;
  thumb: string;
  documents: string[];
  isPngIcon?: boolean;
  services?: Array<{
    title: string;
    description: string;
  }>;
}

export function Services() {
  const [selectedService, setSelectedService] =
    useState<ISelectedService | null>();
  const { id } = useParams();

  const precautionaryIds = precautionaryServices.map((service) => service.id);
  const isPrecautionary = !!precautionaryIds.includes(+id!);

  useEffect(() => {
    if (id) {
      const selectedService = services.find((service) => service.id === +id);

      if (selectedService) {
        setSelectedService(selectedService);
        return;
      }

      const selectedPrecautionary = precautionaryServices.find(
        (precautionary) => precautionary.id === +id
      );

      if (selectedPrecautionary) {
        setSelectedService(selectedPrecautionary as never);
      }
    }

    return () => setSelectedService(null);
  }, [id]);

  if (!selectedService) return;

  return (
    <div className="w-full mt-[60px] md:mt-[98px] bg-gradient-to-r from-white to-zinc-100 min-h-[70vh]">
      <div
        className={`w-full bg-cover bg-center h-[500px] p-10 relative`}
        style={{ backgroundImage: `url(${selectedService?.img})` }}
      >
        <h1 className="absolute inset-0 flex items-center justify-center z-30 text-white text-4xl text-center">
          {selectedService?.title}
        </h1>
        <div className={overlayStyles({ isPrecautionary })} />
      </div>
      <div className="p-10 flex gap-20 items-center justify-center flex-col md:flex-row">
        <h1 className="text-3xl">Saiba mais sobre {selectedService?.title}</h1>
        <div className="w-[100%] md:w-[50%]">
          <span className="mb-10 block">
            <h1 className="text-3xl font-bold mb-2">O que é</h1>
            <p
              className="text-xl"
              dangerouslySetInnerHTML={{ __html: selectedService?.description }}
            />
          </span>
          {!!selectedService.services?.length && (
            <span className="mb-10 block">
              <h1 className="text-3xl font-bold mb-5">
                Itens examinados na {selectedService.title}:
              </h1>
              {selectedService.services.map((service) => (
                <Fragment key={service.title}>
                  <div className="mb-5">
                    <p
                      className="text-xl font-semibold"
                      dangerouslySetInnerHTML={{
                        __html: service.title,
                      }}
                    />
                    <p
                      className="text-xl"
                      dangerouslySetInnerHTML={{
                        __html: service.description,
                      }}
                    />
                  </div>
                </Fragment>
              ))}
            </span>
          )}

          <span>
            <h1 className="text-3xl font-bold mb-2">Documentação necessária</h1>
            <p className="text-xl">
              <ul className="list-disc">
                {selectedService?.documents.map((document) => (
                  <li className="ml-5" key={document}>
                    {document}
                  </li>
                ))}
              </ul>
            </p>
          </span>
          <a
            className="bg-gradient-to-b from-black to-zinc-600 p-2 text-white block w-[200px] text-center mt-5 rounded-md"
            href="/where-are-we"
          >
            Agendar vistoria
          </a>
        </div>
      </div>
    </div>
  );
}
