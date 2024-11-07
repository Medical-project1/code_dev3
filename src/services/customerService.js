const Customer = require("../models/customer");

const createCustomerService = async (customerData) => {  // Sửa lỗi tên hàm
    try {
        let results = await Customer.create({
            name: customerData.name,
            address: customerData.address,
            phone: customerData.phone,
            email: customerData.email,
            description: customerData.description,
            image: customerData.image
        });
        return results;
    } catch (error) {
        console.log(error);
        return null;
    }
}

module.exports = {
    createCustomerService  // Export đúng tên hàm
}
