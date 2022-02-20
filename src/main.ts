import dotenv from "dotenv";
if (process.env.NODE_ENV !== 'production') {
    dotenv.config();
}
import { server } from "@core/server";
import { AppModule } from "./modules";

async function bootstrap() {
  const app = await server(AppModule,  {});
  await app.listen(3000);
}
bootstrap();