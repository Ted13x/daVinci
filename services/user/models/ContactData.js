import mongoose from 'mongoose';

const { Schema } = mongoose;


const ContactDataSchema = new Schema({
    email: {
        type: String,
        required: true,
    },
    phone: {
        type: Number,
    },
    mobile: {
        type: Number,
    },
    fax: {
        type: Number,
    },
    website: {
        type: String,
    },
});

export const ContactData = mongoose.model('ContactData', ContactDataSchema);