const AppointDb = require('./AppointmentsDB');


module.exports.AppountmentsPage = async (req,res) => {
    const treatment = req.query.Treatment             //getting the parameter Treatment from react
    res.json(await AppointDb.AppointmentsPageJson(treatment))   //sending the parameter to DB 
}


