import mongoose from 'mongoose';
const { Schema } = mongoose;

const AddressSchema = new Schema({
  street: {
    type: String,
    required: true,
  },
  houseNumber: {
    type: Number,
    required: true,
  },
  blockNumber: {
    type: Number,
    required: true,
  },
  doorNumber: {
    type: Number,
    required: true,
  },
  zipCode: {
    type: Number,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true,
    enum: ['Austria', 'Germany', 'Switzerland']
    // TODO: add more countries
  },
});

export const Address = mongoose.model('Address', AddressSchema);