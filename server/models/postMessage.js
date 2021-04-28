import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
    user: String,
    creator: String,
    title: String,
    tags: String,
    selectedFile: String,
    likeCount: {
        type: Number,
        default: 0,
    },
    heartCount: {
        type: Number,
        default: 0,
    },
})

var PostMessage = mongoose.model('PostMessage', postSchema);

export default PostMessage;