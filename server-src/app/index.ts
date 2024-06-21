import Koa from 'koa';
import { loggerServer } from '../libs/loggers';
import middleware from '../middleware';
import '../shared/utils/dotenv';
import cors from '@koa/cors';

const app = new Koa();


// Настройка CORS
app.use(cors({
  origin: '*', // Разрешить все домены. Измените на свой домен для повышения безопасности
  allowMethods: ['GET', 'POST', 'PUT', 'DELETE'], // Разрешенные методы
  allowHeaders: ['Content-Type', 'Authorization'], // Разрешенные заголовки
}));


app.use(async (ctx, next) => {
  try {
    await next();
  }
  catch (err) {
    loggerServer.error(`[Server]: ${JSON.stringify(err)}`); // (err, null, 2)}`);

    if (err.status) {
      ctx.status = err.status;
      ctx.body   = {error: err.message};
    }
    else {
      console.error(err);
      ctx.status = 500;
      ctx.body   = {error: 'Internal server error'};
    }
  }
});

middleware(app);

export default app;
