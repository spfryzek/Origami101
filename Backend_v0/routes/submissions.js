const express = require("express");
const router = express.Router();
const Submission = require("../models/Submissions");


// For Get

router.get("/", async (req, res) => {
    //res.send("This is Users Route");
    
    try{
        const submission = await Submission.find();
        res.json(submission);
    }
    catch(err) {
        res.json({message: err})
    }
});



router.post("/", (req,res) => {
    console.log(req.body);
    
    const post = new Submission({ 
        submission_id : req.body.submission_id,
        user_id : req.body.user_id,
        course_id : req.body.course_id,
        page : req.body.page,
        submission : req.body.submission,
        pending : req.body.pending,
        grade : req.body.grade,
        justification : req.body.justification
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
        const specificSubmission = await Submission.findById(req.params.Id);
        res.json(specificSubmission);
    } catch(err) {
        res.json({message: err});
    }
})

// To delete Post

router.delete("/:Id", async(req, res) => {
    try{
        const deletedSubmission= await Submission.deleteOne({ _id: req.params.Id});
        res.json(deletedSubmission);
    } catch(err) {
        res.json({message: err});
    }
});


// To update the post

router.patch("/:Id", async(req, res) => {
    try{
        const updatedSubmission = await Submission.updateOne({ _id: req.params.Id}, {$set: {grade: req.body.grade}})
        res.json(updatedSubmission)
    } catch(err) {
            res.json({message: err});
        }
})


module.exports = router;