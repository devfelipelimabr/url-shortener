import express from 'express';
import { shortenURL, redirectURL } from '../controllers/urlController.js';

const router = express.Router();

router.post('/shorten', shortenURL);
router.get('/:shortURL', redirectURL);

export default router;
