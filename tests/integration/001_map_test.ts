// tslint:disable:arrow-return-shorthand
// tslint:disable:max-func-body-length
// tslint:disable:no-big-function
// tslint:disable:no-duplicate-string
// tslint:disable:no-unused
// tslint:disable:no-identical-functions
// tslint:disable:max-line-length
import {
  expect,
  request,
  SANDBOX,
  sinon,
} from './setup';

describe('/api/map Tests', (): void => {

  describe('POST /api/map/play', (): void => {

    it('should return 200 and return dead outcome', async () => {
      return request
       .post('/api/map/play')
       .send({
         movements: 'e,n,n',
       })
       .set('Content-Type', 'application/json')
       .set('Accept', 'application/json')
       .then(async (res) => {
         expect(res.status).to.equal(200);
         expect(res.body).to.deep.equal({ outcome: 'dead' });
       });
    });

    it('should return 200 and return not_found outcome', async () => {
      return request
       .post('/api/map/play')
       .send({
         movements: 'n,s,e',
       })
       .set('Content-Type', 'application/json')
       .set('Accept', 'application/json')
       .then(async (res) => {
         expect(res.status).to.equal(200);
         expect(res.body).to.deep.equal({ outcome: 'not_found' });
       });
    });

    it('should return 200 and return not_found outcome (back to original position F)', async () => {
      return request
       .post('/api/map/play')
       .send({
         movements: 's,n',
       })
       .set('Content-Type', 'application/json')
       .set('Accept', 'application/json')
       .then(async (res) => {
         expect(res.status).to.equal(200);
         expect(res.body).to.deep.equal({ outcome: 'not_found' });
       });
    });

    it('should return 200 and return out outcome', async () => {
      return request
       .post('/api/map/play')
       .send({
         movements: 'w',
       })
       .set('Content-Type', 'application/json')
       .set('Accept', 'application/json')
       .then(async (res) => {
         expect(res.status).to.equal(200);
         expect(res.body).to.deep.equal({ outcome: 'out' });
       });
    });

    it('should return 200 and return out outcome', async () => {
      return request
       .post('/api/map/play')
       .send({
         movements: 's,s,s,s,s',
       })
       .set('Content-Type', 'application/json')
       .set('Accept', 'application/json')
       .then(async (res) => {
         expect(res.status).to.equal(200);
         expect(res.body).to.deep.equal({ outcome: 'out' });
       });
    });

    it('should return 200 and return destroyed outcome', async () => {
      return request
       .post('/api/map/play')
       .send({
         movements: 'e,e,n,e,e,n,e,e,n,n,e',
       })
       .set('Content-Type', 'application/json')
       .set('Accept', 'application/json')
       .then(async (res) => {
         expect(res.status).to.equal(200);
         expect(res.body).to.deep.equal({ outcome: 'destroyed' });
       });
    });

    it('should return 400 BAD Request for invalid commands (aben,s)', async () => {
      return request
       .post('/api/map/play')
       .send({
         movements: 'abe',
       })
       .set('Content-Type', 'application/json')
       .set('Accept', 'application/json')
       .expect(400);
    });

    it('should return 400 BAD Request for invalid commands (n,)', async () => {
      return request
       .post('/api/map/play')
       .send({
         movements: 'n,',
       })
       .set('Content-Type', 'application/json')
       .set('Accept', 'application/json')
       .expect(400);
    });

    it('should return 400 BAD Request for no body parameters', async () => {
      return request
       .post('/api/map/play')
       .set('Content-Type', 'application/json')
       .set('Accept', 'application/json')
       .expect(400);
    });
  });

});
