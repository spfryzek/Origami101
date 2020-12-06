const express = require("express");
const router = express.Router();
const Course = require("../models/Courses");


// For Get

router.get("/", async (req, res) => {
    //res.send("This is Users Route");
    
    try{
        const courses = await Course.find();
        res.json(courses);
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
    
    const post = new Course({ 
        course_id : req.body.course_id,
        course_name : req.body.course_name,
        course_level: req.body.course_level,
        available: req.body.available
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
        const specificCourse = await Course.findById(req.params.Id);
        res.json(specificCourse);
    } catch(err) {
        res.json({message: err});
    }
})

// To delete Post

router.delete("/:Id", async(req, res) => {
    try{
        const deletedCourse= await Course.deleteOne({ _id: req.params.Id});
        res.json(deletedCourse);
    } catch(err) {
        res.json({message: err});
    }
});


// To update the post

router.patch("/:Id", async(req, res) => {
    try{
        const updatedCourse = await Course.updateOne({ _id: req.params.Id}, {$set: {course_name: req.body.course_name}})
        res.json(updatedCourse)
    } catch(err) {
            res.json({message: err});
        }
})


module.exports = router;