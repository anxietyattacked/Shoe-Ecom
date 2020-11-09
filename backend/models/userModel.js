import mongoose from "mongoose"


const userSchema = new mongoose.Schema({
    fName: {
        type: String, 
        required: true
    },
    lName: {
        type: String,
        required: true
        },
    email: {
        type: String,
        required: true,
        unique: true
        },
    password: {
        type: String,
        required: true
        },
    isAdmin: {
        type: Boolean,
        required: true,
        default: false,
    }
},
{
    timestamps: true,
  })

  const User = mongoose.model('User', userSchema)

  export default User