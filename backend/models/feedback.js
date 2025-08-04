const mongoose = require('mongoose');

const objectId = mongoose.objectId;

const feedbackSchema = new mongoose.Schema({
    user : {type : objectId , ref: 'user'},
    flat : {type: objectId , ref : 'flat'},
    rating : Number,
    Comment:String,
    createdAt : {type: Date, default : Date.now}
});

const feedbackModel = mongoose.model('feedback', feedbackSchema);

module.exports = { 
    feedbackModel: feedbackModel
}