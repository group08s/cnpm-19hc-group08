const staffjob = require('../models/StaffJob');

module.exports.liststaff = function (req, res) {
    staffjob.find(function (err, data) {
        if (err) {
            res.json({ result: 0, error: err });
        }
        else {
            console.log(data);
            res.json(data);
        }
    })
}

module.exports.findOneStaff = function (req, res) {
    staffjob.find().populate('Payment.MaPayment').populate('Spend.MaSpend').exec(function(err,data){
        if(err){
            res.json({result : 0});
        }
        else{
            res.json(data);
        }
    })
}