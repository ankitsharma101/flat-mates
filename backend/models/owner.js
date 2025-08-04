const mongoose = require('mongoose');
// const objectId = mongoose.objectId;

const ownerSchema = new mongoose.Schema({
    name:String,
    email:{type:String , unique:true},
    phone: String,
    password:String,
    address: String,
    flats : [{type: mongoose.Schema.Types.ObjectId , ref: 'flat'}],
    createdAt : {type:Date , default:Date.now}
});

const ownerModel = mongoose.model('owner', ownerSchema);

module.exports = {
    ownerModel:ownerModel,
}
