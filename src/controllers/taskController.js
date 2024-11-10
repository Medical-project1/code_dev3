const{createTaskService,getTaskService,updateTaskService,deleteTaskService} = require("../services/taskServices")
module.exports={
    postCreateTask:async(req,res) =>{
        let result = await createTaskService(req.body);
        return res.status(200).json({
            EC:0,
            data:result
        })
    },
    getAllTask:async(req,res) =>{
        let result = await getTaskService(req.query);
        return res.status(200).json({
            EC:0,
            data:result
        })
    },
    updateTask:async(req,res) =>{
        let{id,name,description,status,endDate}=req.body;
        let task = await updateTaskService(id,name,description,status,endDate)
        return res.status(200).json({
            EC:0,
            data:task
        })
    },
    deleteTask:async (req,res) =>{
        let{id}=req.body
        let project=await deleteTaskService(id)
        return res.status(200).json({
            EC:0,
            data:task
        })
    }
 }
