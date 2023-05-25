import mongoose from 'mongoose';
const { Schema } = mongoose;

const PriceSchema = new Schema({
    value: {
        type: Number,
        required: true,
    },
    startDate: {
        type: Date,
        required: true,
    },
    endDate: {
        type: Date,
    },
    customerType: {
        type: String,
        enum: ['b2b', 'b2c', 'special'],
        required: true,
    },
    productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product',
        required: true
    }
});

export default mongoose.model('Price', PriceSchema);
