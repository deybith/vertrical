import { Module } from '@core/common';
import { SearchEngineModule } from './search-engine'

@Module({
  imports: [SearchEngineModule],
})
export class AppModule {}
