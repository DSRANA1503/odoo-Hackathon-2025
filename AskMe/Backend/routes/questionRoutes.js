const express = require('express');
const router  = express.Router();
const Question = require('../models/Question');


router.post('/ask', async (req, res) => {
  try {
    const { title, description, tags = [] } = req.body;

    if (!title || !description) {
      return res.status(400).json({ message: 'Title and description are required.' });
    }

    const newQuestion = await Question.create({ title, description, tags });
    return res.status(201).json(newQuestion);     // success!
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: 'Unable to save question.' });
  }
});

module.exports = router;