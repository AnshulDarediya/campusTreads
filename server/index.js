import express from 'express';
import connectDB from './config/db.js';
import userRoutes from './routes/userRoutes.js';
import tweetRoutes from './routes/tweetRoutes.js';
import commentRoutes from './routes/commentRoutes.js';

const app = express();
const port = 3000;

app.use(express.json());

connectDB();

app.use('/api/users', userRoutes);
app.use('/api/tweets', tweetRoutes);
app.use('/api/comments', commentRoutes);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});