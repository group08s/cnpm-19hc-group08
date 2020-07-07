const customer = require('../models/Customer');
const serviceCustomer = require('../models/ServiceCustomer');
const room = require('../models/Room');
module.exports.addCustomer = function(req, res) {
    const data = req.body;
    // const data1 = {
    //     "RoomName" : "PH106",
    //     "Name": "Đinh Thiên Hoàng Long",
    //     "DateOfBirth": "867405613",
    //     "Phone": "0926061115",
    //     "Address": "752/111 Lạc Long Quân , quận Tân Bình , thành phố Hồ Chí Minh",
    //     "IdentityCard": "0921321312",
    //     "Email": "nthiepgk123@gmail.com",
    //     "Relationship": [{
    //             "name": "Nguyễn Con",
    //             "dateofbirth": "1583229613",
    //             "phone": " ",
    //             "address": " ",
    //             "IdentityCard": " ",
    //             "Email": " "
    //         },
    //         {
    //             "name": "Bá Song ",
    //             "dateofbirth": "954151213",
    //             "phone": "09260612323",
    //             "Address": "752/111 Lạc Long Quân , quận Tân Bình , thành phố Hồ Chí Minh",
    //             "IdentityCard": "0921321312",
    //             "Email": "nthiepgk123@gmail.com"
    //         }
    //     ]
    // }
    // them nguoi dau tien
    const newCus = new customer({
        Name: data.Name,
        DateOfBirth: data.DateOfBirth,
        Phone: data.Phone,
        Address: data.Address,
        IdenttityCard: data.IdenttityCard,
        Email: data.Email
    });

    const result =  newCus.save(function (err) {
        if (err) {
            return 0;
        }
        else {
            // Luu y
            // ID room la ten cua phong - thoi gian den - thoi gian di
            var checkout = 0;
            if (data.LeaveTime != null) {
                checkout = data.LeaveTime;
            }
            const Booking = { IdRoom: data.RoomName, ArrivalTime: data.ArrivalTime, LeaveTime: checkout };
            const newServiceCus = new serviceCustomer({
                // khoi tao 1 hop dong
                IDCustomer: newCus._id, // chu cua phong 
                Status: 1 // tinh trang khach hang
                //Gồm  : chủ phòng , ID Phòng muốn đặt
            });
            newServiceCus.save(function (err) {
                if (err) {
                    return 0;
                }
                // thêm thời gian đến và thời gian đi cho khách hàng
                serviceCustomer.findOneAndUpdate(
                    { _id: newServiceCus._id },// hợp đồng của khách mới được tạo
                    { $push: { BookRoom: Booking } },
                    function (err) {
                        if (err) {
                            return 0;
                        } else {
                            room.findOneAndUpdate
                                (
                                {
                                    RoomName: data.RoomName
                                },
                                {
                                    Status: 2
                                },
                                function (err) {
                                    if (err) {
                                        return 0;
                                    }
                                }
                                )
                        }
                    })
            });

            //đối với khách hàng khi đi 1 mình
            if (Object.keys(data.Relationship).length < 1) {
                return 1;
            }
            // khi khách hàng đi với số lượng nhiều.
            data.Relationship.forEach(cus => {
                const newrel = new customer({
                    Name: cus.name,
                    DateOfBirth: cus.timestamp,
                    Phone: cus.phone,
                    Address: cus.Address,
                    IdenttityCard: cus.IdenttityCard,
                    Email: cus.Email
                });
                newrel.save(function (err) {
                    if (err) {
                        return 0;
                    }
                    else {
                        customer.findOneAndUpdate(
                            { _id: newCus._id },
                            { $push: { Id_relationship: newrel._id } },
                            function(err){
                                if(err){
                                    return 0;
                                }
                            }
                        );
                    }
                });
            });
        }
    });

    // kết quả trả về
    if (result == 0) {
        res.json({result : 0});
    } else {
        res.json({result : 1});
    }
}



module.exports.ListCustomer = function (req, res) {
    customer.find(function (err, data) {
        if (err) {
            res.json({ result: 0 });
        }
        else {
            res.json(data);
        }
    })
}

module.exports.findOneCustomer = function (req, res) {
    customer.findOne({ IdCustomer: req.body.txt_idcustomer }, function (err, data) {
        if (err) {
            res.json({ result: 0 });
        }
        else {
            res.json(data);
        }
    });
}

module.exports.updatecustomer = function (req, res) {
    customer.findOneAndUpdate(
        { IdCustomer: req.body.txt_idcustomer }
        , { $set: { Name: req.body.txt_name } }
        , { new: true },
        function (err) {
            if (err) {
                res.json({ result: 0 });
            }
            else {
                res.json({ result: 1 });
            }
        }
    );
}