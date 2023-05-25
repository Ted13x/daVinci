import mongoose from 'mongoose';
const { Schema } = mongoose;

const ThemeSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    colorScheme: {
        primary: String,
        secondary: String,
        accent: String,
        text: String,
    },
    font: String,
});

export default mongoose.model('Theme', ThemeSchema);
