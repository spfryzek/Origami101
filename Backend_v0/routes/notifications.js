const express = require("express");
const router = express.Router();
const Notification = require("../models/Notifications");


// For Get

router.get("/", async (req, res) => {
    //res.send("This is Users Route");
    
    try{
        const notification = await Notification.find();
        res.json(notification);
    }
    catch(err) {
        res.json({message: err})
    }
});



router.post("/", (req,res) => {
    console.log(req.body);
    
    const post = new Notification({ 
        notification_id : req.body.notification_id,
        user_id : req.body.user_id,
        notification : req.body.notification,
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
        const specificNotification = await Nv.findById(req.params.Id);
        res.json(specificNotification);
    } catch(err) {
        res.json({message: err});
    }
})

// To delete Post

router.delete("/:Id", async(req, res) => {
    try{
        const deletedNotification= await Notification.deleteOne({ _id: req.params.Id});
        res.json(deletedNotification);
    } catch(err) {
        res.json({message: err});
    }
});


// To update the post

router.patch("/:Id", async(req, res) => {
    try{
        const updatedNotification = await Notification.updateOne({ _id: req.params.Id}, {$set: {notification: req.body.notification}})
        res.json(updatedNotification)
    } catch(err) {
            res.json({message: err});
        }
})


module.exports = router;