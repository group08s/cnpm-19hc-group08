const payment = require('../models/Payment');
const staffjob = require('../models/StaffJob');
module.exports.addPayment = function(req,res){
    const newPayment = new payment({
        //IdPayment : req.body.txt_idpayment,
        TimeTaken : req.body.number_timetaken,
        Amount : req.body.number_amount,
        Form_payment : req.body.number_form_payment,
        Note : req.body.txt_note,
        Customer_cate : req.body.number_customer_cate,
        Customer : req.body.txt_customer
    });

    newPayment.save(function(err){
        if(err){
            res.json({result : 0 , "error" : err});
        }
        else{
            staffjob.findOneAndUpdate(
                {IDStaff : req.body.txt_idstaff},
                {
                    $push : {
                        Payment : newPayment._id
                    }
                },
                function(err){
                    if(err){
                        res.json({result : 0, "error" : err});
                    }
                    else{
                        res.json({result : 1});
                    }
                }
            );
        }
    });
}

