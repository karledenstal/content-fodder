import { Elysia } from 'elysia';

const app = new Elysia().get('/', () => ({ hello: 'Bun👋' })).listen(1234);

console.log(`Listening on http://localhost:${app.server!.port}`);
