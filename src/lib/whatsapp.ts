const PHONE = "5532991080730";

export const PHONE_DISPLAY = "(32) 99108-0730";
export const PHONE_TEL = "+5532991080730";

export function waLink(message: string) {
  return `https://wa.me/${PHONE}?text=${encodeURIComponent(message)}`;
}

export const waContato = waLink(
  "Olá! Encontrei o site do Residencial Sênior Vovó Nice e gostaria de mais informações."
);

export const waVisita = waLink(
  "Olá! Gostaria de agendar uma visita ao Residencial Sênior Vovó Nice."
);
