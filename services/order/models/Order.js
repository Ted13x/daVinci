import mongoose from 'mongoose';
const { Schema } = mongoose;


const OrderSchema = new Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    products: [{
        productId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Product',
            required: true,
        },
        quantity: {
            type: Number,
            required: true,
        },
        priceId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Price',
            required: true,
        }
    }],
    status: {
        type: String,
        enum: ['pending', 'processed', 'shipped', 'delivered', 'cancelled'],
        default: 'pending',
    },
    date: {
        type: Date,
        default: Date.now,
    },
});

export default mongoose.model('Order', OrderSchema);
