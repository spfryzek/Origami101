const express = require("express");
const router = express.Router();
const CourseHistory2 = require("../models/CoursesHistory2");


// For Get

router.get("/", async (req, res) => {
    //res.send("This is Users Route");
    
    try{
        const coursesHistory2 = await CourseHistory2.find();
        res.json(coursesHistory2);
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
    
    const post = new CourseHistory2({ 
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
        const specificCourseHistory2 = await CourseHistory2.findById(req.params.Id);
        res.json(specificCourseHistory2);
    } catch(err) {
        res.json({message: err});
    }
})

// To delete Post

router.delete("/:Id", async(req, res) => {
    try{
        const deletedCourseHistory2= await CourseHistory2.deleteOne({ _id: req.params.Id});
        res.json(deletedCourseHistory2);
    } catch(err) {
        res.json({message: err});
    }
});


// To update the post

router.patch("/:Id", async(req, res) => {
    try{
        const updatedCourseHistory2 = await CourseHistory2.updateOne({ _id: req.params.Id}, {$set: {date_completed: req.body.date_completed}})
        res.json(updatedCourseHistory2)
    } catch(err) {
            res.json({message: err});
        }
})


module.exports = router;