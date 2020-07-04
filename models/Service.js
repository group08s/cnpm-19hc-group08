const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const Service = new Schema({
    //IdService: {type: String, required: true, trim: true},
    Name: {type: String, required: true, trim: true},
    Price: {type: Number, required: true},
    Note: {type:String, trim: true}
}, {collection: "Service"});

const ModelService = mongoose.model("Service", Service);
module.exports = ModelService;