import { Module } from '@core/common';
import { SearchEngineModule } from './search-engine'

@Module({
  path: '/api',
  imports: [SearchEngineModule],
})
export class AppModule {}
