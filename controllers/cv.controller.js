const httpError = require('http-errors');
const {CV} = require('../models/cv.model');

const createCv = async (req, res, next) => {
    try{
        const { body } = req;
        const userID = req.user._id;
        const newCv = await new CV(body);
        newCv.userId = userID;
        const savedCv = await newCv.save();

        if(!savedCv) throw httpError(500, "User not Created");

        res.status(201).json({ message: "User Created", data: savedCv});

    } catch(error) {
        next(error)
    }
}

const getCvs = async (req, res, next) => {
    try{

        const {page} = req.params || 0;
        const {limit} = req.params || 10;

        const Cvs = await CV.find()
        .skip(page*limit)
        .limit(limit);

        if(!Cvs) throw httpError(404, "No users found");
        res.status(200).json({ message:"Users Found", data: Cvs});

    } catch(error) {
        next(error);
    }
}

const getOneCv = async (req, res, next) => {
    try{
        const { id } = req.params;
        const cv = await CV.findById(id);
        if(!cv) throw httpError(404, "User not found");
        res.status(200).json({data: cv});
    } catch(error) {
        next(error)
    }
}

const updateCv = async (req, res, next) => {
    try{
        const user_id = req.user._id
        const { body } = req;
        const cv = await CV.find({user_id});
        if(!cv) throw httpError(404, "User not found");

        const updatedCv =  await CV.findOneAndUpdate(id, body, {new: true})

        if(!updatedCv) throw httpError(500, "User not found");
        res.status(200).json({message: "User Updated", data: updatedCv});

    } catch(error) {
        next(error)
    }
}

module.exports = {
    createCv,
    getCvs,
    getOneCv,
    updateCv
}