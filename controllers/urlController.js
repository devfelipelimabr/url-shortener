import URL from '../models/URL.js';
import { nanoid } from 'nanoid';

// Função para encurtar uma URL
export const shortenURL = async (req, res) => {
    const { originalURL } = req.body;
    const shortURL = nanoid(6);

    try {
        const newURL = new URL({ originalURL, shortURL });
        await newURL.save();
        res.status(201).json({ shortURL });
    } catch (error) {
        res.status(500).json({ error: 'Erro ao encurtar a URL' });
    }
};

// Função para redirecionar para a URL original
export const redirectURL = async (req, res) => {
    const { shortURL } = req.params;

    try {
        const url = await URL.findOne({ shortURL });
        if (url) {
            url.clicks++;
            await url.save();
            return res.redirect(url.originalURL);
        }
        res.status(404).json({ error: 'URL não encontrada' });
    } catch (error) {
        res.status(500).json({ error: 'Erro ao redirecionar a URL' });
    }
};
