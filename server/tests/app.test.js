const request = require('supertest');
const casual = require('casual');
const app = require('../src/index');

describe('Test Account routes', () => {
    let token = '';
    let email = '';
    let password = '';

    test('Email should not exist', async () => {
        email = casual.email;

        const res = await request(app).post('/account/email').set('Accept', 'application/json')
        .send({
            email,
        })
        .expect(200)
        .expect('Content-Type', /json/);
    });

    test('Register should respond successfully', async () => {
        password = casual.password;

        const res = await request(app).post('/account/register').set('Accept', 'application/json')
        .send({
            "email": email,
            "password": password,
            "first_name": casual.first_name,
            "last_name": casual.last_name,
        })
        .expect(201)
        .expect('Content-Type', /html/);
    });

    test('Login should respond successfully', async () => {
        const res = await request(app).post('/account/login').set('Accept', 'application/json')
        .send({
            email,
            password,
        })
        .expect('Content-Type', /json/)
        .expect(200);

        token = res.body.token;
    });

    test('Token should be valid', async () => {
        const response = await request(app).post('/account/token').set('Authorization', `Bearer ${token}`)
        .expect(200)
        .expect('Content-Type', /json/);
    });

});

describe('Test payment routes', () => {
    let token = '';

    beforeAll(async (done) => {
        const res = await request(app).post('/account/login').set('Accept', 'application/json')
        .send({
            email: 'admin@nnmta.org',
            password: 'admin'
        });

        token = res.body.token;
        done();
    });

    test('Should return token for starting payment', async () => {
        const res = await request(app).get('/payment/token').set('Authorization', `Bearer ${token}`)
        .expect(200)
    });
});