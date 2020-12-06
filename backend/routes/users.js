const express = require("express");
const router = express.Router();
const User = require("../models/Users");


// For Get

router.get("/", async (req, res) => {
    //res.send("This is Users Route");
    
    try{
        const users = await User.find();
        res.json(users);
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
    
    const post = new User({ 
        user_id : req.body.user_id,
        first_name : req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
        passwordHash: req.body.passwordHash,
        user_type: req.body.user_type,
        interests: req.body.interests,
        available: req.body.available,
        inappropriateActivity: req.body.inappropriateActivity
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
        const specificUser = await User.findById(req.params.Id);
        res.json(specificUser);
    } catch(err) {
        res.json({message: err});
    }
})

// To delete Post

router.delete("/:Id", async(req, res) => {
    try{
        const deletedUser= await User.deleteOne({ _id: req.params.Id});
        res.json(deleteduser);
    } catch(err) {
        res.json({message: err});
    }
});


// To update the post

router.patch("/:Id", async(req, res) => {
    try{
        const updatedUser = await User.updateOne({ _id: req.params.Id}, {$set: {first_name: req.body.first_name}})
        res.json(updatedUser)
    } catch(err) {
            res.json({message: err});
        }
})


module.exports = router;