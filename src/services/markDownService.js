const Markdown = require("../models/markdown")
const DoctorInfo = require("../models/doctorinfo");

const createMarkdownService = async (inputData) => {
    try {
        // Kiểm tra dữ liệu đầu vào
        if (!inputData.doctorId || !inputData.contentMarkdown || !inputData.contentHTML || !inputData.action
            || !inputData.selectedPrice || !inputData.selectedPayment || !inputData.selectProvince
            || !inputData.nameClinic || !inputData.addressClinic || !inputData.note) {
            return {
                error: 1,
                message: "Thiếu thông tin cần thiết"
            };
        } else {
            if (inputData.action === 'CREATE') {
                // Tạo mới Markdown
                await Markdown.create({
                    contentHTML: inputData.contentHTML,
                    contentMarkdown: inputData.contentMarkdown,
                    description: inputData.description,
                    doctorId: inputData.doctorId
                });
            } else if (inputData.action === 'EDIT') {
                // Cập nhật Markdown
                let doctorMarkdown = await Markdown.findOne({ doctorId: inputData.doctorId });
                if (doctorMarkdown) {
                    doctorMarkdown.contentHTML = inputData.contentHTML;
                    doctorMarkdown.contentMarkdown = inputData.contentMarkdown;
                    doctorMarkdown.description = inputData.description;
                    await doctorMarkdown.save();
                }
            }

            // Tìm thông tin bác sĩ
            let doctorInfo = await DoctorInfo.findOne({ doctorId: inputData.doctorId });
            if (doctorInfo) {
                // Cập nhật thông tin bác sĩ
                doctorInfo.priceId = inputData.selectedPrice;
                doctorInfo.provinceId = inputData.selectProvince;
                doctorInfo.paymentId = inputData.selectedPayment;
                doctorInfo.nameClinic = inputData.nameClinic;
                doctorInfo.addressClinic = inputData.addressClinic; // Cập nhật địa chỉ phòng khám
                doctorInfo.note = inputData.note;
                await doctorInfo.save();
            } else {
                // Tạo mới thông tin bác sĩ
                await DoctorInfo.create({
                    doctorId: inputData.doctorId,
                    priceId: inputData.selectedPrice,
                    provinceId: inputData.selectProvince,
                    paymentId: inputData.selectedPayment,
                    nameClinic: inputData.nameClinic,
                    addressClinic: inputData.addressClinic, // Thêm địa chỉ phòng khám
                    note: inputData.note
                });
            }

            return {
                error: 0,
                message: 'Tạo thông tin bác sĩ thành công!'
            };
        }
    } catch (error) {
        console.log(error);
        return {
            error: 1,
            message: "Đã xảy ra lỗi"
        };
    }
};
const updateMarkdownServices=async(doctorId,clinicId,specialtyId,contentHTML,contentMarkdown,description)=>{
    try {
        const results = await Markdown.updateOne({_id:id},
            {doctorId,clinicId,specialtyId,contentHTML,contentMarkdown,description}
        )
        return results
    } catch (error) {
        console.log(error);
        return null
    }
}
module.exports = {
    createMarkdownService,updateMarkdownServices
}