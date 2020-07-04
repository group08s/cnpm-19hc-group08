const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const Customer = new Schema({
    //IdCustomer : {type : String , required : true , trim : true},
    Name : {type : String , required : true ,trim : true},
    DateOfBirth :{type : Number , required : true},
    Phone : {type : String , trim : true},
    Address : {type : String , trim : true},
    IdentityCard : {type : String , trim : true},
    Email : {type : String , trim : true},
    Id_relationship : [{type : mongoose.Types.ObjectId , ref : "Customer"}]
    // 1 la khach dang o
    // 0 la khach da o xong
},{collection : "Customer"});
const ModelCustomer = mongoose.model("Customer",Customer);
module.exports = ModelCustomer;