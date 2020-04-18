const mongoose = require('mongoose');

const SpendSchema = new mongoose.Schema({
    Receiver : String,
    Amount : Number,
    Status : Number,
    // Status : 1 là Đã thanh toán ,2 là Đang kiểm duyệt , 3 là Chưa được duyệt
    Note : String,
    Date_taken : Date,

});

module.exports = mongoose.model("Spend",SpendSchema);