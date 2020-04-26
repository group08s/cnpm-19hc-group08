const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Room = new Schema({
    IdRoom : {type : String , required : true , trim : true},
    RoomName : {type : String , required : true , trim : true},
    People : {type : Number , required : true},
    Price : { type : Number,required :true},
    Status : {type :Number , required : true},
    // 0 la ko co nguoi (mặc định là 1 khi khởi tạo)
    // 1 la phong da co khach
    // 2 la phong dang sua chua , bao tri
    Floor : {type : Number , required : true}
    // mac dinh la 4 lau
},{collection: "Room"});

const ModelRoom = mongoose.model("Room",Room);
module.exports = ModelRoom;