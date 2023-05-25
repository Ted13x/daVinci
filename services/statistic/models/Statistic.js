import mongoose from 'mongoose';
const { Schema } = mongoose;


const StatisticsSchema = new Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    date: {
        type: Date,
        default: Date.now,
    },
    pageViews: {
        type: Number,
        default: 0,
    },
    cartActivities: {
        type: Number,
        default: 0,
    },
    ordersPlaced: {
        type: Number,
        default: 0,
    },
});

export default mongoose.model('Statistics', StatisticsSchema);
