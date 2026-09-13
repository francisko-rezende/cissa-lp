import type { ComponentType } from "react";
import {
  ComidaIcon,
  ConvivioIcon,
  CuidadoIcon,
  EquipeIcon,
  FamiliaIcon,
  SeguroIcon,
} from "@/components/icons";

export type Beneficio = {
  id: string;
  titulo: string;
  texto: string;
  Icon: ComponentType<{ className?: string }>;
};

export const beneficios: Beneficio[] = [
  {
    id: "cuidado",
    titulo: "Cuidado individualizado",
    texto:
      "Cada morador tem suas necessidades, seu ritmo e suas preferências. O cuidado é combinado com a família, caso a caso.",
    Icon: CuidadoIcon,
  },
  {
    id: "seguro",
    titulo: "Ambiente seguro e confortável",
    texto:
      "Casa térrea, circulação livre e ambientes adaptados para o dia a dia de quem tem menos mobilidade.",
    Icon: SeguroIcon,
  },
  {
    id: "comida",
    titulo: "Alimentação caseira",
    texto:
      "Refeições preparadas na cozinha da casa, com atenção a restrições alimentares.",
    Icon: ComidaIcon,
  },
  {
    id: "equipe",
    titulo: "Acompanhamento da equipe",
    texto: "Presença de cuidadores ao longo do dia e da noite.",
    Icon: EquipeIcon,
  },
  {
    id: "convivio",
    titulo: "Convivência e atividades",
    texto:
      "Conversa, música, jogos, café da tarde e datas comemorativas. São atividades simples que dão ritmo à semana.",
    Icon: ConvivioIcon,
  },
  {
    id: "familia",
    titulo: "Família sempre por dentro",
    texto:
      "Visitas, contato por WhatsApp e aviso imediato à família em qualquer situação fora da rotina.",
    Icon: FamiliaIcon,
  },
];

export type Foto = {
  src: string;
  alt: string;
  titulo: string;
  legenda: string;
};

export const fotos: Foto[] = [
  {
    src: "/fotos/quarto-cama.webp",
    alt: "Quarto com cama de solteiro coberta por colcha de crochê, cortina clara e janela com luz natural",
    titulo: "Os quartos",
    legenda:
      "Camas individuais, roupa de cama sempre limpa e espaço para os objetos de cada morador.",
  },
  {
    src: "/fotos/quarto-detalhe.webp",
    alt: "Criado-mudo de madeira ao lado da cama com abajur, garrafa de água e itens de uso pessoal",
    titulo: "Cantinho pessoal",
    legenda: "Abajur, água por perto e as coisas de cada um ao alcance da mão.",
  },
  {
    src: "/fotos/sala-convivencia.webp",
    alt: "Sala de convivência com sofá de três lugares e chaise, em ambiente claro e arrumado",
    titulo: "Sala de convivência",
    legenda:
      "Onde se assiste à novela, se conversa e se recebe visita da família.",
  },
  {
    src: "/fotos/copa-mesa-posta.webp",
    alt: "Mesa de refeições posta com toalha estampada e cadeiras estofadas, na copa da casa",
    titulo: "Copa e refeições",
    legenda:
      "As refeições são feitas juntos, à mesa, não na bandeja do quarto.",
  },
  // {
  //   src: "/fotos/copa-refeicoes.webp",
  //   alt: "Copa da casa com mesa, cadeiras e armário de madeira com micro-ondas",
  //   titulo: "A copa",
  //   legenda: "Café da manhã e café da tarde, todos os dias, no mesmo horário.",
  // },
  {
    src: "/fotos/cozinha.webp",
    alt: "Cozinha ampla e organizada, com fogão, geladeira e bancada de apoio",
    titulo: "A cozinha",
    legenda:
      "Comida feita na casa, todos os dias, por quem conhece o gosto de cada morador.",
  },
  {
    src: "/fotos/fachada.webp",
    alt: "Fachada da residência, com varanda de tijolinho, portão e plantas na entrada",
    titulo: "A entrada",
    legenda:
      "Rua residencial tranquila, com estacionamento em frente para as visitas.",
  },
];

export type Duvida = {
  pergunta: string;
  resposta: string;
};

export const duvidas: Duvida[] = [
  {
    pergunta: "Quem cuida dos moradores durante o dia e a noite?",
    resposta:
      "A casa conta com cuidadores presentes ao longo do dia e também à noite.",
  },
  {
    pergunta: "Como funciona a rotina de um dia na residência?",
    resposta:
      "A rotina segue horários previsíveis: café da manhã, banho e cuidados pessoais, atividades leves e convivência, almoço, descanso, café da tarde, jantar e preparação para dormir. Quem quer participar de tudo participa; quem prefere sossego tem o seu espaço respeitado.",
  },
  {
    pergunta: "E a medicação e o acompanhamento de saúde?",
    resposta:
      "A administração de medicamentos segue a prescrição do médico de cada morador, com registro e controle. Acompanhamento clínico, consultas e exames são feitos em conjunto com a família.",
  },
  {
    pergunta: "A alimentação é adaptada a restrições?",
    resposta:
      "Sim. A comida é preparada na cozinha da casa e adaptada a restrições como diabetes, hipertensão, dificuldade de deglutição e alergias.",
  },
  {
    pergunta: "Quais são os horários de visita da família?",
    resposta:
      "A família é muito bem-vinda. Pedimos apenas que combine o horário antes, pelo WhatsApp, para que possamos receber com atenção e respeitar a rotina dos moradores.",
  },
  {
    pergunta: "Como são os valores e o que está incluído?",
    resposta:
      "Os valores variam de acordo com o grau de cuidado necessário e o tipo de acomodação. Conversamos sobre isso com calma pelo WhatsApp ou na visita, sem compromisso.",
  },
  {
    pergunta: "Como faço para conhecer a casa?",
    resposta:
      "Basta chamar no WhatsApp e combinar um horário. Você pode visitar a casa, conhecer a equipe, ver os quartos e fazer todas as perguntas que quiser antes de qualquer decisão.",
  },
];

export type Depoimento = {
  n: string;
  placeholder: string;
};

export const depoimentos: Depoimento[] = [
  {
    n: "1",
    placeholder:
      "Recomendo muito o trabalho da Hercília! Ela cuidou da minha avó por um período e sempre foi muito carinhosa, atenciosa e competente. É uma profissional de confiança, que realmente se preocupa com o bem-estar da pessoa que está cuidando. Recomendo de coração!",
  },
  // {
  //   n: "2",
  //   placeholder:
  //     "Espaço para o depoimento de um familiar sobre o cuidado no dia a dia e a comunicação com a equipe.",
  // },
  // {
  //   n: "3",
  //   placeholder:
  //     "Espaço para o depoimento de um familiar sobre a tranquilidade de saber que o seu familiar está bem acompanhado.",
  // },
];
