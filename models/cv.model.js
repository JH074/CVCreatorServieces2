const {model, Schema} = require('mongoose');

const workExperienceSchema = new Schema(
    {
        Position: String,
        CompanyName: String,
        City: String,
        FromDate: Date,
        ToDate: Date, 
    }
)

const educationSchema = new Schema(
    {
        //Nombre de institucion Educativa
        Institution: String,
        //Nombre del titulo recibido
        Title: String,
        FromDate: Date,
        ToDate: Date 
    }
)

const skillSchema = new Schema(
    {
        Name: String,
        //Un numero de 1 al 5, que corresponda su proficiencia
        Profiency: Number
    }
)

const languageSchema = new Schema(
    {
        Name: String,
        //Un numero de 1 al 5, que corresponda su proficiencia
        Profiency: Number
    }
)

const certificationSchema = new Schema(
    {
        Name: String,
        City: String,
        Institution: String,
        StartDate: Date
    }
)

const cvSchema = new Schema(
    {
        FirstName: String,
        MiddleName: String,
        Surname2: String,
        Job: String,
        Email: String,
        Phone: Number,
        Description: String,
        Userid: String,
        Experience: [workExperienceSchema],
        Education: [educationSchema],
        Skill: [skillSchema],
        Language: [languageSchema],
        Certification: [certificationSchema]
    }
);



const CV = model("CV", cvSchema);

module.exports = {
    CV,
}