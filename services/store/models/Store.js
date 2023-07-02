import mongoose from 'mongoose';

const { Schema } = mongoose;


const StoreSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    enum: ['manufacturer', 'supplier', 'retailer', 'serviceSupplier', 'restaurant', 'other'],
    required: true,
    },
  logo: {
    type: String,
  },
  address: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Address',
    required: true,
  },
  contactData: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'ContactData',
    required: true,    
  },
  vatNr: {
    type: String,
  },
  companyRegistrationNumber: {
    type: String,
  },
  admins: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  }],
  partners: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    }],
  subscribers: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      }],
});

export default mongoose.model('Store', StoreSchema);