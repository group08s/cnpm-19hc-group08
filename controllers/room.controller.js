var room = require('../models/Room');

module.exports.AddRoom = function(req,res){
    const data = {
        "RoomName" : "PH306",
        "People" : 6,
        "Price" : 3000000,
        "Status" : 1,
        "Floor" : 3
    };
    var newroom = new room({
        RoomName : data.RoomName,
        People : data.People,
        Price : data.Price,
        Status : data.Status,
        Floor : data.Floor
    });

    newroom.save(function(err){
        if(err){
            res.json({result : err});
        }else{
            res.json({result : 1});
        }
    });
}

module.exports.ListRoom  = function(req,res){
    room.find(function(err,data){
        if(err || data == null){
            return res.json({result : 0});
        }
        else{
            return res.json(data);
        }
    });
}

module.exports.findFloor = function(req,res){
    const floor = req.body.Floor;
    room.find({Floor : floor},function(err,data){
        if(err){
            res.json({result : 0});
        }else{
            res.json(data);
        }
    });
}

module.exports.findRoom = function(req,res){
    const idroom = req.body.nameRoom;

    room.findOne({RoomName : nameRoom},function(err,data){
        if(err){
            res.json({result : 0});
        }else{
            res.json(data);
        }
    });
}

module.exports.findRoomEmpty = function(req,res){
    room.find({Status : 0},function(err,data){
        if(err){
            res.json({result : 0});
        }else{
            res.json(data);
        }
    });
}

module.exports.deleteRoom = function(req,res){
    room.deleteOne({IdRoom : req.body.Id_room},function(err){
        if(err){
            res.json({result : 0});
        }
        else{
            res.json({result : 1});
        }
    });
}
// update phong
