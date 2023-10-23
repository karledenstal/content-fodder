import jwt, { JWTOption, JWTPayloadSpec } from "@elysiajs/jwt";
import { Elysia, ValidationError, t } from "elysia";

import { PrismaClient } from "@prisma/client";

const db = new PrismaClient();
const jwtToken: JWTOption<string> = {
  name: "user",
  secret: "dragondigi90!",
};

export const routes = new Elysia({ prefix: "/organizations" })
  .use(jwt(jwtToken))
  .get("/", async ({ user }) => {
    // const userPayload = await user.verify();
    // if (!userPayload) throw new Error("Unauthorized");
    const org = await db.organization.findMany();
    return org;
  })
  .post(
    "/",
    async ({ body }) => {
      try {
        await db.organization.create({
          data: {
            org_name: body.org_name,
            created_at: new Date(),
            status: "ACTIVE",
            slug: body.org_name,
          },
        });

        return { message: `Organization '${body.org_name}' created` };
      } catch (e) {
        return e;
      }
    },
    {
      body: t.Object({
        org_name: t.String(),
      }),
    }
  );
