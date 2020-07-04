var servicecustomer = require('../models/ServiceCustomer');

// thêm các món ăn ở nhà hàng vào cho khách hàng
module.exports.addRestaurant = function (req, res) {
    // nhap vao phong
    servicecustomer.findOne({ "BookRoom.IdRoom": 'PH006', Status: 1 }, function (err, data) {
        if (err) {
            return res.json({ resutl: 0 });
        } else {
            const newRestaurant = { restaurant: "5efd6b9d35cfef10ad31c372", amount: 1 };
            servicecustomer.findOneAndUpdate({ _id: data._id },
                {
                    $push: { IDRestaurant: newRestaurant }
                },
                function (err) {
                    if (err) {
                        console.log(err);
                    } else {
                        res.json({ resutl: 1 });
                    }
                }
            );
        }
    });
}

// thêm các dịch vụ sử dụng cho khách
module.exports.addService = function (req, res) {
    const txtroom = "PH006"; // bien chuyen vao
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
                        return res.json({ resutl: 0 });
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