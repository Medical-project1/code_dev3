
const path = require("path")
const uploadSinglefile = async(fileObject) =>{
    
    let uploadPath =path.resolve(__dirname,"../public/image/upload");
    //get image extension
    let extName=path.extname(fileObject.name);
    //get image name
    let baseName = path.basename(fileObject.name,extName);
    //create final path
    let finalName = `${baseName}-${Date.now()}${extName} `
    let finalPath = `${uploadPath}/${finalName}`;
    try {
      await fileObject.mv(finalPath)
      return{
        status:'success',
        path:'finalName',
        error:null
      }
    } catch (error) {
      console.log(">>check err: ",error)
      return {
          status:'failed',
          path:null,
          error:JSON.stringify(error)
      }
    }
}
const uploadMultiplefile =async (fileArr) =>{
  try {
    let uploadPath = path.resolve(__dirname,"../public/image/upload");
    let resultArr=[];
    let countSuccess=0;
    for(let i=0;i<fileArr.length;i++) {
      let extName = path.extname(fileArr[i].name);
      let baseName = path.basename(fileArr[i].name,extName);
      let finalName= `${baseName}-${Date.now()}${extName}`
      let finalPath= `${uploadPath}/${finalName}`;
      try {
        await fileArr[i].mv(finalPath);
        resultArr.push({
            status:'success',
            path:finalName,
            fileName:fileArr[i].name,
            error:null 
        })
        countSuccess++;
      } catch (err) {
        resultArr.push({
          status:'failed',
          path:null,
          fileName:fileArr[i].name,
          error:JSON.stringify(err)
        })
      }
    }
    return {
      countSuccess:countSuccess,
      detail:resultArr
    }
  } catch (error) {
     console.log(error)
  }
}
module.exports ={
    uploadMultiplefile,uploadSinglefile
}