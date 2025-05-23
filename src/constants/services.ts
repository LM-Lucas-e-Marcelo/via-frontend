import {
  PiFireTruckLight,
  PiNewspaperClipping,
  TbArrowsTransferDown,
} from "../assets/icons";
import second from "/second.webp";
import miniSecond from "/mini-second.png";
import change from "/change.webp";
import miniChange from "/mini-change.png";
import miniCardPurchase from "/mini-card-purchase.png";
import cardPurchase from "/card-purchase.webp";

export const services = [
  {
    id: 1,
    title: "Vistoria de Transferência",
    description:
      "A vistoria para transferência é um procedimento obrigatório realizado durante mudança de propriedade de um veículo. Esse serviço assegura que o veículo cumpre todos os requisitos legais e está em condições seguras para circular.",
    icon: TbArrowsTransferDown,
    img: cardPurchase,
    thumb: miniCardPurchase,
    documents: [
      "⁠Certificado de Registro e Licenciamento CRLV ou ⁠Certificado de Registro de Veículo CRV",
      "Documento de identificação com foto (CNH/RG) do proprietário ou requerente.",
    ],
  },
  {
    id: 2,
    title: "Vistoria 2º Via de Recibo",
    description:
      "A Vistoria para Emissão da segunda via do recibo é necessária quando o proprietário do veículo precisa obter um novo certificado de registro de veículo (CRV), devido à perda, roubo, extravio ou danificação do documento original.",
    icon: PiNewspaperClipping,
    img: second,
    thumb: miniSecond,
    documents: [
      "⁠Certificado de Registro e Licenciamento CRLV ou Certificado de Registro de Veículo CRV",
      "Documento de identificação com foto (CNH/RG) do proprietário ou requerente.",
    ],
  },
  {
    id: 3,
    title: "Vistoria Alteração Característica",
    description:
      "É necessária quando um proprietário modifica aspectos do veículo, como cor, motorização, suspensão ou outros que mudem suas especificações originais registradas. Essa vistoria garante que as alterações estão em conformidade com as normas de segurança e regulamentações do DETRAN.",
    icon: PiFireTruckLight,
    img: change,
    thumb: miniChange,
    documents: [
      "Certificado de Registro e Licenciamento CRLV ou Certificado de Registro de Veículo CRV",
      "Documento de identificação com foto (CNH/RG) do proprietário ou requerente.",
      "⁠Autorização do DETRAN",
      "⁠Laudo do INMETRO",
    ],
  },
];
