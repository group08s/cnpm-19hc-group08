const spend = require('../models/Spend');
const staffjob = require('../models/StaffJob');

module.exports.addliststaff = function(req,res){
    const data = req.body.txt_data;
    const temp = JSON.parse(data);
    const staff = ['5efb166e50df35238e10e02c','5efb164c50df35238e10e02a',]; 
    temp.forEach(aa => {
        const newspend = new spend({
            Receiver : aa.Receiver,
            Amount : aa.Amount,
            Status : aa.Status,
            Note : aa.Note,
            Date_taken : aa.Date_taken
        });
        newspend.save(function(err){
            if(err){
                res.json({error : err});
            }
            else{
                const num = getRndInteger(0,2);
                staffjob.findOneAndUpdate(
                    {IDStaff : staff[num]},
                    {$push : {Spend : newspend._id}},
                    function(err){
                        console.log("oke");
                    }
                )
            }
        });
    });
    
    res.json({result : 1});
}
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }
module.exports.addSpend = function(req,res){
    const newspend = new spend({
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
            staffjob.findOneAndUpdate(
                {IDStaff : req.body.txt_idstaff},
                {
                    $push : {
                        Spend : newspend._id
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