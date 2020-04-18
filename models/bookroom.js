const mongose = require('mongoose');

const BookRoomSchema = new mongose.Schema({
    Adults : Number,
    Children : Number,
    CheckIn : Date,
    CheckOut :Date,

    
    // Các phòng mà khách hang lựa chọn
    Room_id : [{type : mongose.Types.ObjectId,ref :'Room'}],
});

module.exports = mongose.model('BookRoom',BookRoomSchema);