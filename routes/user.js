const router = require("express").Router();
const User = require("../models/User");


router.post("/create", async (req, res, next) => {
    try {
        const {name, email, age, phone, gender} = req.body;
        const userObject = User({
            name,
            email,
            age,
            phone,
            gender
        });

        await userObject.save();
        res.status(201).json({
            success: true,
            data: userObject
        });
    } catch (err) {
        res.status(500).json(err.message);
    }
});

router.get("/get-user/:id", async (req, res, next) => {
    try {
        const fetchedUser = await User.findById(req.params.id);
        if (fetchedUser) {
            res.status(200).json({
                success: true,
                fetchedUser
            });
        } else {
            res.status(404).json({
                success: false,
                message: "user not found!!!"
            })
        }
    } catch (err) {
        res.status(500).json(err.message);
    }
});

router.put("/update/:id", async (req, res, next) => {
    try {
        const fetchedUser = await User.findById(req.params.id);
        if (fetchedUser) {
            const updatedObject = {
                name: req.body.name === undefined ? fetchedUser.name : req.body.name,
                email: req.body.email === undefined ? fetchedUser.email : req.body.email,
                age: req.body.age === undefined ? fetchedUser.age : req.body.age,
                phone: req.body.phone === undefined ? fetchedUser.phone : req.body.phone,
                gender: req.body.gender === undefined ? fetchedUser.gender : req.body.gender
            };
            await User.findByIdAndUpdate(req.params.id, updatedObject, {new: true});
            res.status(201).json({
                success: true,
                updatedObject,
                message: "user updated successfully!!!"
            })
        } else {
            res.status(404).json({
                success: false,
                message: "user not found!!!"
            });
        }
    } catch (err) {
        res.status(500).json(err.message);
    }
});

router.delete("/delete/:id", async (req, res, nexy) => {
    try {
        const fetchedUser = await User.findById((req.params.id));
        if (fetchedUser) {
            await User.findByIdAndDelete(req.params.id);
            res.status(200).json({
                success: true,
                message: "user deleted  successfully!!!"
            })
        }
        else{
            res.status(404).json({
                success: false,
                message: "user not found!!!"
            })
        }
    } catch (err) {
        res.status(500).json(err.message);
    }
})


module.exports = router;