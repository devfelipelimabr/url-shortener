import mongoose from 'mongoose';

const URLSchema = new mongoose.Schema({
    originalURL: { type: String, required: true },
    shortURL: { type: String, required: true, unique: true },
    clicks: { type: Number, default: 0 },
    createdAt: { type: Date, default: Date.now },
});

const URL = mongoose.model('URL', URLSchema);
export default URL;
