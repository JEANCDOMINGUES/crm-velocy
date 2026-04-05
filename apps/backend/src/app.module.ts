import { Module } from "@nestjs/common";
import { HealthController } from "./health.controller";
import { AuthModule } from "./modules/auth/auth.module";
import { ConversationsModule } from "./modules/conversations/conversations.module";
import { DashboardModule } from "./modules/dashboard/dashboard.module";
import { IntegrationsModule } from "./modules/integrations/integrations.module";

@Module({
  imports: [AuthModule, ConversationsModule, DashboardModule, IntegrationsModule],
  controllers: [HealthController]
})
export class AppModule {}

