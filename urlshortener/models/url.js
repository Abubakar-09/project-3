import mongoose from 'mongoose';

const UrlSchema = new mongoose.Schema({
  url: {
    type: String,
    required: true,
  },
  customUrl: {
    type: String,
    required: true,
    unique: true, // Ensures no duplicate custom URLs
  },
}, { timestamps: true }); // Automatically adds `createdAt` and `updatedAt` fields

export default mongoose.model('Url', UrlSchema);
