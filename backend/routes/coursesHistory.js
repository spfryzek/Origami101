const express = require("express");
const router = express.Router();
const CourseHistory = require("../models/CoursesHistory");


// For Get

router.get("/", async (req, res) => {
    //res.send("This is Users Route");
    
    try{
        const coursesHistory = await CourseHistory.find();
        res.json(coursesHistory);
    }
    catch(err) {
        res.json({message: err})
    }
});
/*
router.get("/", (req, res) => {
    res.send("This is Posts Route");
});

router.get("/scrub", (req, res) => {
    res.send("This is Scrub Route");
});*/

/*
router.post("/", (req, res) => {
    console.log(req.body);
    //res.send("This is Posts Route");
});*/


router.post("/", (req,res) => {
    console.log(req.body);
    
    const post = new CourseHistory({ 
        history_id : req.body.history_id,
        user_id : req.body.user_id,
        course_id : req.body.course_id,
        date_enrolled: req.body.date_enrolled,
        date_completed: req.body.date_completed,
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
        const specificCourseHistory = await CourseHistory.findById(req.params.Id);
        res.json(specificCourseHistory);
    } catch(err) {
        res.json({message: err});
    }
})

// To delete Post

router.delete("/:Id", async(req, res) => {
    try{
        const deletedCourseHistory= await CourseHistory.deleteOne({ _id: req.params.Id});
        res.json(deletedCourseHistory);
    } catch(err) {
        res.json({message: err});
    }
});


// To update the post

router.patch("/:Id", async(req, res) => {
    try{
        const updatedCourseHistory = await CourseHistory.updateOne({ _id: req.params.Id}, {$set: {date_completed: req.body.date_completed}})
        res.json(updatedCourseHistory)
    } catch(err) {
            res.json({message: err});
        }
})


module.exports = router;