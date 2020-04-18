const mongoose = require('mongoose');
// cau truc bang khach hang
const CustomerSchema = new mongoose.Schema({
    Name : String,
    Phone : String,
    Address : String,
    IdentityCard : String,
    Gmail : String,
    // relationship
    // Khách hàng có "hoá đơn" những dịch vụ đã sử dụng
    Invoices_id : [{type : mongoose.Types.ObjectId , ref : 'Invoice'}],
    // phòng mà khách hàng đã lựa chọn
    BookRoom_id : [{type : mongoose.Types.ObjectId , ref : 'BookRoom'}]
    
});

module.exports = mongoose.model('Customer',CustomerSchema);


