import { Module } from "@core/common";
import { SearchEngineController } from "./search-module.controller";

@Module({
  controllers: [SearchEngineController]
})
export class SearchEngineModule {}