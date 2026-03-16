import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import { streamsRouter } from './routes/streams.js';
import { dropsRouter } from './routes/drops.js';
import { chatRouter } from './routes/chat.js';
import { creatorsRouter } from './routes/creators.js';

const app = express();
const PORT = parseInt(process.env.PORT || '3002', 10);

app.use(cors({
  origin: process.env.CLIENT_URL || 'http://localhost:5182',
  credentials: true,
}));
app.use(express.json());

// Health check
app.get('/api/health', (_req, res) => {
  res.json({ status: 'ok', service: 'since12-api', timestamp: new Date().toISOString() });
});

// Routes
app.use('/api/streams', streamsRouter);
app.use('/api/drops', dropsRouter);
app.use('/api/chat', chatRouter);
app.use('/api/creators', creatorsRouter);

app.listen(PORT, () => {
  console.log(`SINCE12 API running on port ${PORT}`);
});

export default app;
