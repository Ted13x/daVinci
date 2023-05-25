import mongoose from 'mongoose';
const { Schema } = mongoose;


const CartSchema = new Schema({
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
            default: 1,
        }
    }],
    active: {
        type: Boolean,
        default: true,
    }
});

export default mongoose.model('Cart', CartSchema);
