const { request } = require("express");
const express = require("express");
const router = express.Router();
const enrolSchema = require('../models/EnrolModel');
const userSession = require('../models/UserSession');

router.post('/enrol',(req, res)=> { 
    const enrolUser = new enrolSchema({
        courseNo: req.body.courseNo,
        fullName: req.body.fullName,
        email: req.body.email,
        password: req.body.password,
        childName: req.body.childName,
        childBirthDate: req.body.childBirthDate,
        childSchool: req.body.childSchool,
        childCodingExp: req.body.childCodingExp,
        childScratchExp: req.body.childScratchExp
    })
    enrolUser.save()
    .then(data =>{
        res.json(data)
    })
    .catch(error => {
        res.json(error)
    })
})

router.post("/login", (req, res) => {
  enrolSchema.findOne({'email': req.body.email})
    .then((result) => {
        if(result.password === req.body.password){
            res.send('Password OK')
        } else {res.send('Password Incorrect')}
    })
    .catch((err) => {
      res.send('Email is not registered');
    });
});
    
module.exports = router