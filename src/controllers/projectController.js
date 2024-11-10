const {createProject,getProject,updateProjectService, deleteProjectService} = require('../services/productService')
module.exports={
    postCreateProject:async(req,res) =>{
        let result =await createProject(req.body);
        return res.status(200).json(
            {
                EC:0,
                data:result
            }
        )
    },
    getAllProject:async(req,res) =>{
        let result = await getProject(req.query)
        return res.status(200)({
            EC:0,
            data:result
        })
    },
    updateProject:async(req,res) =>{
        let{id,name,endDate}=req.body;
        let project = await updateProjectService(id,name,endDate)
        return res.status(200).json({
            EC:0,
            data:project
        })
    },
    deleteProject:async (req,res) =>{
        let{id}=req.body
        let project=await deleteProjectService(id)
        return res.status(200).json({
            EC:0,
            data:project
        })
    }
}