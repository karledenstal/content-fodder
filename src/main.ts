import cookie from "@elysiajs/cookie";
import cors from "@elysiajs/cors";
import jwt, { JWTOption } from "@elysiajs/jwt";
import { Elysia } from "elysia";
import { routes as orgRoutes } from "./api/internal/organizations";
const version = 0.1;
const app = new Elysia();

const jwtToken: JWTOption<string> = {
  name: "user",
  secret: "dragondigi90!",
};

app
  .state("version", version)
  .use(cors())
  .use(jwt(jwtToken))
  .use(cookie())
  .get("/", ({ user }) => ({ hello: "Bun👋" }))
  .use(orgRoutes)
  .listen(1234);

console.log(`Listening on http://localhost:${app.server!.port}`);
