const {model, Schema} = require('mongoose');

const cvReferenceSchema = new Schema(
    {
    Name: String,
    cvId: String
    }
)

const profileSchema = new Schema(
    {
        FirstName: {
            type: String,
        },

        SecondName: {
            type: String,
        },

        Surname: {
            type: String,
        },

        email: {
            type: String,
        },
        
        ProfilePic: {
            type: String,
        },

        CvsCreated: {
            type: Number,
            default: 0
        },

        Cvs: [cvReferenceSchema],

        userId: {
            type: String,
        }
    },

    {
      timestamps: true,
    }
)


module.exports = model("Profile", profileSchema);