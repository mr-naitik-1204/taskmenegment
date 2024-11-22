const UserModal = require('../modal/UserModal')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.Singupdata = async (req, res) => {
    try {
        req.body.password = await bcrypt.hash(req.body.password, 10)
        const data = await UserModal.create(req.body)

        res.status(200).json({
            status: "success",
            Message: 'user create succesfullly',
            data: data
        })
    } catch (error) {
        res.status(404).json({
            status: 'fail',
            Message: error.Message
        })
    }
}


exports.Logindata = async (req, res) => {
    try {
        const logindata = await UserModal.findOne({ email: req.body.email });
        if (!logindata) throw new Error("Invalid email");

        const verypassword = await bcrypt.compare(req.body.password, logindata.password);
        if (!verypassword) throw new Error('Invalid password');

        const token = jwt.sign({ id: logindata._id }, "kamrej");

        res.status(200).json({
            status: "success",
            message: "User logged in successfully",
            data: logindata,
            token
        });

    } catch (error) {
        res.status(400).json({
            status: 'fail',
            message: error.message 
        });
    }
};