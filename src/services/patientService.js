const Booking = require("../models/booking");
const User = require("../models/user");

const postBookAppointmentService = async (data) => {
    try {
        // Kiểm tra xem email có được cung cấp không
        if (!data.email) {
            return {
                data: null,
                errCode: 1,
                errMessage: 'Email không được cung cấp'
            };
        }

        // Tìm người dùng theo email
        let user = await User.findOne({ email: data.email });
        
        // Nếu không tìm thấy người dùng, tạo người dùng mới
        if (!user) {
            // Kiểm tra xem có đủ thông tin để tạo người dùng mới không
            if (!data.name || !data.password) {
                return {
                    data: null,
                    errCode: 1,
                    errMessage: 'Tên và mật khẩu là bắt buộc để tạo người dùng mới'
                };
            }

            user = await User.create({ 
                email: data.email, 
                password: data.password, // Cung cấp password
                name: data.name,         // Cung cấp name
                roleId: 'R3' 
            });
        }

        // Kiểm tra xem người dùng đã có lịch hẹn chưa
        const existingBooking = await Booking.findOne({ patientId: user._id }).select('-_id -patientId -doctorId');

        if (!existingBooking) {
            // Tạo bản ghi mới nếu không tìm thấy lịch hẹn
            const newBooking = await Booking.create({
                statusId: data.statusId || 'New', // Sử dụng statusId từ data hoặc mặc định là 'New'
                doctorId: data.doctorId,
                patientId: user._id,
                date: data.date,
                timeType: data.timeType
            });

            return {
                data: newBooking,
                errCode: 0,
                errMessage: 'Lưu thông tin cho bác sĩ thành công!'
            };
        } else {
            return {
                data: null,
                errCode: 1,
                errMessage: 'Người dùng đã có lịch hẹn!'
            };
        }
    } catch (error) {
        return {
            data: null,
            errCode: 1,
            errMessage: 'Lỗi khi lưu người dùng: ' + error.message
        };
    }
};

module.exports = {
    postBookAppointmentService
};