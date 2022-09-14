const request = require('supertest')
const app = require('../app')
const { assert } = require('chai')
const itineraryController = require('../controllers/itineraryController')



describe('GET /itineraries', function () {

    it('all the itinearies were brought, with 200 status code', function (done) {
        request(app)
            .get('/itineraries')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200, done)
    })

    it('you get the itineraries of a user', function (done) {
        request(app)
            .get('/itineraries/city/630ef554a3889f89c52ef42b')
            .set('Accept', 'application/json') // Header: para establecer la cabecera, datos de la peticion
            .expect('Content-Type', /json/) // req.body especificar que el contenido sea un json 
            .expect(200, done)
    })

})

describe('POST /itineraries', function () {
    it('new itinerary created, with 200 status code', function (done) {
        request(app)
            .post('/itineraries')
            .send({
                name: "TEST OF roma TEST",
                user: "6312d4360f07f1980c45cf3a",
                city: "630ef554a3889f89c52ef423", // roma
                price: "25",
                likes: [1],
                tags: [1],
                duration: "3",
            })
            .expect(201, done)
    })
})