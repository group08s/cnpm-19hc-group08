const service = require('../models/Service');

module.exports.addService = function(req,res){
    const newService = new service({
        IdService : req.body.txt_IdService,
        Name : req.body.txt_Name,
        Price : req.body.number_Price,
        Note : req.body.txt_Note,
    });

    newService.save(function(err){
        if(err){
            res.json({result : 0});
        }
        else{
            res.json({result : 1});
        }
    });
}


module.exports.deleteService = function(req,res){
    const idservice = req.body.txt_idservice;
    service.findOneAndDelete({IdService : idservice},function(err){
        if(err){
            res.json({result : 0});
        }
        else{
            res.json({result : 1});
        }
    })
}

module.exports.listService = function(req,res){
    service.find(function(err,data){
        if(err){
            res.json({result : 0});
        }
        else{
            res.json(data);
        }
    })
}