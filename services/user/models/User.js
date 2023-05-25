import mongoose from 'mongoose';
const { Schema } = mongoose;

const UserSchema = new Schema({
  name: {
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
  //ToDo: Fügen Sie hier weitere Felder hinzu, die Sie benötigen
});

export default mongoose.model('User', UserSchema);
