import { Body, Controller, Get, Post } from "@nestjs/common";

type LoginDto = {
  email: string;
  senha: string;
};

@Controller("auth")
export class AuthController {
  @Post("login")
  login(@Body() body: LoginDto) {
    return {
      access_token: "bootstrap-token",
      user: {
        id: "user-bootstrap",
        email: body.email,
        perfil: "admin"
      }
    };
  }

  @Get("me")
  me() {
    return {
      id: "user-bootstrap",
      nome: "Administrador Inicial",
      perfil: "admin"
    };
  }
}

