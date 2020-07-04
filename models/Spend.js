const mongoose = require('mongoose');
// const spendSchema = new mongoose.Schema({
//     IdSpend : String,
//     Receiver : String,
//     // receiver là người nhận / hưởng tiền
//     Amount : String,
//     Status : String,
//     // Status : 0 là chưa thanh toán , 1 : đã thanh toán
//     Note : String,
//     // nhân viên bắt buộc phải viết ghi chú (mua những gì , nhập nguyên liệu gì,làm gì ...)
//     Date_taken : Number
// });

// module.exports = mongoose.model("Spend",spendSchema);


const Schema = mongoose.Schema;

const Spend = new Schema({
    Receiver : {type : String , required : true , trim : true},
    // receiver là người nhận / hưởng tiền
    Amount : {type : Number , required : true , trim : true},
    Status : {type : Number , required : true , trim : true},
    // Status : 0 là chưa thanh toán , 1 : đã thanh toán
    Note : { type : String , required: true , trim : true },
    // nhân viên bắt buộc phải viết ghi chú (mua những gì , nhập nguyên liệu gì,làm gì ...)
    Date_taken : {type : Number , required : true}
},{collection : "Spend"});

const ModelSpend = mongoose.model("Spend",Spend);
module.exports = ModelSpend;