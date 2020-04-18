const mongoose = require('mongoose');

const ServiceSchema = new mongoose.Schema({
    ServiceName : String,
    Price : Number,
    Note : String
});

module.exports = mongoose.model('Service',ServiceSchema);