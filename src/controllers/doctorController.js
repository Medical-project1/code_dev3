const { uploadSingleFile } = require("../services/fileServices");
const { createDoctorService } = require("../services/doctorService");
module.exports = {
  postCreateDoctor: async (req, res) => {
    const {name,email,password,phone,gender,roleid,specialty,experience,rating} = req.body;
    const data = await createDoctorService(name,email,password,phone,gender,roleid,specialty,experience,rating);
    return res.status(200).json(data);
    //         let{name,specialty,experience,rating} = req.body;
    //         let imageUrl= "";
    //         //image với files
    //         if(!req.files || Object.keys(req.files).length === 0) {
    //             //do nothing
    //         } else{
    //             let result=await uploadSingleFile(req.files.image);
    //             imageUrl=result.path;
    //         }
    //         let doctorData = {
    //             name,
    //             specialty,
    //             experience,
    //             rating,
    //             image:imageUrl
    //         }
    //         let doctor = await createDoctorService(doctorData);
    //         return res.status(200).json(
    //             {
    //                 EC:0,
    //                 data:doctor
    //             }
    //         )
  },
};
