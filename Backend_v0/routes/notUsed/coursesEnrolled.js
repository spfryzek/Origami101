const express = require("express");
const router = express.Router();
const CourseEnrolled = require("../models/CoursesEnrolled");


// For Get

router.get("/", async (req, res) => {
    //res.send("This is Users Route");
    
    try{
        const coursesEnrolled = await CourseEnrolled.find();
        res.json(coursesEnrolled);
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
    
    const post = new CourseEnrolled({ 
        enrolled_id : req.body.enrolled_id,
        user_id : req.body.user_id,
        course_id : req.body.course_id,
        date_enrolled: req.body.date_enrolled
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
        const specificCourseEnrolled = await CourseEnrolled.findById(req.params.Id);
        res.json(specificCourseEnrolled);
    } catch(err) {
        res.json({message: err});
    }
})

// To delete Post

router.delete("/:Id", async(req, res) => {
    try{
        const deletedCourseEnrolled= await CourseEnrolled.deleteOne({ _id: req.params.Id});
        res.json(deletedCourseEnrolled);
    } catch(err) {
        res.json({message: err});
    }
});


// To update the post

router.patch("/:Id", async(req, res) => {
    try{
        const updatedCourseEnrolled = await CourseEnrolled.updateOne({ _id: req.params.Id}, {$set: {course_name: req.body.course_name}})
        res.json(updatedCourseEnrolled)
    } catch(err) {
            res.json({message: err});
        }
})


module.exports = router;