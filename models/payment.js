const mongoose = require('mongoose');

const PaymentSchema = mongoose.Schema({
    Date_taken : Date,
    // tính tiền khi check out
    Customer_cate : Number,
    // 1 là khách đang ở khách sạn
    // 2 là khách đến ăn
    Form_payment : String,
    Note : String,
    // Relationship
    // id khách hàng thanh toán
    Customer_id : {type : mongoose.Types.ObjectId,ref : 'Customer'},
});

module.exports = mongoose.model("Payment",PaymentSchema);