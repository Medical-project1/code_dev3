const Markdown = require("../models/markdown")
const createMarkdownService = async(data)=>{
    try {
        const{doctorId,clinicId,specialtyId,contentHTML,contentMarkdown,description} = data
        let result = await Markdown.create({
            doctorId,clinicId,specialtyId,contentHTML,contentMarkdown,description
        })
        return result;
    } catch (error) {
        console.log(error);
        return {
          EC: 1,
          EM: "lỗi"
        };
    }
}
module.exports = {
    createMarkdownService
}