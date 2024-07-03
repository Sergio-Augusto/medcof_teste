import express from 'express';
import authRoutes from './routes/auth.routes';
import setupSwagger from './swagger';

const app = express();
app.use(express.json());

setupSwagger(app);

app.get('/', (req, res) => {
  res.send('API is running');
});

app.use('/api/auth', authRoutes);

export default app;
