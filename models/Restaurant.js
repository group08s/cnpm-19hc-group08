const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Restaurant = new Schema({
    IdDish : {type : String , required : true , trim : true}, 
    Dish : {type : String ,required : true , trim : true},
    Price : {type : Number , required :true},
    Note : {type : String , trim : true},
    Cate_Dish : {type : Number , required : true}
    // 1 là đồ ăn , 2 là thức uống
},{collection :"Restaurant"});

const ModelRestaurant = mongoose.model("Restaurant",Restaurant);
module.exports = ModelRestaurant;