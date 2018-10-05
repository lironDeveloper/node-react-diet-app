const expect = require('expect');
const request = require('supertest');

var {app} = require('./../server');

it('sadf', (done) => {
    request(app)
        .get('/')
        .expect(200)
        .end(() => {
            return done();
        });
});