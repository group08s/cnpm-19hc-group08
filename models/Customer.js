const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const Customer = new Schema({
    IdCustomer : {type : String , required : true , trim : true},
    Name : {type : String , required : true ,trim : true},
    Phone : {type : String , required : true , trim : true},
    Address : {type : String , required : true , trim : true},
    IdentityCard : {type : String , required : true , trim : true},
    Email : {type : String , trim : true},
    Status : {type : Number }
    
    // 1 la khach dang o
    // 0 la khach da o xong
},{collection : "Customer"});
const ModelCustomer = mongoose.model("Customer",Customer);
module.exports = ModelCustomer;