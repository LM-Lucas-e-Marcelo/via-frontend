import biguacu from "../assets/biguacu.png";
import ilhota from "../assets/ilhota.png";
import criciumaCentro from "../assets/criciuma_centro.png";
import criciumaVila from "../assets/criciuma_vila.png";
import cocal from "../assets/cocal.png";
import meleiro from "../assets/meleiro.png";
import pomerode from "../assets/pomerode.png";
import arroio from "../assets/arroio.png";
import icara from "../assets/icara.png";
import porto from "../assets/porto_uniao.png";
import forquilhinha from "../assets/forquilhinha.png";
import icaraLiri from "../assets/icara_liri.png";
import santaRosaDoSul from "../assets/via_santa_rosa_do_sul.png";
import lages from "../assets/via_lages.png";
import gravatal from "../assets/via_gravatal.png";

export const addresses = [
  {
    id: "arroiodosilva",
    cityAndNeigh: "VIA VISTORIA BALN. ARROIO DO SILVA",
    street:
      "Av. Barriga Verde, 1044, Socopas - Balneário Arroio Do Silva - Próximo Ao Cartório De Arroio Do Silva",
    phoneNumber: "(48) 99136-3461",
    whatsappNumber: "48991363461",
    mapUrl:
      "https://www.google.com/maps/place/ARROIO+DO+SILVA+VISTORIA+VEICULAR+LTDA/@-28.9824593,-49.423285,17z/data=!3m1!4b1!4m6!3m5!1s0x952233404492fc41:0x15faa6c93799dd16!8m2!3d-28.9824593!4d-49.4207101!16s%2Fg%2F11tcv6msjv?entry=ttu&g_ep=EgoyMDI1MDIyMy4xIKXMDSoASAFQAw%3D%3D",
    image: arroio,
  },
  {
    id: "biguacu",
    cityAndNeigh: "VIA VISTORIA BIGUAÇU",
    street:
      "R. Cônego Rodolfo Machado, 1000 - Rio Caveiras, Biguaçu - SC - Centro Comercial BIG MIX",
    phoneNumber: "(48) 99192-0452",
    whatsappNumber: "48991920452",
    mapUrl:
      "https://www.google.com/maps/place/VIA+VISTORIA+VEICULAR+BIGUA%C3%87U/@-27.5054199,-48.655416,17z/data=!3m1!4b1!4m6!3m5!1s0x95274ded8a17d7a7:0xc148a7f7e4388a21!8m2!3d-27.5054247!4d-48.6528411!16s%2Fg%2F11hf6rmdkx?entry=ttu&g_ep=EgoyMDI1MDYyMi4wIKXMDSoASAFQAw%3D%3D",
    image: biguacu,
  },
  {
    id: "cocaldosul",
    cityAndNeigh: "VIA VISTORIA COCAL DO SUL",
    street:
      "Rua São Marcos, 813 - B. Cristo Rei Cocal do Sul - SC - Em frente ao mercado São Pedro.",
    phoneNumber: "(48) 99176-3476",
    whatsappNumber: "48991763476",
    mapUrl:
      "https://www.google.com/maps/place/VIA+Vistoria+Veicular/@-28.5913825,-49.3248125,17z/data=!3m1!4b1!4m6!3m5!1s0x9521779b4c3d8fb9:0x138b1f93e0ed6c46!8m2!3d-28.5913872!4d-49.3222376!16s%2Fg%2F11rgzvz75f?entry=ttu&g_ep=EgoyMDI1MDYyMi4wIKXMDSoASAFQAw%3D%3D",
    image: cocal,
  },
  {
    id: "criciuma",
    cityAndNeigh: "VIA VISTORIA CRICIÚMA - CENTRO",
    street: "Rua Coronel Marcos Rovaris, 755, Centro - Criciúma - SC",
    phoneNumber: "(48) 3433-3107",
    whatsappNumber: "4834333107",
    mapUrl:
      "https://www.google.com/maps/place/VIA+CRICI%C3%9AMA+-+VISTORIA+VEICULAR+E+LAUDO+CAUTELAR/@-28.6785,-49.3633492,17z/data=!3m1!4b1!4m6!3m5!1s0x9521788f630feccb:0xad54e5b60f0b6a05!8m2!3d-28.6785047!4d-49.3607743!16s%2Fg%2F11bw21j0sl?entry=ttu&g_ep=EgoyMDI1MDYyMi4wIKXMDSoASAFQAw%3D%3D",
    image: criciumaCentro,
  },
  {
    id: "riomaina",
    cityAndNeigh: "VIA VISTORIA CRICIÚMA - RIO MAINA",
    street:
      "Rua Lourenço Zanette, 2111 - Sala 02 - Vila Floresta II - Criciúma - SC",
    phoneNumber: "(48) 99117-8955",
    whatsappNumber: "48991178955",
    mapUrl:
      "https://www.google.com/maps/place/VIA+RIO+MAINA+-+VISTORIA+VEICULAR+E+LAUDO+CAUTELAR/@-28.6752638,-49.4110622,14z/data=!4m10!1m2!2m1!1svia+vistoria+R.+Louren%C3%A7o+Zanette,+2111+-+02+-+Vila+Zuleima!3m6!1s0x95218302ab5d348b:0xbe185e0bdefe8f58!8m2!3d-28.6760342!4d-49.4076182!15sCjt2aWEgdmlzdG9yaWEgUi4gTG91cmVuw6dvIFphbmV0dGUsIDIxMTEgLSAwMiAtIFZpbGEgWnVsZWltYVo3IjV2aWEgdmlzdG9yaWEgciBsb3VyZW7Dp28gemFuZXR0ZSAyMTExIDAyIHZpbGEgenVsZWltYZIBFmNhcl9pbnNwZWN0aW9uX3N0YXRpb26aASRDaGREU1VoTk1HOW5TMFZKUTBGblNVUjJaMjlVY1RWUlJSQUKqAW8QASoQIgx2aWEgdmlzdG9yaWEoDDIeEAEiGkk2NAEUwSjgl1ROlHAVb0FZVcaaBCZwQBLCMjkQAiI1dmlhIHZpc3RvcmlhIHIgbG91cmVuw6dvIHphbmV0dGUgMjExMSAwMiB2aWxhIHp1bGVpbWHgAQD6AQQIABBF!16s%2Fg%2F11j3444ndp?entry=ttu&g_ep=EgoyMDI1MDYyMi4wIKXMDSoASAFQAw%3D%3D",
    image: criciumaVila,
  },
  {
    id: "forquilhinha",
    cityAndNeigh: "VIA VISTORIA FORQUILHINHA",
    street: "R. Nereu Belolli, 35 Sala 02 - Ouro Negro, Forquilhinha - SC",
    phoneNumber: "(48) 99143-6778",
    whatsappNumber: "48991436778",
    mapUrl:
      "https://www.google.com/maps/place/VIA+VISTORIA+VEICULAR+-+FORQUILHINHA/@-28.7499772,-49.44416,17z/data=!4m15!1m8!3m7!1s0x952181548a31358f:0x55aea3fe153d2601!2sR.+Nereu+Belolli,+35+-+Ouro+Negro,+Forquilhinha+-+SC,+88850-000!3b1!8m2!3d-28.7499772!4d-49.44416!16s%2Fg%2F11y6hhwcgh!3m5!1s0x952185b2e254f53d:0x21cc7bf075c6a3aa!8m2!3d-28.7499772!4d-49.44416!16s%2Fg%2F11rp0ywdh8?entry=ttu&g_ep=EgoyMDI1MDYyMi4wIKXMDSoASAFQAw%3D%3D",
    image: forquilhinha,
  },
  {
    id: "gravatal",
    cityAndNeigh: "VIA VISTORIA GRAVATAL",
    street: "Rua Manoel João Moraes Coop, 42 - Gravatal - SC",
    phoneNumber: "(48) 99206-1021",
    whatsappNumber: "48992061021",
    mapUrl: "https://www.google.com/maps?client=firefox-b-d&hs=muPp&sca_esv=ee81a51e8e25352b&output=search&q=VIA+VISTORIA+GRAVATAL++Rua+Manoel+Jo%C3%A3o+Moraes+Coop,+42+,+Gravatal,+SC&source=lnms&fbs=ADc_l-acAb_3MMOAUx0zmbUpgBqRNDksEaVrhivIH8sZJpxqoTq330TkReHURF1S6FtwdammcHPDe6If4FraTj_toiqY-xHXveAh4UJjqD_uJ2JX2moRD-n82wdkbNrajL5mdkwhNlKtZpwUc2umLj-KRs77W1_bOefe6PXy9s0-96CTvyIOo9BCMIvG47QRFBNiCgpXnhVOYmay99qB8QagmbvvMly9tg&entry=mc&ved=1t:200715&ictx=111",
    image: gravatal,
  },
  {
    id: "icara",
    cityAndNeigh: "VIA VISTORIA IÇARA",
    street: "Rua Leoberto Leal, 390 - Centro - Içara - SC",
    phoneNumber: "(48) 3432-2019",
    whatsappNumber: "4834322019",
    mapUrl:
      "https://www.google.com/maps/place/VIA+I%C3%87ARA+-+VISTORIA+VEICULAR+E+LAUDO+CAUTELAR/@-28.7079921,-49.3013941,17z/data=!3m1!4b1!4m6!3m5!1s0x95217ec84ae848df:0x6711118c817493e7!8m2!3d-28.7079968!4d-49.2988192!16s%2Fg%2F11cr_qpx8r?entry=ttu&g_ep=EgoyMDI1MDYyMi4wIKXMDSoASAFQAw%3D%3D",
    image: icara,
  },
  {
    id: "icara_liri",
    cityAndNeigh: "VIA VISTORIA IÇARA LIRI",
    street: "ROD SC 445, 3100 SALA 11,12 e 13 - Liri - Içara - SC",
    phoneNumber: "(48) 99144-4935",
    whatsappNumber: "48991444935",
    mapUrl:
      "https://www.google.com/maps/place/SC-445,+3100+-+Liri,+I%C3%A7ara+-+SC,+88820-000/@-28.6973588,-49.3171333,17z/data=!4m6!3m5!1s0x9521793282a145d9:0x48ff669ae9f2e1e9!8m2!3d-28.6973588!4d-49.314553!16s%2Fg%2F11jyy4n58j?entry=ttu&g_ep=EgoyMDI2MDIyMi4wIKXMDSoASAFQAw%3D%3D",
    image: icaraLiri,
  },
  {
    id: "ilhota",
    cityAndNeigh: "VIA VISTORIA ILHOTA",
    street: "R. Izidoro Maes, 115, Centro, Ilhota - SC",
    phoneNumber: "(47) 99256-5690",
    whatsappNumber: "47992565690",
    mapUrl:
      "https://www.google.com/maps/place/VIA+ILHOTA+-+VISTORIA+VEICULAR/@-26.9007369,-48.8290981,17z/data=!3m1!4b1!4m6!3m5!1s0x94df3118d1c34051:0xc0f78656bdf5fb90!8m2!3d-26.9007417!4d-48.8265232!16s%2Fg%2F11lmhpng9r?entry=ttu&g_ep=EgoyMDI1MDYyMi4wIKXMDSoASAFQAw%3D%3D",
    image: ilhota,
  },
  {
    id: "lages",
    cityAndNeigh: "VIA VISTORIA LAGES",
    street: "Av. Dom Pedro II, 2288 - Centro - Lages - SC",
    phoneNumber: "(49) 3019-0018",
    whatsappNumber: "554930190018",
    mapUrl:
      "https://www.google.com/maps/place/VIA+VISTORIA+VEICULAR+-+LAGES/@-27.8244138,-50.3267171,17z/data=!3m1!4b1!4m6!3m5!1s0x94e01fcf1a8d88b7:0x141d67897981cc80!8m2!3d-27.8244138!4d-50.3241368!16s%2Fg%2F11fnrdbwbm?entry=ttu&g_ep=EgoyMDI2MDIyMi4wIKXMDSoASAFQAw%3D%3D",
    image: lages,
  },
  {
    id: "meleiro",
    cityAndNeigh: "VIA VISTORIA MELEIRO",
    street:
      "Rua Vicinal Dos Imigrantes, 51, Zanette - Meleiro - SC - No Trevo De Meleiro",
    phoneNumber: "(48) 99198-1883",
    whatsappNumber: "48991981883",
    mapUrl:
      "https://www.google.com/maps/place/VIA+VISTORIA+MELEIRO+-+VISTORIA+VEICULAR/@-28.8378742,-49.6303329,17z/data=!4m10!1m2!2m1!1svia+vistoria+Rua+Vicinal+Dos+Imigrantes,+51,+Zanette+-+Meleiro+-+SC+-+No+Trevo+De+Meleiro!3m6!1s0x95218b1354af4451:0xf7da874b775df9fe!8m2!3d-28.8378789!4d-49.627758!15sCll2aWEgdmlzdG9yaWEgUnVhIFZpY2luYWwgRG9zIEltaWdyYW50ZXMsIDUxLCBaYW5ldHRlIC0gTWVsZWlybyAtIFNDIC0gTm8gVHJldm8gRGUgTWVsZWlyb5IBEnZlaGljbGVfaW5zcGVjdGlvbuABAA!16s%2Fg%2F11wx4v4_wq?entry=ttu&g_ep=EgoyMDI1MDYxNy4wIKXMDSoASAFQAw%3D%3D",
    image: meleiro,
  },
  {
    id: "pomerode",
    cityAndNeigh: "VIA VISTORIA POMERODE",
    street: "Rua Hermann Weege, 1474 - Box 01 E 02 - Centro - Pomerode - SC",
    phoneNumber: "(47) 3387-1883",
    whatsappNumber: "4733871883",
    mapUrl:
      "https://www.google.com/maps/place/VIA+VISTORIA+VEICULAR+-+POMERODE/@-26.7257623,-49.1731183,17z/data=!3m1!4b1!4m6!3m5!1s0x94dee50600cee8bb:0xfd18115318de2ffc!8m2!3d-26.7257671!4d-49.1705434!16s%2Fg%2F11hdq9y0y_?entry=ttu&g_ep=EgoyMDI1MDYyMi4wIKXMDSoASAFQAw%3D%3D",
    image: pomerode,
  },
  {
    id: "portouniao",
    cityAndNeigh: "VIA VISTORIA PORTO UNIÃO",
    street:
      "Av. Expedicionário Edmundo Arrabar, 1733 - Santa Rosa - Porto União - SC - Ao Lado Do Mercado Reviwer",
    phoneNumber: "(42) 99144-2738",
    whatsappNumber: "42991442738",
    mapUrl:
      "https://www.google.com/maps/place/VIA+PORTO+UNI%C3%83O+-+VISTORIA+VEICULAR+E+LAUDO+CAUTELAR/@-26.2531853,-51.0723227,17z/data=!3m1!4b1!4m6!3m5!1s0x94e68b273c399cfb:0xa87aedb73afe21fd!8m2!3d-26.2531901!4d-51.0697478!16s%2Fg%2F11rqs6ct4b?entry=ttu&g_ep=EgoyMDI1MDYyMi4wIKXMDSoASAFQAw%3D%3D",
    image: porto,
  },
  {
    id: "santa_rosa_do_sul",
    cityAndNeigh: "VIA VISTORIA SANTA ROSA DO SUL",
    street: "R. Raul José dos Santos, 51 - sala 03 - Centro - Santa Rosa do Sul - SC",
    phoneNumber: "(48) 99161-0799",
    whatsappNumber: "48991610799",
    mapUrl:
      "https://www.google.com/maps/place/VIA+VISTORIA+-+SANTA+ROSA+DO+SUL/@-29.1347427,-49.717151,17z/data=!3m1!4b1!4m6!3m5!1s0x9522176d0c71eb91:0xb76f955b2b130c7d!8m2!3d-29.1347427!4d-49.7145707!16s%2Fg%2F11s_v9rth5?entry=ttu&g_ep=EgoyMDI2MDIyMi4wIKXMDSoASAFQAw%3D%3D",
    image: santaRosaDoSul,
  },
];
