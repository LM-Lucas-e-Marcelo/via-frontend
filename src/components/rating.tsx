import { IoIosStar } from "../assets/icons";

const starsQuantity = 5;
const starsArray = Array.from({ length: starsQuantity });

const customers = [
  {
    name: "Simone Gomes",
    comments: "97",
    photos: "18",
    message: "Ótimo atendimento. Agilidade.",
  },
  {
    name: "kfame22",
    comments: "2",
    photos: "0",
    message: "Bom atendimento e serviço prestado, recomendo.",
  },
  {
    name: "Marcelo Martins",
    comments: "4",
    photos: "0",
    message: "Ótima",
  },
];

export function Rating() {
  return (
    <div className="w-full">
      <div className="flex flex-col gap-3 p-10 max-w-[1440px] m-auto">
        <h1 className="text-2xl font-bold text-center mb-10">
          Veja o que as pessoas estão dizendo sobre nós
        </h1>
        <div className="flex items-center justify-center gap-5 flex-wrap">
          {customers.map((customer) => (
            <div
              className="bg-zinc-100 rounded-md p-4 w-[300px] h-[180px]"
              key={customer.name}
            >
              <strong className="text-xl">{customer.name}</strong>
              <p>
                {customer.comments} comentários - {customer.photos} fotos
              </p>
              <span className="flex gap-2 items-center text-yellow-400">
                {starsArray.map((_, index) => (
                  <IoIosStar key={index} size={20} />
                ))}
              </span>
              <p className="mt-5">{customer.message}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
