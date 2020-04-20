const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const Customer = new Schema({
    ID_KH : {type : String , required : true , trim : true},
    Name : {type : String , required : true ,trim : true},
    Phone : {type : String , required : true , trim : true},
    Address : {type : String , required : true , trim : true},
    IdentityCard : {type : String , required : true , trim : true},
    Email : {type : String , trim : true},

},{collection : "Customer"});
const ModelCustomer = mongoose.model("Customer",Customer);
module.exports = ModelCustomer;