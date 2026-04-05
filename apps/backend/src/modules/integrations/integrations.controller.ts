import { Body, Controller, Post } from "@nestjs/common";

type WhatsAppWebhookPayload = {
  entry?: unknown[];
};

type TriageResultPayload = {
  conversationId: string;
  intent: string;
  summary: string;
  confidence: number;
  requiresHuman: boolean;
};

@Controller()
export class IntegrationsController {
  @Post("webhooks/whatsapp")
  receiveWhatsApp(@Body() payload: WhatsAppWebhookPayload) {
    return {
      accepted: true,
      provider: "whatsapp",
      receivedEntries: payload.entry?.length ?? 0
    };
  }

  @Post("internal/ai/triage-result")
  receiveTriageResult(@Body() payload: TriageResultPayload) {
    return {
      accepted: true,
      conversationId: payload.conversationId,
      nextStatus: payload.requiresHuman ? "aguardando_humano" : "aguardando_cliente"
    };
  }
}

