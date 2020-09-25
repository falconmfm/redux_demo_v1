const request = require('supertest')
const app = require('../app');
beforeEach(() => {
    console.log('beforeEach')
})
afterEach(() => {
    console.log('AfterEach')
})

test('Should get Hello World',async () => {
    await request(app)
    .get('/')
    .expect("Hello, World;");
});


test('Should get a token verification', async () => {
    await request(app).post('/destination')
    .send({
        token: 'test'
    })
    .expect(200);
})
