const mongoose = require("mongoose");
// const staffjobSchema = new mongoose.Schema({
//     IDStaff : String,
//     spend2 : [{type : mongoose.Types.ObjectId , ref : "Spend"}],
//     Spend : [
//         {
//             MaSpend : {type : mongoose.Types.ObjectId , ref : 'Spend'},
//             TimeTaken : Number
//         }
//     ],
//     Payment : [
//         {
//             MaPayment : String,
//             TimeTaken : Number
//         }
//     ]
// });

//module.exports = mongoose.model("StaffJob",staffjobSchema);


const Schema = mongoose.Schema;

const StaffJob = new Schema({
    IDStaff : {type : String , required : true, trim : true},
    Spend : [ {type : mongoose.Types.ObjectId ,ref : "Spend"}],
    Payment : [{type : mongoose.Types.ObjectId , required : true,ref : "Payment"}]
},{collection : "StaffJob"});

const ModelStaffJob = mongoose.model("StaffJob",StaffJob);
module.exports = ModelStaffJob;