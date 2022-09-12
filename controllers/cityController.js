const City = require('../models/City')

const cityContoller = {
    create: async (req, res) => {
        const { city, country, photo, population, fundation, information } = req.body


        try {
           let cities = await new City(req.body).save() // req.body tiene que tener, todas las varibles descriptas
            res.status(201).json({
                message: 'city created',
                success: true,
                id: cities._id
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
        console.log(id)
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
        let startWith = { $regex: "^" + req.query.city, $options: 'i' + req.query.city }

        if (req.query.city) {
            query.city = req.query.city

            try {
                cities = await City.find({ city: startWith })
                res.json(cities)
            } catch (error) {
                console.log(error)
                res.status(500).json({
                    message: "server error",
                    success: false
                })
            }
        }
        else {
            try {
                cities = await City.find()
                res.json(cities)
            } catch (error) {
                console.log(error)
                res.status(500).json({
                    message: "server error",
                    success: false
                })
            }
        }

    },

    //funcion que elimina ciudades por la id
    remove: async (req, res) => {
        const { id } = req.params

        try {
            let city = await City.deleteOne({ _id: id })
            if (city) {
                res.status(200).json({
                    message: "the city was successfully deleted",
                    success: true
                })
            }
            else {
                res.status(404).json({
                    message: "city not found",
                    success: false
                })
            }
        }
        catch (error) {
            console.log(error)
            res.status(400).json({
                message: "error in delete this city",
                success: false
            })
        }
    },
    //function que modifica las ciudades exitentes
    update: async (req, res) => {
        const { id } = req.params
        const makeChanges = req.body

        try {
            let city = await City.updateOne({ _id: id }, makeChanges, { new: true })
            if (city) {
                res.status(201).json({
                    message: "the city was successfully modified",
                    success: true
                })
            }
            else {
                res.status(404).json({
                    message: "city not found",
                    success: false
                })
            }
        }
        catch (error) {
            console.log(error)
            res.status(400).json({
                message: "error modifying this city",
                success: false
            })
        }
    }
}

module.exports = cityContoller