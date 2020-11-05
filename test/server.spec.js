const supertest = require('supertest');

const request = supertest('http://localhost:3333');

test('Must respond on port 3333', () => request.get('/').then((res) => expect(res.status).toBe(200)));
