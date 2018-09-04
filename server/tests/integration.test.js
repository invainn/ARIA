const request = require('supertest');
const app = require('../src/routes/app');

test('should pass test', (done) => {
    request(app)
        .get('/')
        .expect(200, { data: 'we did it' })
        .end(function(err, res) {
            if (err) return done(err);
            done();
        });
});