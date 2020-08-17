const mongoose = require('mongoose');
const StorySchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Story title is required'],
        unique: [true, 'Story already exists'],
        trim: true,
        maxlength: [40, 'Story title cannot be more than 40 characters']
    },
    description: {
        type: String,
        required: [true, 'Story description is required'],
        trim: true,
        maxlength: [200, 'Story description cannot be more than 40 characters']
    }
});

module.exports = mongoose.models.Story || mongoose.model('Story', StorySchema);