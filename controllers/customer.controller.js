const customer = require('../models/Customer');

module.exports.addCustomer = function(req,res){
    const newcustomer = new customer({
        IdCustomer : req.body.txt_idcustomer,
        Name : req.body.txt_name,
        Phone : req.body.txt_phone,
        Address : req.body.txt_address,
        IdentityCard : req.body.txt_identitycard,
        Email : req.body.txt_email
    });

    newcustomer.save(function(err){
        if(err){
            res.json({result : 0});
        }
        else{
            res.json({result : 1});
        }
    });
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