import dotenv from "dotenv";
if (process.env.NODE_ENV !== 'production') {
    dotenv.config();
}
import { server } from "@core/server";
import { AppModule } from "./modules";
import { nextAdapter } from "./adapters";

async function bootstrap() {
  const app = await server(AppModule,  {});
  app.adapter(await nextAdapter())
  await app.listen(3000);
}
bootstrap();