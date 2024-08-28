import { useEffect, useMemo, useState } from "react";
import { Input } from "./input";
import { Select } from "./select";
import axios from "axios";

interface IStates {
  states: Array<{
    name: string;
  }>;
}

export function FranchiseForm() {
  const [cities, setCities] = useState<string[]>([]);
  const [states, setStates] = useState<IStates>();
  console.log(states);

  useEffect(() => {
    axios
      .post("https://countriesnow.space/api/v0.1/countries/cities", {
        country: "brazil",
      })
      .then(({ data }) => setCities(data?.data));

    axios
      .post("https://countriesnow.space/api/v0.1/countries/states", {
        country: "brazil",
      })
      .then(({ data }) => setStates(data?.data));
  }, []);

  const citiesOptions = useMemo(
    () =>
      cities?.map((city) => ({
        name: city,
        value: city,
      })),
    [cities]
  );

  const stateOptions = useMemo(
    () =>
      states?.states?.map((state) => ({
        name: state.name,
        value: state.name,
      })),
    [states?.states]
  );

  const budgetOptions = [
    {
      name: "Até R$100 mil",
      value: "Até R$100 mil",
    },
    {
      name: "De R$100 mil à R$200 mil",
      value: "De R$100 mil à R$200 mil",
    },
    {
      name: "De R$200 mil à R$300 mil",
      value: "De R$200 mil à R$300 mil",
    },
    {
      name: "De R$300 mil à R$500 mil",
      value: "De R$300 mil à R$500 mil",
    },
    {
      name: "Mais de R$500 mil",
      value: "Mais de R$500 mil",
    },
  ];

  const howYouFindUsOptions = [
    {
      name: "Facebook",
      value: "Facebook",
    },
    {
      name: "Instagram",
      value: "Instagram",
    },
    {
      name: "Linkedin",
      value: "Linkedin",
    },
    {
      name: "Youtube",
      value: "Youtube",
    },
    {
      name: "Indicação",
      value: "Indicação",
    },
    {
      name: "Site da marca",
      value: "Site da marca",
    },
    {
      name: "Outros",
      value: "Outros",
    },
  ];

  console.log(cities);

  return (
    <form className="max-w-[600px] m-auto mt-10" id="franchise-form">
      <h1 className="text-2xl text-center font-bold text-primary">
        Cadastre-se agora e receba informações sobre a franquia VIA
      </h1>
      <p className="text-center mt-2">
        Preencha os campos abaixo que a nossa equipe de expansão entrará em
        contato com você.
      </p>
      <div className="flex flex-col gap-4">
        <Input label="Nome*" />
        <Input label="Email*" />
        <Input label="Celular*" />
        <Select label="Estado*" options={stateOptions} />
        <Select label="Cidade*" options={citiesOptions} />
        <Select
          label="Qual a sua Disponibilidade Financeira?*"
          options={budgetOptions}
        />
        <Select label="Como nos conheceu?*" options={howYouFindUsOptions} />
      </div>
      <button className="bg-gradient-to-b from-black to-zinc-600 text-white p-3 w-full rounded-md mt-5">
        Enviar
      </button>
    </form>
  );
}
