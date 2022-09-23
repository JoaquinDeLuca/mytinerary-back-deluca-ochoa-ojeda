const request = require('supertest')
const app = require('../app')
const { assert } = require('chai')
const commentsController = require('../controllers/commentsController')


describe('GET /comments', function () {

    it('I get all the comments', function (done){
        request(app)
            .get('/comments/itinerary/6319978b67afd67c3ab07744')
            .set('Accept', 'application/json')
            .expect(200, done)
    })

    it('I get comments for id', function (done){
        request(app)
            .get('/comments/631967f53783d803296ff8af')
            .set('Accept', 'application/json')
            .expect(200, done)
    })

})

describe('POST /comments', function () {

    it('new comment created', function (done){
        request(app)
            .post('/comments/')
            .send({
                    comment:"Test mocha",
                    user:"631668625d3aaaa3e377a656",
                    itinerary:"6319978b67afd67c3ab07744"
                })
            .expect(201, done)
    })
})


describe('PUT /comments', function () {

    it('edited comment', function (done){
        request(app)
            .put('/comments/632d6004d530882984b4c4b3')
            .send({
                    comment:"Test mocha EDITCOMMENT",
                    user:"631668625d3aaaa3e377a656",
                    itinerary:"6319978b67afd67c3ab07744"
                })
            .expect(201, done)
    })
})