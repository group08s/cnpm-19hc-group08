var servicecustomer = require('../models/ServiceCustomer');
var customer = require('../models/Customer');
var room = require('../models/Room');
// thêm các món ăn ở nhà hàng vào cho khách hàng
module.exports.addRestaurant = function (req, res) {
    // nhap vao phong
    const data = {
        "RoomName" : "PH101",
        "idresataurant" : "5efd6b9d35cfef10ad31c372",
        "amount" : 2
    }

    servicecustomer.findOne({ "BookRoom.IdRoom": data.RoomName, Status: 1 }, function (err, data) {
        if (err) {
            return res.json({ resutl: 0 });
        } else {
            const newRestaurant = { restaurant: data.idresataurant, amount: data.amount };
            servicecustomer.findOneAndUpdate({ _id: data._id },
                {
                    $push: { IDRestaurant: newRestaurant }
                },
                function (err) {
                    if (err) {
                        return res.json({resutl : 1});
                    } else {
                        return res.json({ resutl: 1 });
                    }
                }
            );
        }
    });
}

// thêm các dịch vụ sử dụng cho khách
module.exports.addService = function (req, res) {
    const txtroom = "PH101"; // bien chuyen vao
    const txt_idservice = "5efaf97293b4bd13068ace50"; // bien chuyen vao

    // tim phong dang o va co tinh trang la chua di
    servicecustomer.findOne({ "BookRoom.IdRoom": txtroom, Status: 1 }, function (err, data) {
        if (err) {
            return res.json({ resutl: 0 });
        }
        else {
            const temp = data;
            servicecustomer.findOneAndUpdate({ _id: temp._id }
                , { $push: { IDService: txt_idservice } },
                function (err) {
                    if (err) {
                        return res.json({ resutl: 0 });
                    }
                    else {
                        return res.json({ resutl: 1 });
                    }
                });
        }
    });
}

module.exports.findProfileCustomer = function(req,res){
    const txt_id = "5efd84471f4e021f340e72d7";
    servicecustomer.findOne({IDCustomer : txt_id}).populate('IDRestaurant.restaurant').populate('IDService').exec(function(err,data){
        if(err){
            res.json({resutl : err});
        }else{
            res.json(data);
        }
    })
}

module.exports.findCusRestaurant = function(req,res){
    const txtRoom = "PH101";
    servicecustomer.findOne({'BookRoom.IdRoom' : txtRoom, Status : 1},function(err,data){
        if(err || data == null){
            return res.json({resutl : 0});
        }
        else{
            return res.json(data);
        }
    })
}

module.exports.findListRoom  = function(req,res){
    servicecustomer.find({Status : 1}).populate('IDCustomer').select('BookRoom.IdRoom IDCustomer').exec(function(err,data){
        if(data == null || err){
            return res.json({resutl : 0});
        }else{
            res.json(data);
        }
    })
}

// tìm kiếm thông tin khách hàng ở phòng
module.exports.findRoomCustomer = function(req,res){
    const txt_room = "PH101"; // ten phong
    servicecustomer.findOne({'BookRoom.IdRoom' : txt_room , Status : 1}).populate('IDRestaurant.restaurant').populate('IDService').populate('IDCustomer').exec(function(err,data){
        if(data == null){
            return res.json({resutl : 0});
        }
        else{
            const kq = data;
            //console.log(data.IDCustomer._id);
            customer.findOne(data.IDCustomer._id).populate('Id_relationship').exec(function(err,dt){
                if(err){
                    return res.json({resutl : 0});
                }
                else{
                    
                    const Employee = JSON.stringify(data);
                    const a = JSON.parse(Employee);
                    delete a['IDCustomer'];
                    a.IDCustomer = dt;
                    // expected output: undefined
                    
                    return res.json(a);
                }
            })
        }
    });
}

// tìm kiếm khi thanh toán
module.exports.findRoomCustomer_payment = function(req,res){
    const txt_room = "PH101"; // ten phong
    servicecustomer.findOne({'BookRoom.IdRoom' : txt_room , Status : 1}).populate('IDRestaurant.restaurant').populate('IDService').populate('IDCustomer').exec(function(err,data){
        if(data == null){
            return res.json({resutl : 0});
        }
        else{
            const kq = data;
            //console.log(data.IDCustomer._id);
            customer.findOne(data.IDCustomer._id).populate('Id_relationship').exec(function(err,dt){
                if(err){
                    return res.json({resutl : 0});
                }
                else{
                    //console.log();
                    room.find({RoomName : data.BookRoom[0].IdRoom},function(err,kq){
                        const Employee = JSON.stringify(data);
                        const a = JSON.parse(Employee);
                        delete a['IDCustomer'];
                        a.IDCustomer = dt;
                        a.Room = kq;
                        return res.json(a);
                    })
                    
                    // expected output: undefined
                    
                    
                }
            })
        }
    });
}