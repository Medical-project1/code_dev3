const Project = require('../models/project')
const aqp=require('api-query-params')
module.exports ={
    createProject:async(data)=>{
        if(data.type === "EMPTY-PROJECT"){
            let result= await Project.create(data);
            return result
        }
        if(data.type==="ADD-USERS"){
            console.log(data)
            //find project by id
            let myProject = await Project.findById(data.projectId).exec();
            for(let i =0;i<data.usersArr.length;i++){
                myProject.usersInfor.push(data.usersArr[i])
            }
            let newResult = await myProject.save()
            console.log(myProject)
            return newResult
        }
        if(data.type === "REMOVE-USERS"){
            let myProject = await Project.findById(data.projectId).exec();
            for(let i=0;i<data.usersArr.length;i++){
                myProject.usersInfor.pull(data.usersArr[i])
            }
            let newResult = await myProject.save();
            return newResult
        }
        return null
    },
    getProject: async(queryString) =>{
        const page=queryString.page;
        const{filter,limit}=aqp(queryString);
        console.log("before",filter)
        delete filter.page;
        console.log("after",filter)
        let offset = (page-1)*limit;
        result=await Project.find(filter).populate(population).skip(offset).limit(limit).exec();
        return result
    },
    updateProjectService:async(id,name,endDate) =>{
        try {
            let results = await Project.updateOne({_id:id},{name,endDate})
            return results
        } catch (error) {
            console.log(error)
            return null; 
        }
    },
    deleteProjectService:async(id) =>{
        try {
            let results=await Project.deleteById(id)
            return results
        } catch (error) {
            console.log(error)
            return null;
        }
    }
}