const mongoose = require('mongoose');
const owner = require('./owner');

const {objectId} = mongoose;

const flatSchema =  new mongoose.Schema({
    title:String,
    description:String,
    address:String,
    city:String,
    locality:String,
    pricing:String,
    noOfFlatmates : Number,
    availableSeats : Number,
    flatType: {type:String, enum: ['1BHK' , '2BHK' , '3BHK' , 'Studio']},
    genderPreference : {type:String , enum: ['male' , 'female' , 'other']},
    lifestyleFilters: {
        veg:Boolean,
        smoker:Boolean,
        drinker: Boolean,
        petsAllowed : Boolean,
        furnished: Boolean,
        ac:Boolean,
        fridge:Boolean
    },
    photos : [String],
    owner: [{type: mongoose.Schema.Types.ObjectId, ref: 'owner'}],
    createdAt : {type:Date , default : Date.now}
});

const flatModel = mongoose.model('flat' , flatSchema);

module.exports = {
    flatModel:flatModel
}