import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    dob: {
        type: Date,
        required: false,
        validate: {
            validator: function (value) {
                return value <= new Date();
            },
            message: 'Birth date cannot be in the future.'
        }
    },
    email: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: false,
        default: "https://i.pinimg.com/736x/0f/f2/f4/0ff2f496da96bfad59cb9b3dd283a111.jpg",
        set: v => v === "" ? undefined : v
    }
}, {
})



const User = mongoose.model('User', userSchema);
export default User;