import express from 'express';
import Comment from '../models/Comment.js';
import authenticate from '../middleware/authenticate.js';

const router = express.Router();

router.post('/:tweetId', authenticate, async (req, res) => {
  const { tweetId } = req.params;
  const { text } = req.body;
  const userId = req.user.userId;
  try {
    const comment = new Comment({ user: userId, tweet: tweetId, text });
    await comment.save();
    res.status(201).send(comment);
  } catch (error) {
    res.status(400).send(error);
  }
});

export default router;