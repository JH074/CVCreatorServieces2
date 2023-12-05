const httpError = require('http-errors');
const Profile = require('../models/profile.model');

const createProfile = async (req, res, next) => {
    try{
        const { body } = req;
        const userID = req.user._id;
        const newProfile = await Profile.create({FirstName: body.FirstName, SecondName: body.SecondName, Surname: body.Surname, 
            userId: userID, email: body.email});
        const savedProfile = await newProfile.save();

        if(!savedProfile) throw httpError(500, "Profile not Created");

        res.status(201).json({ message: "Profile Created", data: savedProfile});

    } catch(error) {
        next(error)
    }
}

const getProfiles = async (req, res, next) => {
    try{

        const {page} = req.params || 0;
        const {limit} = req.params || 10;

        const Profiles = await Profile.find()
        .skip(page*limit)
        .limit(limit);

        if(!Profiles) throw httpError(404, "No Profiles found");
        res.status(200).json({ message:"Profiles Found", data: Profiles});

    } catch(error) {
        next(error);
    }
}

const getOneProfile = async (req, res, next) => {
    try{
        const user_id = req.user._id
        const profile = await Profile.find({user_id});
        if(!profile) throw httpError(404, "Profile not found");
        res.status(200).json({data: profile});
    } catch(error) {
        next(error)
    }
}

const updateProfile = async (req, res, next) => {
    try{
        const user_id = req.user._id
        const { body } = req;
        const profile = await Profile.find({user_id});
        if(!profile) throw httpError(404, "Profile not found");

        const updatedProfile =  await Profile.findOneAndUpdate(user_id, body, {new: true})

        if(!updatedProfile) throw httpError(500, "Profile not found");
        res.status(200).json({message: "Profile Updated", data: updatedProfile});
    } catch(error) {
        next(error)
    }
}

const deleteOneProfile = async(req, res, next) => {
    try{
        const user_id = req.user._id
        const profile = await Profile.find({user_id});

        if(!profile) throw httpError(404, "Profile not found");

        const deletedProfile = await Profile.findOneAndDelete(id);

        if(!deletedProfile) throw httpError(500, "“Profile not deleted”");

        res.status(200).json({message: "Profile deleted", data: deletedMovie});

    }catch(error){
        next(error);
    }
}

module.exports = {
    createProfile,
    getProfiles,
    getOneProfile,
    updateProfile,
    deleteOneProfile   
}