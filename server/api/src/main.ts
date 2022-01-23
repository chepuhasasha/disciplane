import { App } from "./app";
import { LoggerService } from "./logger/logger.servece";

async function bootstrap() {
  const app = new App(new LoggerService());
  await app.init();
}

bootstrap();
