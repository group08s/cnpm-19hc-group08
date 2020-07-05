var staff = require('../models/Staff');
var staffjob = require('../models/StaffJob');


module.exports.AddStaff = function (req, res) {
    var newstaff = new staff({
        NameStaff: "Khủng Long Bố",
        Gender: "Nam",
        DateOfBirth: 647078004,
        Phone: "021930219",
        JoinDate: 1593849204,
        Decentralization: 2
    });

    newstaff.save(function (err) {
        if (err) {
            res.json({ result: 0, error: err })
        } else {
            if (newstaff.Decentralization == 2 || newstaff.Decentralization == 3)// la nhân viên thu tiền hoặc quản lí khách sạn
            {
                const newStaffjob = new staffjob({ IDStaff: newstaff._id });
                // sau khi thêm nhân viên thành công thì sẽ mặc đßịnh thêm quản lí vào danh sách công việc quản lí
                newStaffjob.save(function (err) {
                    if (err) {
                        res.json({ result: 0, error: err });
                    }
                    else {
                        res.json({ result: 1 });
                    }
                });
            }
            else{
                res.json({ result: 1 });
            }
        }
    });
}

module.exports.ListStaff = function (req, res) {
    staff.find(function (err, data) {
        if (err) {
            res.json({ result: 0 });
        } else {
            res.json(data);
        }
    });
}

module.exports.FindOneStaff = function (req, res) {
    const idstaff = req.body.IdStaff;

    staff.findOne({ IdStaff: idstaff }, function (err, data) {
        if (err) {
            res.json({ result: 0 });
        }
        else {
            res.json(data);
        }
    });
}

module.exports.DeleteStaff = function (req, res) {
    const id_Staff_dele = req.body.IdStaff;
    //res.json({id : id_Staff_dele});
    staff.deleteOne({ IdStaff: id_Staff_dele }, function (err) {
        if (err) {
            res.json({ result: 0 });
        } else {
            res.json({ result: 1 });
        }
    });
}
