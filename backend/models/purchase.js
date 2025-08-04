const mongoose = require('mongoose');
const objectId = mongoose.objectId;

const purchaseSchema =  new mongoose.Schema({

    user: {type: objectId , ref: 'user'},
    flat : {type: objectId , ref : 'flat'},
    seatCount : Number,
    paymentStatus : {type:String, enum: ['pending' , 'completed' , 'failed']},
    timestamp : {type: Date, default:Date.now},
});

const purchaseModel = mongoose.model('purchase' , purchaseSchema);

module.exports = {
    purchaseModel: purchaseModel,
}