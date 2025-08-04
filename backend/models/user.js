const mongoose = require('mongoose');
const {Schema , objectId} = mongoose;

const UserSchema = new Schema({
    email: {type:String, unique:true},
    password: {type:String , required:true},
    firstname: {type:String , required:true},
    lastname: {type:String,required:true},
    phone:String,
    age:Number,
    gender: {type:String, enum:['male' , 'female' , 'other']},
    occupation : {type:String , enum : ['student' , 'working professional']},
    prefernces : {
        veg:Boolean,
        smoker:Boolean,
        drinker:Boolean,
        pets:Boolean,
        sleepschedule: String,
        cleanliness: String,
        language: [String],
    },
    profilePic : String,// ye profile ka url le ga to upload the pic
    compatibiltiyTags : [String],//it will check for the preefcrences and if they match with the user's choice
    createdAt : {type: Date, default:Date.now}
});


const userModel = mongoose.model('user' , UserSchema);

module.exports ={ 
    userModel
};