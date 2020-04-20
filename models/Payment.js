const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Payment = new Schema({
    IdPayment : {type : String , required : true , trim : true},
    TimeTaken : {type : Number , required : true},
    Amount : {type : Number , required : true},
    Form_payment:{type : String , required : true , trim : true},
    Note : {type : String , required : true , trim : true},
    Customer_cate : {type : Number , required : true},
    // 1 là khách hàng tại nhà hàng
    // 2 là khách hàng ở ngoài khách sạn

    Customer : {type:String, trim : true}
},{collection : "Payment"});

const ModelPatment = mongoose.model("Payment",Payment);
module.exports = ModelPatment;