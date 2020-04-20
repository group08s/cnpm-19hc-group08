const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const StaffJob = new Schema({
    IDStaff : {type : String , required : true, trim : true},

    Spend : [
        {
            MaSpend : {type: String , required : true , trim : true},
            Time_taken : {type : Number , require:true}
        }
    ],
    Payment : [
        {
            MaPayment : {type : String , required : true,trim : true},
            Time_taken : {type : Number , required : true}
        }
    ]
    
},{collection : "StaffJob"});

const ModelStaffJob = mongoose.model("StaffJob",StaffJob);
module.exports = ModelStaffJob;