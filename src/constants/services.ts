import {
  PiFireTruckLight,
  PiNewspaperClipping,
  TbArrowsTransferDown
} from "../assets/icons";
import second from "/second.webp";
import miniSecond from "/mini-second.webp";
import change from "/change.webp";
import miniChange from "/mini-change.webp";
import miniCardPurchase from '/mini-card-purchase.webp'
import cardPurchase from '/card-purchase.webp'


export const services = [
  {
    id: 1,
    title: "Vistoria de Transferência",
    description:
      "A vistoria para Transferência é um procedimento obrigatório realizado durante mudança de propriedade de um veículo. Esse serviço assegura que o veículo cumpre todos os requisitos legais e está em condições seguras para circular.",
    icon: TbArrowsTransferDown,
    img: cardPurchase,
    thumb: miniCardPurchase,
    documents: [
      "⁠Certificado de Registro e Licenciamento CRLV ou ⁠Certificado de Registro de Veículo CRV",
      "⁠Documento de identificação com foto do proprietário ou requerente. ⁠CNH/RG",
    ],
  },
  {
    id: 2,
    title: "Vistoria 2º Via de Recibo",
    description:
      "A Vistoria para Emissão da segunda via do recibo é necessária quando o proprietário do veiculo precisa obter um novo certificado de registro de veículo (CRV), devido á perde, roubo, extravio ou danificação do documento original",
    icon: PiNewspaperClipping,
    img: second,
    thumb: miniSecond,
    documents: [
      "⁠Certificado de Registro e Licenciamento CRLV ou Certificado de Registro de Veículo CRV",
      "⁠Documento de identificação com foto do proprietário ou requerente. ⁠CNH/RG",
    ],
  },
  {
    id: 3,
    title: "Vistoria Alteraçao Característica",
    description:
      "É necessária quando um proprietário modifica aspectos do veículo, como cor, motorização, suspensão ou outros que mudem suas especificações originais registradas. Essa vistoria garante que as alterações estão em conformidade com as normas de segurança e regulamentações do DETRAN",
    icon: PiFireTruckLight,
    img: change,
    thumb: miniChange,
    documents: [
      "Certificado de Registro e Licenciamento CRLV ou Certificado de Registro de Veículo CRV",
      "⁠Documento de identificação com foto do proprietário ou requerente. CNH/RG",
      "⁠Autorização do DETRAN",
      "⁠Laudo do INMETRO",
    ],
  },
  // {
  //   id: 4,
  //   title: "Vistoria para Troca de Categoria",
  //   description:
  //     "A vistoria para alteração de categoria é realizada quando um veículo muda de uma categoria para outra como particular para aluguel. Essa vistoria garante que o veículo atende ás normas de segurança e regulamentações do DETRAN específicas para a nova categoria.",
  //   icon: PiFireTruckLight,
  //   img: category,
  //   thumb: miniCategory,
  //   documents: [
  //     "⁠Certificado de Registro e Licenciamento CRLV ou Certificado de Registro de Veículo CRV",
  //     " ⁠Documento de identificação com foto do proprietário ou requerente. CNH/RG",
  //     "Autorização do DETRAN",
  //   ],
  // },
  // {
  //   id: 5,
  //   title: "Vistoria Cautelar",
  //   description:
  //     "A vistoria cautelar é um procedimento detalhado realizado em veículos usados para verificar suas condições físicas e documentais antes de uma compra ou venda. Esse serviço visa identificar eventuais problemas estruturais de segurança ou documentação, fornecendo segurança e transparência para compradores e vendedores.",
  //   icon: LiaCarCrashSolid,
  //   img: cautelar,
  //   thumb: miniCautelar,
  //   documents: [
  //     "⁠Certificado de Registro e Licenciamento CRLV ou Certificado de Registro de Veículo CRV",
  //     "⁠Documento de identificação com foto do proprietário ou requerente. ⁠CNH/RG",
  //   ],
  // },
];
