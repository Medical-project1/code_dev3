const Markdown = require("../models/markdown")
const{createMarkdownService} = require("../services/markDownService")
const postmarkdown= async(req,res)=>{
    try {
        const{doctorId,clinicId,specialtyId,contentHTML,contentMarkdown,description} = req.body
        const data = {
            doctorId,clinicId,specialtyId,contentHTML,contentMarkdown,description
        }
        let markdown = await createMarkdownService(data)
        if (!markdown) {
            return res.status(400).json({
              EC: 1,
              EM: "Người dùng đã tồn tại hoặc thông tin không hợp lệ"
            });
          }
          return res.status(200).json({
            EC: 0,
            data: markdown
          });
    } catch (error) {
       return res.status(400).json({
        message:error.message
       }) 
    }
}
module.exports = {
    postmarkdown
}