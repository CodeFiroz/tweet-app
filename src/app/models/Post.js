import mongoose from 'mongoose';

const PostSchema = new mongoose.Schema({
  content: {
    type: String,
    required: true,
  },
});

export default mongoose.models.Post || mongoose.model('Post', PostSchema);