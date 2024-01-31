// Express router

const express = require('express');
const router = express.Router();
const Idea = require('../models/Idea');

// Get all ideas
router.get('/', async (req, res) => {
    try {
        const ideas = await Idea.find();
        res.json({success: true, data: ideas});
    } catch (error) {
        console.log(error);
        res.status(500).json({success: false, error: 'Something went wrong retrieving the data.'})
    }
});
  
// Get single idea
router.get('/:id', async (req, res) => {

    try {
        const idea = await Idea.findById(req.params.id);
        res.json({ success: true, data: idea});
    } catch (error) {
        console.log(error);
        res.status(500).json({success: false, error: "Something went wrong retrieving this idea."})
    }
});

// Create idea
router.post('/', async (req, res) => {
    const idea = new Idea ({
        text: req.body.text,
        tag: req.body.tag,
        username: req.body.username
    });

    try {
        const savedIdea = await idea.save();
        res.json({ success: true, data: savedIdea });
    } catch (error) {
        console.log(error);
        res.status(500).json({success: false, error: 'Something went wrong creating a new idea.'})
    }
});
  
// Update idea
router.put('/:id', async (req, res) => {
    try {
        const updatedIdea = await Idea.findByIdAndUpdate(
            req.params.id,
            {
                $set: {
                    text: req.body.text,
                    tag: req.body.tag
                }
            },
            { new: true } // If this idea doesn't exist, create a new one
        );
        res.json({success: true, data: updatedIdea});
    } catch (error) {
        console.log(error);
        res.status(500).json({success: false, error: "Something went wrong updating this idea."})
    }
});

// Delete idea
router.delete('/:id', async (req, res) => {
    try {
        await Idea.findByIdAndDelete(req.params.id);
        res.json({success: true, data: {}})
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, error: 'Idea could not be deleted.' });
    }
});

// Export router
module.exports = router;