import { MdLocalCarWash, FaCarBurst, MdOutlineCarCrash } from "../assets/icons";

import cautelarPintura from "/cautelar-pintura.webp";
import miniCautelarPintura from "/mini-cautelar-pintura.webp";

import cautelarVia from "/cautelar-via.webp";
import miniCautelarVia from "/mini-cautelar-via.webp";

import cautelarCadastramento from "/cautelar-cadastramento.webp";
import miniCautelarCadastramento from "/mini-cautelar-cadastramento.webp";

export const precautionaryServices = [
  {
    id: 5,
    title: "Vistoria Cautelar Via Cadastramento",
    description:
      "Neste tipo de vistoria cautelar será analisada a autenticidade dos sinais identificadores do veículo, seu estado de conservação e possíveis danos ou deformações.",
    icon: MdOutlineCarCrash,
    img: cautelarCadastramento,
    thumb: miniCautelarCadastramento,
    services: [
      {
        title: "- Chassi/Motor/ identificação veicular",
        description:
          "Realização de uma vistoria física, coletando imagens e confrontando os sinais identificadores primários e secundários do veículo com um banco de dados, tendo assim uma conclusão se os mesmos são únicos, legítimos e se encontram em bom estado de conservação.",
      },
    ],
    documents: [
      "⁠Certificado de Registro e Licenciamento CRLV ou Certificado de Registro de Veículo CRV",
      "⁠Documento de identificação com foto do proprietário ou requerente. ⁠CNH/RG",
    ],
  },
  {
    id: 6,
    title: "Vistoria Cautelar Via",
    description:
      "A Vistoria Cautelar Via proporciona uma análise histórica, documental, estrutural e de originalidade dos itens identificadores do veículo. Com essa vistoria, você conhecerá o histórico e procedência do veículo, além de uma minuciosa análise estrutural, que apontará se o veículo já sofreu reparos significativos.",
    icon: FaCarBurst,
    img: cautelarVia,
    thumb: miniCautelarVia,
    services: [
      {
        title: "- Histórico/Leilão",
        description:
          "Exame feito com base na placa do carro, apresentando histórico de leilão, sinistro, roubo e furto, restrições, infrações e outros.",
      },
      {
        title: "- Chassi/Motor identificação veicular",
        description:
          "Realização de uma vistoria física, coletando imagens e confrontando os sinais identificadores primários e secundários do veículo com um banco de dados, tendo assim uma conclusão se os mesmos são únicos, legítimos e se encontram em bom estado de conservação.",
      },
      {
        title: "- Análise estrutural",
        description:
          "Exame minucioso da estrutura do veículo, verificando sua integridade, autenticidade e eventuais danos ou consertos que o veículo possa ter sofrido, que podem ou não comprometer a segurança de pessoas e bens.",
      },
    ],
    documents: [
      "⁠Certificado de Registro e Licenciamento CRLV ou Certificado de Registro de Veículo CRV",
      "⁠Documento de identificação com foto do proprietário ou requerente. ⁠CNH/RG",
    ],
  },
  {
    id: 7,
    title: "Vistoria Cautelar Via com Pintura",
    description:
      "A Cautelar Via com Pintura é um produto completo para garantir a sua segurança ao comprar ou vender seu carro usado. Esse processo registra o histórico, a originalidade, a estrutura e também a condição da pintura do veículo. <br/> Com a Cautelar Via com Pintura, nada passa despercebido, é a sua via para garantir a segurança na compra de um seminovo.",
    icon: MdLocalCarWash,
    img: cautelarPintura,
    thumb: miniCautelarPintura,
    services: [
      {
        title: "- Histórico/Leilão",
        description:
          "Consulta feita com base na placa do carro, fornecendo informações sobre: leilão, sinistro, roubo, furto, restrições, infrações, entre outras coisas.",
      },
      {
        title: "- Chassi/Motor identificação veicular",
        description:
          "Realização de uma inspeção física, coletando imagens e confrontando os sinais identificadores primários e secundários do veículo com um banco de dados, tendo assim uma conclusão se os mesmos são únicos, legítimos e encontram-se em bom estado de conservação.",
      },
      {
        title: "- Análise estrutural",
        description:
          "Através de um procedimento minucioso, examina-se a estrutura do veículo, avaliando sua integridade, originalidade e eventuais danos ou consertos que o veículo possa ter sofrido, que podem ou não comprometer a segurança de pessoas e bens.",
      },
      {
        title: "- Análise de pintura",
        description:
          "Nesta avaliação o profissional emprega métodos de inspeção visual, juntamente com equipamentos de medição, para obter conclusões sobre acabamentos, presença de falhas e espessura da pintura, comparando-as com os padrões originais do fabricante.",
      },
    ],
    documents: [
      "⁠Certificado de Registro e Licenciamento CRLV ou Certificado de Registro de Veículo CRV",
      "⁠Documento de identificação com foto do proprietário ou requerente. ⁠CNH/RG",
    ],
  },
];
