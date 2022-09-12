const User = require('../models/User')

const userController = {
    create: async (req, res) => {
        try {
            await new User(req.body).save()
            res.status(201).json({
                message: 'user created',
                succes: true
            })
        }
        catch (error) {
            res.status(400).json({
                message: "couldn't create user",
                succes: false
            })
        }
    }
}

module.exports = userController