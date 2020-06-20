const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ServiceCustomer = new Schema({
    IDCustomer : [{type : mongoose.Types.ObjectId , require : true , ref : "Customer"}],
    IDRoom : {type : String , required : true , trim : true},
    ArrivalTime: {type: Number, required: true},
    LeaveTime: {type: Number, required: true},
    Note : {type : String , required : true, trim : true},
    // BookRoom: [
    //     {
    //         IdRoom: {type: String, required: true, trim: true},
    //         BookTime: {type: Number},
    //         ArrivalTime: {type: Number, required: true},
    //         LeaveTime: {type: Number, required: true}
    //     }
    // ],
    IDRestaurant: [{type : mongoose.Types.ObjectId , required : true , trim : true}],
    IDService: [{type : mongoose.Types.ObjectId, requireed : true , trim : true}],
    status : {type : String , required : true,trim : true}
}, {collection: "ServiceCustomer"});

const ModelServiceCustomer = mongoose.model("ServiceCustomer", ServiceCustomer);
module.exports = ModelServiceCustomer;