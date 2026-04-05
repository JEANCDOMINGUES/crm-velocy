export type ConversationStatus =
  | "nova"
  | "em_triagem_ia"
  | "aguardando_humano"
  | "em_atendimento_humano"
  | "aguardando_cliente"
  | "encerrada";

export type Channel = "whatsapp" | "facebook" | "instagram" | "email";

export type ConversationSummary = {
  id: string;
  customerName: string;
  channel: Channel;
  queue: string;
  status: ConversationStatus;
  lastMessage: string;
};

export const mockConversation: ConversationSummary = {
  id: "conv_bootstrap_001",
  customerName: "Clinica Horizonte",
  channel: "whatsapp",
  queue: "Financeiro",
  status: "aguardando_humano",
  lastMessage: "Preciso da segunda via do boleto de abril."
};

