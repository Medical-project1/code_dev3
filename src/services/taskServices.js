const Project = require('../models/project');
const Task = require('../models/task')
const aqp=require('api-query-params')
module.exports ={
    createTaskService:async(data)=>{
        if(data.type === "EMPTY-TASK"){
            let result = await Task.create(data);
            return result
        }
        if(data.type==="ADD-TASK"){
            let myProject=await Project.findById(data.projectId).exec();
            for(let i=0;i<data.taskArr.length;i++){
                myProject.tasks.push(data.taskArr[i])
            }
            let newResult = await myProject.save();
            return newResult 
        }
        if(data.type === "REMOVE-USERS"){
            let myProject= await Project.findById(data.projectId).exec();
            for(let i=0;i<data.usersArr.length;i++){
                myProject.usersInfor.pull(data.userArr[i])
            }
            let newResult = await myProject.save();
            return newResult
        }
        return null
    },
    getAllTaskService:async(queryString) =>{
        const page=queryString.page;
        const{filter,limit}=aqp(queryString);
        console.log("before",filter)
        delete filter.page;
        console.log("after",filter)
        let offset = (page-1)*limit;
        result=await Project.find(filter).populate(population).skip(offset).limit(limit).exec();
        return result
    },
    updateTaskService:async(id,name,endDate) =>{
        try {
            let results = await Task.updateOne({_id:id},{...data})
            return results
        } catch (error) {
            console.log(error)
            return null; 
        }
    },
    deleteTaskService:async(id) =>{
        try {
            let results=await Task.deleteById(id)
            return results
        } catch (error) {
            console.log(error)
            return null;
        }
    }
}