import chai, { expect } from 'chai';
import { Db } from '@business/adapters';
import chaiHttp from 'chai-http';

chai.should();
chai.use(chaiHttp);



describe('Testing prisma adapter', () => {
  it('Find users', async function() {
    this.timeout(15000);
    const page = await Db.page.findMany()
    expect(page).to.be.an('array');
  })
})