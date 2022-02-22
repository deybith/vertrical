import chai, { expect } from 'chai';
import { nextAdapter } from '@business/adapters';
import chaiHttp from 'chai-http';

chai.should();
chai.use(chaiHttp);



describe('Testing http adapter', () => {
  it('Next adapter', async function() {
    this.timeout(15000);
    const nextAdap = await nextAdapter()
    const res = await chai.request(nextAdap)
    .get('/')
    .send();

    expect(res.status).to.equal(200);
  })
})