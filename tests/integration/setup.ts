import * as chai from 'chai';
import { initServer } from 'src/server';

import * as http from 'http';
import * as sinon from 'sinon';
import * as supertest from 'supertest';

const SANDBOX: sinon.SinonSandbox = sinon.createSandbox();
const expect: Chai.ExpectStatic = chai.expect;
let request: supertest.SuperTest<supertest.Test>;

before(async () => {
  const app: http.Server = await initServer();
  request = supertest.agent(app);
});

afterEach(async () => {
  SANDBOX.restore();
});

export {
  sinon,
  supertest,
  request,
  SANDBOX,
  expect,
};
