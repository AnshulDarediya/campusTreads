import express from 'express';
import Tweet from '../models/Tweet.js';
import authenticate from '../middleware/authenticate.js';

const router = express.Router();

router.post('/', authenticate, async (req, res) => {
  const { text, mediaUrl } = req.body;
  const userId = req.user.userId;
  try {
    const tweet = new Tweet({ user: userId, text, mediaUrl });
    await tweet.save();
    res.status(201).send(tweet);
  } catch (error) {
    res.status(400).send(error);
  }
});

router.get('/', authenticate, async (req, res) => {
  const { university } = req.query;
  try {
    let tweets;
    if (university) {
      tweets = await Tweet.find().populate({
        path: 'user',
        match: { university }
      }).exec();
    } else {
      tweets = await Tweet.find().populate('user').exec();
    }
    tweets = tweets.filter(tweet => tweet.user !== null);
    res.send(tweets);
  } catch (error) {
    res.status(400).send(error);
  }
});

router.patch('/:tweetId/reactions', authenticate, async (req, res) => {
  const { tweetId } = req.params;
  const { reactionType } = req.body;
  try {
    const tweet = await Tweet.findById(tweetId);
    if (!tweet) return res.status(404).send('Tweet not found');

    if (tweet.reactions[reactionType] !== undefined) {
      tweet.reactions[reactionType] += 1;
      await tweet.save();
      res.send(tweet);
    } else {
      res.status(400).send('Invalid reaction type');
    }
  } catch (error) {
    res.status(400).send(error);
  }
});

export default router;