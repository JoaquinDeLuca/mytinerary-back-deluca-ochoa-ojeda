const Comment = require('../models/Comment')

const commentsController = {
    create: async (req,res)=>{
        try{
            await new Comment(req.body).save()
            res.status(201).json({
                message: "new comment created",
                success: true
            })
        } 
        catch(error){
            console.log(error)
            res.status(400).json({
                message: "couldn't create comment",
                success: false
            })
        }
    },
    readComment: async (req,res)=>{
        const {id} = req.params
        try{
            let comment = await Comment.find({itinerary: id})
            .populate('user',{name:1, photo:1})
            .populate('itinerary',{name:1, city:1} )
            if(comment){
                res.status(200).json({
                    menssagge: 'you get a comment',
                    response: comment,
                    success: true
                })
            } else {
                res.status(404).json({
                    menssagge: "couldn't get a comment ",
                    success: false
                })
            }
        }catch(error){
            console.log(error)
            res.status(500).json({
                message:"error",
                success: false
            })
        }
    }
}

module.exports = commentsController