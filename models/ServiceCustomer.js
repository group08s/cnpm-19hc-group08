const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ServiceCustomer = new Schema({
    IDKH: {type: String, required: true, trim: true},
    Room :[
        {
            MaRoom : {type:String , require : true , trim : true}
        }
    ],
    BookRoom: {
        BookTime: {type: Number},
        ArrivalTime: {type: Number, required: true},
        LeaveTime: {type: Number, required: true}
    },
    Restaurant: [
        {
            MADH: {type: String, required: true, trim: true}
        }
    ],
    Orther: [
        {
            MADV: {type: String, required, trim: true},
            TimeStart: {type: Number, required: true},
            type: {type: Number}
        }
    ]
}, {collection: "ServiceCustomer"});

const ModelServiceCustomer = mongoose.model("ServiceCustomer", ServiceCustomer);
module.exports = ModelServiceCustomer;