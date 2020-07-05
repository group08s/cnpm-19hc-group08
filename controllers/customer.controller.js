const customer = require('../models/Customer');
const serviceCustomer = require('../models/ServiceCustomer');
const room = require('../models/Room');
module.exports.addCustomer = function(req,res){
    const data = req.body.txt_data;
    console.log(data);
    const object = JSON.parse(data);
    //console.log(Object.keys(object.Relationship).length);
    // them nguoi dau tien
    const newCus = new customer({
        Name : object.Name,
        DateOfBirth : object.DateOfBirth,
        Phone : object.Phone,
        Address : object.Address,
        IdenttityCard : object.IdenttityCard,
        Email : object.Email
    });

    const result = newCus.save(function(err){
        if(err){
            return 0;
        }
        else{
            // Luu y
            // ID room la ten cua phong - thoi gian den - thoi gian di
            const Booking = {IdRoom : data.RoomName,ArrivalTime : data.ArrivalTime, LeaveTime : 0};
            const newServiceCus = new serviceCustomer({
                // khoi tao 1 hop dong
                IDCustomer : newCus._id, // chu cua phong 
                Status : 1 // tinh trang khach hang
                //Gồm  : chủ phòng , ID Phòng muốn đặt
            });
            newServiceCus.save(function(err){
                if(err){
                    return 0;
                }
                // thêm thời gian đến và thời gian đi cho khách hàng
                serviceCustomer.findOneAndUpdate(
                    {_id : newServiceCus._id},// hợp đồng của khách mới được tạo
                    {$push : {BookRoom : Booking}},
                    function(err){
                        if(err)
                        {
                            return 0;
                        }else{
                            room.findOneAndUpdate
                            (
                                {
                                    RoomName : req.body.txt_room
                                },
                                {
                                    Status : 2
                                },
                                function(err){
                                    if(err){
                                        return 0;
                                    }
                                }
                            )
                        }
                    })
            });

            //đối với khách hàng khi đi 1 mình
            if(Object.keys(object.Relationship).length < 1){
                return 1;
            }
            // khi khách hàng đi với số lượng nhiều.
            object.Relationship.forEach(cus => {
                const newrel = new customer({
                    Name : cus.Name,
                    DateOfBirth : cus.DateOfBirth,
                    Phone : cus.Phone,
                    Address : cus.Address,
                    IdenttityCard : cus.IdenttityCard,
                    Email : cus.Email
                });
                newrel.save(function(err){
                    if(err){
                        return 0;
                    }
                    else{
                        customer.findOneAndUpdate(
                            {_id : newCus._id},
                            {$push : {Id_relationship : newrel._id}},
                            function(err){
                                if(err){
                                    return 0;
                                }
                                else{
                                    return 1;
                                }
                            }
                        );
                    }
                });
            });
        }
    });
    if(result == 0){
        res.json({result : 0});
    }else{
        res.json({result : 1});
    }
}


module.exports.ListCustomer = function(req,res){
    customer.find(function(err,data){
        if(err){
            res.json({result : 0});
        }
        else{
            res.json(data);
        }
    })
}
    
module.exports.findOneCustomer = function(req,res){
    customer.findOne({IdCustomer : req.body.txt_idcustomer},function(err,data){
        if(err){
            res.json({result : 0});
        }
        else{
            res.json(data);
        }
    });
}

module.exports.updatecustomer = function(req,res){
    customer.findOneAndUpdate(
        {IdCustomer : req.body.txt_idcustomer}
        ,{$set: {Name : req.body.txt_name}}
        ,{new : true},
        function(err){
            if(err){
                res.json({result : 0});
            }
            else{
                res.json({result : 1});
            }
        }
    );
}