const { assert } = require('chai')
const request = require('supertest')
const app = require('../app')

describe('POST /cities', function () {

    it('Must respond with the id', function (done) {
        request(app)
            .post('/cities')
            .send({
                city: "Test",
                country: "spain",
                photo: "http://localHost:400/images",
                population: "16433",
                fundation: "1550",
                information: " es muy lindo "
            })
            .then(response => {
                assert.isString(response.body.id)
                done()
            })
    })

    it('Must respond with 201 status code', function (done) {
        request(app)
            .post('/cities')
            .send({
                city: "Test",
                country: "spain",
                photo: "http://localHost:400/images",
                population: "16433",
                fundation: "1550",
                information: " es muy lindo "
            })
            .expect(201, done)
    })

    it('Must respond with 400 status code', function (done) {
        request(app)
            .post('/cities')
            .send({})
            .expect(400)
            .end(function (err, res) {
                if (err) return done(err)
                return done()
            })
    })
})