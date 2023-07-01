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

const ImageSchema = new mongoose.Schema({
  url: {
    type: String,
    required: true,
  },
  size: {
    type: Number, // size in Bytes
    required: true,
  },
  format: {
    type: String, 
    enum: ['jpg', 'png'],
    required: true,
  },
});

const VideoSchema = new mongoose.Schema({
  url: {
    type: String,
    required: true,
  },
  size: {
    type: Number, // size in Bytes
    required: true,
  },
  format: {
    type: String, 
    enum: ['mp4'],
    required: true,
  },
});

const MaterialSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  percentage: {
    type: Number,
    required: true,
  },
}, {_id: false});

const CustomPropertySchema = new mongoose.Schema({
  key: {
    type: String,
    required: true,
  },
  value: {
    type: mongoose.Schema.Types.Mixed,
    required: true,
  },
}, {_id: false});

const ProductSchema = new mongoose.Schema({
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  prices: [PriceSchema],
  images: [ImageSchema],
  videos: [VideoSchema],
  dimensions: {
    length: Number,
    width: Number,
    height: Number,
  },
  volume: Number,
  weight: Number,
  materials: [MaterialSchema],
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Category'
},
  customProperties: [CustomPropertySchema],
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

const Product = mongoose.model('Product', ProductSchema);

export default Product;
