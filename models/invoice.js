const monngoose = require('mongoose');
const InvoiceSchema = new monngoose.Schema({
    Date_taken : Date,
    Amount : Number,
    
    // khách hàng có thể sở hữu nhiều hoá đơn

    //Relationship
    // hoá đơn sẽ lưu các "dịch vụ" của khách hàng sử dụng
    Service_id : [{type : monngoose.Types.ObjectId , ref : 'Service'}],
    // hoá đơn sẽ lưu các "Thức ăn" của khách hàng ăn
    RestaurantMenu_id : [{type : monngoose.Types.ObjectId,ref : 'Restaurant_Menu'}], 
});

module.exports = monngoose.model("Invoice",InvoiceSchema);