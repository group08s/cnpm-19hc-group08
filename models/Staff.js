const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Staff = new Schema({
    Staff_Id :{type : String , required : true , trim : true },
    Staff_Name : {type : String , required : true, trim : true},
    Gender : { type : String , required : true , trim : true},
    Date_Birth : {type : Number , required : true , trim : true},
    Phone : { type : String , required : true , trim : true},
    Join_date : {type : Number , required : true},
    // loai nhan vien
    Decentralization : {type : Number, required : true},

},{collection : "Staff"});

const ModelStaff = mongoose.model("Staff",Staff);
module.exports = ModelStaff;