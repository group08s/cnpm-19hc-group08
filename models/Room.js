const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Room = new Schema({
    RoomName : {type : String , required : true , trim : true},
    People : {type : Number , required : true},
    Price : { type : Number,required :true},
    Status : {type :Number , required : true},
    
    Floor : {type : Number , required : true}
    // mac dinh la 4 lau
},{collection: "Room"});

const ModelRoom = mongoose.model("Room",Room);
module.exports = ModelRoom;