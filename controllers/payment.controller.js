const payment = require('../models/Payment');
const staffjob = require('../models/StaffJob');
const customer = require('../models/Customer');
const serviceCustomer = require('../models/ServiceCustomer');
const room = require('../models/Room')
// thanh toán khách ở ngoài khách sạn
module.exports.addpaymentrestaurant = function(req,res){
    const txt_staff = "5f003a6540dc4c39e40ed947"; // id nhan vien thuc hien(luc dang nhap)
    const data = { // data can khi khach hang thanh toan
        "Name" : "Phan Tan Hao Trung",
        "Phone" : "092328932",
        "Restaurant" : [
            {
                "restaurant" : "5efd677135cfef10ad31c366", // id món ăn
                "amount" : 3 // 3 * 250.00 số lượng
            },
            {
                "restaurant" : "5efd67c235cfef10ad31c367",
                "amount" : 4 // 4 * 300.000
            }
        ],
        "TimeTaken" : 1593849204,// thoi gian thuc hien thanh toan
        "Amount" : 2350000, // tong tien 2.350.000
    };
 
    const newcusRes = new customer({
        Name : data.Name,
        Phone : data.Phone
    });
    newcusRes.save(function(err){
        if(err){
            return res.json({result : 0});
        }
        else{
            const serviceRes = new serviceCustomer({
                IDCustomer : newcusRes._id,
                IDRestaurant : data.Restaurant
            });
            serviceRes.save(function(err){
                if(err){
                    return res.json({result : 0});
                }
                else{
                    const newPayment = new payment({
                        TimeTaken : data.TimeTaken, // ngay thuc hien
                        Amount : data.Amount, // so tien
                        Customer : newcusRes._id
                    });
                    newPayment.save(function(err){
                        if(err){
                            return res.json({result : "err"});
                        }
                        else{
                            staffjob.findOneAndUpdate(
                                {IDStaff : txt_staff},
                                {
                                    $push : {
                                        Payment : newPayment._id
                                    }
                                },
                                function(err){
                                    if(err){
                                        return res.json({result : 0, "error" : err});
                                    }
                                    else{
                                        return res.json({result : 1});
                                    }
                                });
                        }
                    })
                }
            });
        }
    })
}

// thanh toán đối với khách hàng trong khách sạn.
module.exports.addPayment = function(req,res){
    const txtstaff = "5f003a6540dc4c39e40ed947";
    const data = {
        "TimeTaken" : 1593849204,
        "Amount" : 10000000, // thanh toán tất cả các dịch vụ các khách hàng.
        "Customer" : "5efff33d9de4df094ef9b782",
        "Room" : "PH101"
    }
    const newPayment = new payment({
        TimeTaken : data.TimeTaken,
        Amount : data.Amount,
        Customer : data.Customer
    });

    newPayment.save(function(err){
        if(err){
            res.json({result : 0 , "error" : err});
        }
        else{
            staffjob.findOneAndUpdate(
                {IDStaff : txtstaff},
                {
                    $push : {
                        Payment : newPayment._id
                    }
                },
                function(err){
                    if(err){
                        res.json({result : 0, "error" : err});
                    }
                    else{
                        serviceCustomer.findOneAndUpdate
                        (
                            { IDCustomer : data.Customer},
                            {Status : 2}, // cập nhật khách hàng đã ra khỏi khách sạn
                            function(err){
                                if(err){
                                    console.log(err);
                                }else{
                                    room.findOneAndUpdate
                                    (
                                        {
                                            RoomName : data.Room
                                        },{
                                            Status : 1
                                        },function(err){ // cập nhật phòng bắt đầu trống
                                            if(err){
                                                return res.json({result : 0});
                                            }
                                            else{
                                                return res.json({result : 1});
                                            }
                                        }
                                    )
                                }
                            }
                        )
                    }
                }
            );
        }
    });
}

