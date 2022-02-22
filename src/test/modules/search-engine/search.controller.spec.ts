import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import { SearchEngineController } from '@business/modules/search-engine/search.controller';

chai.should();
chai.use(chaiHttp);



describe('Testing controller', () => {
  it('Search controller', async function() {
    this.timeout(15000);
    console.log(SearchEngineController, 'SearchEngineController')
  })
})