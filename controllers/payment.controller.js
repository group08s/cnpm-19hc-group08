const payment = require('../models/Payment');
const staffjob = require('../models/StaffJob');
module.exports.addPayment = function(req,res){
    const newPayment = new payment({
        IdPayment : req.body.txt_idpayment,
        TimeTaken : 00000,
        Amount : req.body.number_amount,
        Form_payment : req.body.number_form_payment,
        Note : req.body.txt_note,
        Guests_pay : req.body.number_guests_pay,
        Customer_cate : req.body.number_customer_cate,
        Customer : req.body.txt_customer
    });

    newPayment.save(function(err){
        if(err){
            res.json({result : 0 , "error" : err});
        }
        else{
            const payment_staffjob = {MaPayment :  newPayment._id, TimeTaken : 000};
            staffjob.findOneAndUpdate(
                {IDStaff : req.body.txt_idstaff},
                {
                    $push : {
                        Payment : payment_staffjob
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

