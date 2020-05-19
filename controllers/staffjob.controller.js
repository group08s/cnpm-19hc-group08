const staffjob = require('../models/StaffJob');

module.exports.liststaff = function(req,res){
    staffjob.find(function(err,data){
        if(err){
            res.json({result : 0,error : err});
        }
        else{
            console.log(data);
            res.json(data);
        }
    })
}

module.exports.findOneStaff = function(req,res){
    staffjob.findOne({IDStaff : req.body.txt_idstaff},function(err,data){
        if(err){
            res.json({result : 0});
        }
        else{
            res.json(data);
        }
    })
}