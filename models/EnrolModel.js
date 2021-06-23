const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const enrolTemplate = new Schema(
    {
        courseNo: {
            type: Number,
            required: true
        },
        fullName: {
            type: String,
            required: true
        },
        email:{
            type: String,
            required: true,
        },
        password:{
            type:String,
            required: true
        },
        childName:{
            type:String,
            required: true
        },
        childBirthDate:{
            type:Date,
            required: true
        },
        childSchool:{
            type:String,
            required: true
        },
        childCodingExp:{
            type:Boolean,
            required: true
        },
        childScratchExp:{
            type:Boolean,
            required: true
        },
        dateCreated:{
            type:Date,
            default:Date.now
        },
    },
)


const Enrol = mongoose.model("userTable", enrolTemplate);
module.exports = Enrol;