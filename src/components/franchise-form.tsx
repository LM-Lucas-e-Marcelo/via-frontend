import { FormEvent, useRef, useState } from "react";
import { Input } from "./input";
import { Select } from "./select";

import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import { CgSpinner } from "../assets/icons";
import { STATES } from "../constants/states";
import { CITIES } from "../constants/cities";

export function FranchiseForm() {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    state: "Santa Catarina",
    city: "",
    finance: "",
    how: "",
  });
  const formRef = useRef<HTMLFormElement | null>(null);

  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    setLoading(true);
    e.preventDefault();

    const { name, email, phone } = formData;

    if (!name || !email || !phone) {
      toast("Por favor preencha todos os campos", {
        type: "error",
      });
      setLoading(false);
      return;
    }

    emailjs
      .sendForm(
        "service_d1570sj",
        "template_a3qizll",
        formRef.current as never,
        {
          publicKey: "ey3vQi4Yi5tAU7qEL",
        }
      )
      .then(
        () => {
          toast("Solicitação enviada com sucesso!", {
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
          email: "",
          phone: "",
          state: "",
          city: "",
          finance: "",
          how: "",
        });
        setLoading(false);
      });
  };

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
      className="max-w-[600px] m-auto mt-10"
      id="franchise-form"
    >
      <h1 className="text-2xl text-center font-bold text-primary mb-6">
        Para mais informações sobre FRANQUIA, preencha os campos abaixo que
        entraremos em contato com você.
      </h1>
      <div className="flex flex-col gap-4">
        <Input
          label="Nome*"
          name="name"
          onChange={handleChange}
          value={formData.name}
        />
        <Input
          label="Email*"
          name="email"
          onChange={handleChange}
          value={formData.email}
          type="email"
        />
        <Input
          label="Celular*"
          name="phone"
          onChange={handleChange}
          value={formData.phone}
        />
        <Select
          label="Estado*"
          name="state"
          onChange={handleChange}
          options={STATES}
          value={formData.state}
        />
        <Select
          label="Cidade*"
          name="city"
          onChange={handleChange}
          options={CITIES}
          value={formData.city}
        />
        <Select
          label="Qual a sua Disponibilidade Financeira?*"
          options={budgetOptions}
          name="finance"
          onChange={handleChange}
          value={formData.finance}
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
