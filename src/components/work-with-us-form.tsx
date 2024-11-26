/* eslint-disable @typescript-eslint/no-unused-vars */
import { FormEvent, useEffect, useMemo, useRef, useState } from "react";
import { Input } from "./input";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import { CgSpinner } from "../assets/icons";
import { Select } from "./select";
import axios from "axios";

interface IStates {
  states: Array<{
    name: string;
  }>;
}

export function WorkWithUsForm() {
  const [cities, setCities] = useState<string[]>([]);
  const [states, setStates] = useState<IStates>();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    dateOfBirth: "",
    education: "",
    email: "",
    phone: "",
    state: "",
    city: "",
    how: "",
  });
  const formRef = useRef<HTMLFormElement | null>(null);

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

  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    setLoading(true);
    e.preventDefault();

    const { email, ...rest } = formData;
    const hasSomeEmpty = Object.values(rest).some((value) => value === "");

    if (hasSomeEmpty) {
      toast("Por favor preencha todos os campos obrigatórios", {
        type: "error",
      });
      setLoading(false);
      return;
    }

    emailjs
      .sendForm(
        "service_6hsbwtf",
        "template_3y5uka6",
        formRef.current as never,
        {
          publicKey: "Nhq176vpU7AgCBmDs",
        }
      )
      .then(
        () => {
          toast("Seus dados foram enviados com sucesso!", {
            type: "success",
          });
          e.currentTarget?.reset();
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      )
      .finally(() => {
        setFormData({
          name: "",
          dateOfBirth: "",
          education: "",
          email: "",
          phone: "",
          state: "",
          city: "",
          how: "",
        });
        setLoading(false);
      });
  };

  const howYouFindUsOptions = [
    {
      name: "Google",
      value: "Google",
    },
    {
      name: "Instagram",
      value: "Instagram",
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

  const handleChange = (
    event: FormEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = event.currentTarget;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  return (
    <form
      onSubmit={sendEmail}
      ref={formRef}
      className="max-w-[600px] m-auto mt-10 w-full"
      id="franchise-form"
    >
      <div className="flex flex-col gap-4">
        <Input
          label="Nome*"
          name="name"
          onChange={handleChange}
          value={formData.name}
        />
        <Input
          label="Data de nascimento*"
          name="dateOfBirth"
          onChange={handleChange}
          value={formData.dateOfBirth}
        />
        <Input
          label="Escolaridade*"
          name="education"
          onChange={handleChange}
          value={formData.education}
        />
        <Input
          label="Telefone*"
          name="phone"
          onChange={handleChange}
          value={formData.phone}
        />
        <Input
          label="Email"
          name="email"
          onChange={handleChange}
          value={formData.email}
          type="email"
        />
        <Select
          label="Estado*"
          name="state"
          onChange={handleChange}
          options={stateOptions}
          value={formData.state}
        />
        <Select
          label="Cidade*"
          name="city"
          onChange={handleChange}
          options={citiesOptions}
          value={formData.city}
        />
        <Select
          label="Como nos conheceu?*"
          name="how"
          options={howYouFindUsOptions}
          onChange={handleChange}
          value={formData.how}
        />
      </div>
      <button
        disabled={loading}
        type="submit"
        className="bg-gradient-to-b from-black to-zinc-600 text-white p-3 w-full rounded-md mt-5 flex items-center gap-2 justify-center"
      >
        Enviar {loading && <CgSpinner className="animate-spin" />}
      </button>
    </form>
  );
}
