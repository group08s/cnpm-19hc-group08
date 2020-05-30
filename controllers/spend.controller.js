const spend = require('../models/Spend');
const staffjob = require('../models/StaffJob');

module.exports.addSpend = function(req,res){
    const newspend = new spend({
        IdSpend : req.body.txt_idspend,
        Receiver : req.body.txt_receiver,
        Amount : req.body.number_amount,
        Status : req.body.number_status,
        Note : req.body.txt_note,
        Date_taken : req.body.number_date
    });

    newspend.save(function(err){
        if(err){
            res.json({result : 0,err : "insert Spend unsuccessful !!!"});
        }
        else{
            // thêm thành công
            //res.json({result : 1});
            // sau khi đó phải thêm idspend vào staffjob để biết nhân viên nào đã thực nhiện thanh toán
            const staffjob_spend = {MaSpend : newspend._id,TimeTaken : 00000};
            staffjob.findOneAndUpdate(
                {IDStaff : req.body.txt_idstaff},
                {
                    $push : {
                        Spend : staffjob_spend
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

module.exports.listSpend = function(req,res){
    spend.find(function(err,data){
        if(err){
            res.json({result : 0});
        }
        else{
            res.json(data);
        }
    });
}

module.exports.findOneSpend = function(req,res){
    spend.findOne({IdSpend : req.body.txt_idSpend},function(err,data){
        if(err){
            res.json({result : 0});
        }
        else{
            res.json(data);
        }
    })
}

// tìm theo ngày tháng năm