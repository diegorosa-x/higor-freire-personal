import { InPersonPlan, PricingInPersonCopy } from "./types";

export const PRICING_IN_PERSON_COPY = {
  sectionId: "presencial",
  titlePrefix: "Acompanhamento",
  titleHighlight: "Presencial",
  description:
    "Escolha a forma de pagamento e a frequência semanal. Quanto maior o compromisso, melhor o valor por aula.",
  featuredBadge: "MAIS POPULAR",
  buttonLabel: "Escolher",
  quote: '"Consistência no treino gera resultado. Compromisso gera vantagem."',
  perks: ["Supervisão direta", "Ajustes técnicos", "Material exclusivo"],
  whatsappTextPrefix: "Olá Higor, quero saber mais sobre o",
} satisfies PricingInPersonCopy;

export const IN_PERSON_PLANS: readonly InPersonPlan[] = [
  {
    id: "monthly",
    name: "Plano Mensal",
    description: "Melhor custo-benefício pagando o mês fechado.",
    featured: true,
    billingType: "monthly",
    ratePerClass: 45,

    promo:
      "🎁 Indique um amigo no plano mensal e ganhe 1 semana de aulas grátis.", 

    options: [
      {
        label: "2x/sem (8 aulas)",
        classesPerMonth: 8,
        fullValue: 360,
        disabled: true, // sem desconto
      },
      {
        label: "3x/sem (13 aulas)",
        classesPerMonth: 13,
        fullValue: 600,
      },
      {
        label: "4x/sem (16 aulas)",
        classesPerMonth: 16,
        fullValue: 800,
        discountedValue: 720,
      },
      {
        label: "5x/sem (20 aulas)",
        classesPerMonth: 20,
        fullValue: 1000,
        discountedValue: 900,
      },
    ],
  },
  {
    id: "weekly",
    name: "Plano Semanal",
    description: "Mais flexível, pagamento semanal.",
    billingType: "weekly",
    ratePerClass: 50,
    options: [
      { label: "2x/sem (8 aulas)", classesPerMonth: 8, fullValue: 400 },
      { label: "3x/sem (12 aulas)", classesPerMonth: 12, fullValue: 600 },
      { label: "4x/sem (16 aulas)", classesPerMonth: 16, fullValue: 800 },
      { label: "5x/sem (20 aulas)", classesPerMonth: 20, fullValue: 1000 },
    ],
  },
];
