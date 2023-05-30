import mongoose from 'mongoose';

const PriceSchema = new mongoose.Schema({
  priceType: {
    type: String,
    enum: ['b2b_g', 'b2c_g', 'b2_i', 'b2_a'],
    required: true,
  },
  value: {
    type: Number,
    required: true,
  },
  quantity: {
    type: Number,
    default: 1,
  },
  b2_d: {
    startDate: {
      type: Date,
      default: Date.now,
    },
    endDate: {
      type: Date,
    },
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
});

const ProductSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  prices: [PriceSchema],
});

const Product = mongoose.model('Product', ProductSchema);

export default Product;
