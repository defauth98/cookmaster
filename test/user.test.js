const request = require("supertest");
const { disconnectDB } = require("../src/api/models/connection");

const app = require('../src/api/app');
const server = require('../src/api/server')

describe('POST /users', function() {
  afterAll(() => {
    disconnectDB();
    server.close();
  });

  it('Return 201 when user are created', function(done) {
    request(app)
      .post('/users')
      .set('Accept', 'application/json')
      .send({
        "name":"user",
        "email":"user2@mail.com",
        "password":"password",
        "role":"admin" 
      })
      .expect('Content-Type', /json/)
      .expect(201, done);
  });

  it('Return 400 when users info are invalid', function(done) {
    request(app)
      .post('/users')
      .set('Accept', 'application/json')
      .send({
        "name":"user",
      })
      .expect('Content-Type', /json/)
      .expect(400, done);
  });
});