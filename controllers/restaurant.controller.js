var restaurant = require('../models/Restaurant');

module.exports.CreateRestaurant = function(req,res){
    //const temp = req.body.numberPrice;

    //console.log("aaaa");
    var newRestaurant = new restaurant({
        Dish : req.body.txtDish,
        Price : req.body.numberPrice,
        Note : req.body.txtNote,
        Cate_Dish : req.body.numberCate_Dish,
        url_img : req.body.Urlimg
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

module.exports.ListDish = function(req,res){
    restaurant.find(function(err,data){
        if(err){
            res.json({result : 1});
        }else{
            res.json(data);
        }
    })
}

// module.exports.updatecate = function(req,res){
//     restaurant.find(function(data){
//         data.forEach(restua => {
            
//         });
//     })
// }

module.exports.DeleteDish = function(req,res){
    restaurant.deleteOne({_id : req.body.txt_id_delete},function(err){
        if(err){
            res.json({result : 0 , error : err});
        }
        else{
            res.json({result : 1});
        }
    });
}


