import mongoose from 'mongoose';

const { Schema } = mongoose;

const UserSchema = new Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  address: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Address',
  },
  contactData: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'ContactData',
    },
  stores: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Store',
  }],
});

export default mongoose.model('User', UserSchema);
