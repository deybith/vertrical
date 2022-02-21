import { Module } from '@core/common';
import { SearchEngineModule } from './search-engine'

@Module({
  path: '/api/v1',
  imports: [SearchEngineModule],
})
export class AppModule {}
