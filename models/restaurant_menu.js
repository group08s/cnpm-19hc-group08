const mongoose = require('mongoose');

const Restaurant_MenuSchema = new mongoose.Schema({
    Dish : String,
    Price : Number,
    Note : String,
    Category_d : Number,
    // 1 là đồ ăn
    // 2 là thức uống
});

module.exports = mongoose.model("Restaurant_Menu",Restaurant_MenuSchema);