const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Payment = new Schema({
    //IdPayment : {type : String , required : true , trim : true},
    TimeTaken : {type : Number},
    Amount : {type : Number },
    Form_payment:{type : Number},
    // 1 la qua tien mat
    // 2 la thanh toan bang the ngan hang
    
    Note : {type : String , trim : true},
  

    Customer : {type: mongoose.Types.ObjectId , ref : 'Customer', trim : true}
},{collection : "Payment"});

const ModelPatment = mongoose.model("Payment",Payment);
module.exports = ModelPatment;