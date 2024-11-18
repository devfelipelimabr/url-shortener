import express from 'express';
import { shortenURL, redirectURL, getStats } from '../controllers/urlController.js';

const router = express.Router();

router.post('/shorten', shortenURL); // POST /api/shorten para encurtar URL
router.get('/:shortURL', redirectURL); // GET /:shortURL para redirecionar
router.get('/stats/:shortURL', getStats); // GET /stats/:shortURL para obter estatísticas

export default router;
