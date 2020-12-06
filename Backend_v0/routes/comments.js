const express = require("express");
const router = express.Router();
const Comment = require("../models/Comments");


// For Get

router.get("/", async (req, res) => {
    //res.send("This is Users Route");
    
    try{
        const comment = await Comment.find();
        res.json(comment);
    }
    catch(err) {
        res.json({message: err})
    }
});



router.post("/", (req,res) => {
    console.log(req.body);
    
    const post = new Comment({ 
        comment_id : req.body.comment_id,
        user_id : req.body.user_id,
        course_id : req.body.course_id,
        page : req.body.page,
        comment : req.body.comment,
        pending : req.body.pending
    });
    
    post.save()
        .then(data => {
            res.json(data);
        })
        .catch(err => {
            res.json({message: err})
        })
});


/*
// For Posts
router.post("/", (req, res) => {
    const post = new Post({
        title: req.body.title,
        body: req.body.body
    });

    post.save()
        .then(data => {
            res.json(data);
        })
        .catch(err => {
            res.json({message: err})
        })
})
*/
// For specific Users

router.get("/:Id", async (req, res) => {
    try{
        const specificComment = await Comment.findById(req.params.Id);
        res.json(specificComment);
    } catch(err) {
        res.json({message: err});
    }
})

// To delete Post

router.delete("/:Id", async(req, res) => {
    try{
        const deletedComment= await Comment.deleteOne({ _id: req.params.Id});
        res.json(deletedComment);
    } catch(err) {
        res.json({message: err});
    }
});


// To update the post

router.patch("/:Id", async(req, res) => {
    try{
        const updatedComment = await Comment.updateOne({ _id: req.params.Id}, {$set: {pending: req.body.pending}})
        res.json(updatedComment)
    } catch(err) {
            res.json({message: err});
        }
})


module.exports = router;