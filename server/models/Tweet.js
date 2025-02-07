import mongoose from 'mongoose';

const tweetSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  text: { type: String, required: true },
  mediaUrl: String,
  createdAt: { type: Date, default: Date.now },
  reactions: {
    like: { type: Number, default: 0 },
    love: { type: Number, default: 0 },
    haha: { type: Number, default: 0 },
    wow: { type: Number, default: 0 },
    sad: { type: Number, default: 0 },
    angry: { type: Number, default: 0 }
  }
});

const Tweet = mongoose.model('Tweet', tweetSchema);

export default Tweet;