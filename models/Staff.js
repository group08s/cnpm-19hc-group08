const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Staff = new Schema({
    IdStaff :{type : String , required : true , trim : true },
    NameStaff : {type : String , required : true, trim : true},
    Gender : { type : String , required : true , trim : true},
    DateOfBirth : {type : Number , required : true , trim : true},
    Phone : { type : String , required : true , trim : true},
    JoinDate : {type : Number , required : true},
    // loai nhan vien
    Decentralization : {type : Number, required : true},

},{collection : "Staff"});

const ModelStaff = mongoose.model("Staff",Staff);
module.exports = ModelStaff;