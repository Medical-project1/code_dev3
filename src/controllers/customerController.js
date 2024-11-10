const { uploadSingleFile } = require("../services/fileServices");
const { createCustomerService ,createArrayCustomerService,getCustomerService,updateUserService,deleteACustomerService} = require('../services/customerService');
const joi = require('joi')
const aqp = require('api-query-params');
const Joi = require("joi");
// {key: value}
module.exports = {
    postCreateCustomer: async (req, res) => {
        let { name, address, phone, email, description } = req.body;
        const schema = Joi.object({
            name: Joi.string()
                .alphanum()
                .min(3)
                .max(30)
                .required(),
            address:Joi.string(),   
            phone:Joi.string().pattern(new RegExp('^[0-9]{8,11}$')),
            email:Joi.string().email().email(),
            description:Joi.string(),
        })
        const {error} = schema.validate(req.body,{abortEarly:false});
        
        if (error){
            return error
        }else{
        let imageUrl = "";

        // image: String,
        if (!req.files || Object.keys(req.files).length === 0) {
            //do nothing
        } else {
            let result = await uploadSingleFile(req.files.image);
            imageUrl = result.path;
        }

        let customerData = {
            name,
            address,
            phone,
            email,
            description,
            image: imageUrl
        }
        let customer = await createCustomerService(customerData);

        return res.status(200).json(
            {
                EC: 0,
                data: customer
            }
            
        )
    }
    },
    postCreateArrayCustomer:async(req,res) =>{
       let customers = await createArrayCustomerService(req.body.customers);
       if(customers){
          return res.status(200).json(
            {
                EC: 0,
                data: customers
            }
        )
       }else{
        return res.status(200).json(
            {
                EC: -1,
                data: customers
            }
        )
       }
    
    },
    getAllCustomer : async(req,res) =>{
    
    let limit=req.query.limit;
    let page = req.query.page;
    let name = req.query.name;
    let result = null;
    if(limit&&page){
       result = await getCustomerService(limit,page,name,req.query);
    }else
    result=await getCustomerService()
    return res.status(200).json(
        {
            EC: 0,
            data: result
        }
    )
 },
 putUpdateCustomer:async(req,res) =>{
    let { id, name, email, address } = req.body;
    let customer=await updateUserService(id, name, email, address);
    return res.status(200).json({
        EC:0,
        data:customer
    })
 },
 deleteACustomer:async(req,res) =>{
    let id = req.body.id;
    let customer = await deleteACustomerService(id);
    return res.status(200).json({
        EC:0,
        data:customer
    })
 },
deleteArrayCustomer:async(req,res) =>{
    let ids=req.body.customersId;
    console.log(" check ids: ",ids)
    let result = await this.deleteArrayCustomerService(ids);
    return res.status(200).json({
        EC:0,
        data:result
    })
}
}


