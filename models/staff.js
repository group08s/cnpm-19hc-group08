const mongoose = require('mongoose');

const StaffSchema = new mongoose.Schema({
    StaffName : String, 
    Gender : String,
    Date_Birth : Date,
    Phone : String,
    Join_date : Date,

    //Bộ phận nhân viên thu ngân thì sẽ cấp phát tk,mk
    //
    Decentralization : Number,
    // 1 = admin
    // 2 = nhân viên thu ngân
    // 0 = Nhân viên khác

    // relationship 
    // Nhân viên thực hiện "thu tiền" cho khách
    Payment_id : [{type : mongoose.Types.ObjectId , ref : 'Payment'}],
    
    // Nhân viên sẽ là người thực hiện các chi tiêu
    Spend_id : [{type : mongoose.model("Spend")}],
})

module.exports = mongoose.model("Staff",StaffSchema);