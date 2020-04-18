const mongoose = require('mongoose');
const RoomSchema = new mongoose.Schema({
    RoomName : String,
    Status : Number,
    // 1 la ko co nguoi (mặc định là 1 khi khởi tạo)
    Floor : Number,
    
});

module.exports = mongoose.model("Room",RoomSchema);