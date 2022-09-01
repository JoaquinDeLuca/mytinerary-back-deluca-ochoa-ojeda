const City = require('../models/City')

const cityContoller = {
    create: async (req, res) => {
        const { city, country, photo, population, fundation } = req.body
        try {
            await new City(req.body).save() // req.body tiene que tener, todas las varibles descriptas
            res.status(201).json({
                message: 'city created',
                success: true
            })
        } catch (error) {
            res.status(400).json({
                message: "could't create city",
                success: false
            })


        }
    },
    read: async (req, res) => {
        const { id } = req.params
        try {
            let city = await City.findOne({ _id: id })

            if (city) {
                res.status(200).json({
                    message: 'you get one city',
                    response: city,
                    success: true
                })
            } else {
                res.status(404).json({
                    message: "could't find city",
                    success: false
                })
            }

        } catch (error) {
            console.log(error)
            res.status(400).json({
                message: "error",
                success: false
            })
        }
    },
    all: async (req, res) => {
        let cities
        let query = {}
        let startWidth = { $regex: "^" + req.query.city, $options: 'i' + req.query.city }

        if (req.query.city) {
            query.city = req.query.city
        }
        try {
            cities = await City.find({ city: startWidth })
            res.json(cities)
        } catch (error) {
            console.log(error)
            res.status(500).json({
                message: "server error",
                success: false
            })
        }

    }

}

module.exports = cityContoller