const request = require('supertest');

const app = require('../src/app');

test('must respond at the root of the project', () => request(app).get('/').then((res) => {
  expect(res.status).toBe(200);
}));
