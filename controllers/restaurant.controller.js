var restaurant = require('../models/Restaurant');

module.exports.CreateRestaurant = function(res,req){
    var newRestaurant = new restaurant({
        IdDish : req.body.txtidDish,
        Dish : req.body.txtDish,
        Price : req.body.numberPrice,
        Note : req.body.txtNote,
        Cate_Dish : req.body.numberCate_Dish
    });

    newRestaurant.save(function(err){
        if(err){
            res.json({result : 0});
        }else{
            res.json({result : 1});
        }
    });
}

module.exports.CateRes = function(req,res){
    restaurant.find({Cate_Dish : req.body.cateDish},function(err,data){
        if(err){
            res.json({result : 0});
        }else{
            res.json(data);
        }
    });
}

module.exports.DeleteDish = function(res,req){
    restaurant.deleteOne({IdDish : req.body.txt_id_delete},function(err){
        if(err){
            res.json({result : 0 , error : err});
        }
        else{
            res.json({result : 1});
        }
    });
}


