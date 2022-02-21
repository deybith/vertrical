import { Module } from "@core/common";
import { SearchEngineController } from "./search.controller";

@Module({
  controllers: [SearchEngineController]
})
export class SearchEngineModule {}