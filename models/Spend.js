const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Spend = new Schema({
    Spend_ID : {type : String , required : true , trim : true},
    Receiver : {type : String , required : true , trim : true},
    // receiver là người nhận / hưởng tiền
    Amount : {type : Number , required : true , trim : true},
    Status : {type : Number , required : true , trim : true},
    // Status : 0 là chưa thanh toán , 1 : đã thanh toán
    Node : { type : String , required: true , trim : true },
    // nhân viên bắt buộc phải viết ghi chú (mua những gì , nhập nguyên liệu gì,làm gì ...)
    Date_taken : {type : Number , required : true}
},{collection : "Spend"});

const ModelSpend = mongoose.model("Spend",Spend);
module.exports = ModelSpend;