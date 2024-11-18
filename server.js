import 'dotenv/config'; // Importa e configura o dotenv automaticamente
import express from 'express';
import connectDB from './config/database.js';
import urlRoutes from './routes/urlRoutes.js';

const app = express();

// Conecte ao MongoDB
await connectDB();

// Middleware
app.use(express.json());

// Rotas
app.use('/api', urlRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
