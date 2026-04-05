import { Controller, Get } from "@nestjs/common";

@Controller("dashboard")
export class DashboardController {
  @Get("operational")
  operational() {
    return {
      openConversations: 128,
      awaitingHuman: 19,
      firstResponseAverageSeconds: 134,
      aiHandoffRate: 0.31
    };
  }
}

