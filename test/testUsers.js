const request = require('supertest')
const app = require('../app')
const { assert } = require('chai')
const userController = require('../controllers/userController')


describe('POST /auth', function () {
    it('se presiona el boton singup sin cargar informacion', function (done) {
        request(app)
            .post('/auth/signup')
            .send({})
            .expect(400)
            .end(function (err, res) {
                if (err) return done(err)
                return done()
            })
    })
    it('crea un nuevo usuario desde el formulario', function (done) {
        request(app)
            .post('/auth/signup')
            .send({
                name: "UserByTest",
                lastName: "Rocket",
                mail: "testUser112233@gmail.com",
                password: "testpassword123",
                photo: "testimage.jpg",
                country: "Spain",
                role: "admin",
                from: "form"
            })
            .expect(201, done)
    })
    it('el mismo usuario se registra desde google', function (done) {
        request(app)
            .post('/auth/signup')
            .send({
                name: "UserByTest",
                lastName: "Rocket",
                mail: "testUser112233@gmail.com",
                password: "testpassword123google",
                photo: "testimage.jpg",
                country: "Spain",
                role: "admin",
                from: "google"
            })
            .expect(201, done)
    })
    it('se inicia sesion desde el formulario', function (done) {
        request(app)
            .post('/auth/signin')
            .send({
                mail: "testUser112233@gmail.com",
                password: "testpassword123",
                from: "form"
            })
            .expect(200, done)
    })
    it('se inicia sesion desde google', function (done) {
        request(app)
            .post('/auth/signin')
            .send({
                mail: "testUser112233@gmail.com",
                password: "testpassword123google",
                from: "google"
            })
            .expect(200, done)
    })
    it('de desloguea', function (done) {
        request(app)
            .put('/auth/signout/testUser112233@gmail.com')
            .expect(200, done)
    })
})