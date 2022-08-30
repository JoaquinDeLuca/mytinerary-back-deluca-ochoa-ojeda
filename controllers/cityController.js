const City = require('../models/City')

const cityContoller = {
    create: async(req,res) => {
        const {city,country,photo,population,fundation} = req.body
        try {
            await new City(req.body).save() // req.body tiene que tener, todas las varibles descriptas
            res.status(201).json({
                message: 'city created',
                success: true
            })
        } catch(error){
            res.status(400).json({
                message: "could't create city",
                success: false
            })


        }
    }
}

module.exports = cityContoller