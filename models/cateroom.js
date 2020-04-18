const mongoose = require('mongoose');

const Cate_RoomSchema = new mongoose.Schema({
    CateRoom : String,
    People : Number,
    PriceDay : Number,
    PriceNight : Number,

    //Relationship
    // Mỗi loại phòng chứa nhiều phòng
    Room_id : [{type: mongoose.Types.ObjectId , ref : 'Room'}]
});

module.exports = mongoose.model('CateRoom',Cate_RoomSchema);