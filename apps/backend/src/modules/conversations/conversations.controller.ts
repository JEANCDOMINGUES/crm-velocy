import { Body, Controller, Get, Param, Patch, Post } from "@nestjs/common";
import { ConversationStatus, mockConversation } from "@crm-velocy/shared";

@Controller("conversations")
export class ConversationsController {
  @Get()
  list() {
    return {
      items: [mockConversation]
    };
  }

  @Get(":id")
  detail(@Param("id") id: string) {
    return {
      ...mockConversation,
      id
    };
  }

  @Patch(":id/status")
  updateStatus(@Param("id") id: string, @Body() body: { status: ConversationStatus }) {
    return {
      id,
      status: body.status
    };
  }

  @Post(":id/assign")
  assign(
    @Param("id") id: string,
    @Body() body: { filaId?: string; equipeId?: string; usuarioId?: string }
  ) {
    return {
      id,
      assignment: body
    };
  }
}

