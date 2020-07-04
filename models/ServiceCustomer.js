const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ServiceCustomer = new Schema({

    IDCustomer : {type : mongoose.Types.ObjectId , require : true , ref : "Customer"},
    Note : {type : String , trim : true},
    BookRoom: [
        {
            IdRoom: {type : String, trim : true},
            BookTime: {type: Number},
            ArrivalTime: {type: Number},
            LeaveTime: {type: Number}
        }
    ],
    IDRestaurant: [
        {
            restaurant : {type : mongoose.Types.ObjectId , trim : true , ref : "Restaurant"},
            amount : {type : Number}
        }
    ],
    IDService: [{type : mongoose.Types.ObjectId , trim : true , ref : "Service"}],
    Status : {type : Number }
    // 1 là khách hàng đang ở
    // 2 là khách hàng đã đi

}, {collection: "ServiceCustomer"});

const ModelServiceCustomer = mongoose.model("ServiceCustomer", ServiceCustomer);
module.exports = ModelServiceCustomer;