import { useParams } from "react-router-dom";
import { services } from "../constants/services";

export function Services() {
  const { id } = useParams();

  if (!id) return;

  const selectedService = services.find((service) => service.id === +id);

  return (
    <div className="w-full mt-[60px] md:mt-[102px] bg-gradient-to-r from-white to-zinc-100 min-h-[70vh]">
      <div
        className={`w-full bg-cover bg-center h-[400px] p-10 relative`}
        style={{ backgroundImage: `url(${selectedService?.img})` }}
      >
        <h1 className="absolute inset-0 flex items-center justify-center z-40 text-white text-4xl text-center">
          {selectedService?.title}
        </h1>
        <div className="absolute top-0 bottom-0 left-0 right-0 bg-primary opacity-60 z-0" />
      </div>
      <div className="p-10 flex gap-20 items-center justify-center flex-col md:flex-row">
        <h1 className="text-3xl">Saiba mais sobre {selectedService?.title}</h1>
        <div className="w-[100%] md:w-[50%]">
          <span className="mb-10 block">
            <h1 className="text-4xl font-bold mb-2">O que é</h1>
            <p className="text-xl">{selectedService?.description}</p>
          </span>
          <span>
            <h1 className="text-4xl font-bold mb-2">Documentação necessária</h1>
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
            className="bg-gradient-to-b from-black to-zinc-600 p-2 text-white block w-[200px] text-center mt-5"
            href="/where-are-we"
          >
            Agendar vistoria
          </a>
        </div>
      </div>
    </div>
  );
}
