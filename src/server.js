const express = require("express");
const path = require("path");
require("dotenv").config();
const configViewEngine = require("./config/viewEngine");
const fileUpload = require("express-fileupload");
const webroutes = require("./routes/web.js");
const apiroutes = require("./routes/api.js");
const app = express();
const port = process.env.PORT || 8888;
const hostname = process.env.HOST_NAME;
const connection = require("./config/Database.js");
const { MongoClient } = require("mongodb");
const mongoose = require("mongoose");
const cors = require("cors");
const multer = require('multer');
const fs = require("fs");
const Avatar = require("./models/uploadAvatar.js");  // Đảm bảo dùng đúng tên model

// Cấu hình middleware
app.use(cors());
const uploadDir = path.join(__dirname, "public/image");

// Tạo thư mục nếu chưa tồn tại
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

// Cấu hình Multer
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadDir); // Lưu file vào thư mục `public/image`
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + "-" + file.originalname;
    cb(null, `file_${uniqueSuffix}`);
  },
});

const upload = multer({ storage });

// Route upload file
app.post("/upload", upload.single("file"), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: "Không có file nào được tải lên." });
    }

    // Lưu ảnh vào MongoDB
    const newAvatar = await Avatar.create({ image: req.file.filename });
    res.json({
      message: "Upload thành công",
      data: newAvatar,  // Trả về đối tượng chứa tên file ảnh
    });
  } catch (err) {
    console.error("Lỗi khi upload file:", err);
    res.status(500).json({ message: "Lỗi khi upload file", error: err.message });
  }
});

// Lấy danh sách ảnh
app.get('/getImage', async (req, res) => {
  try {
    const avatars = await Avatar.find();
    res.json(avatars || []); // Trả về mảng rỗng nếu không có dữ liệu
  } catch (err) {
    console.error("Lỗi khi lấy ảnh:", err);
    res.status(500).json({ message: "Lỗi khi lấy ảnh", error: err.message });
  }
});

// Cấu hình static để phục vụ file ảnh
app.use("/image", express.static(path.join(__dirname, "public/image")));

// Config template engine
configViewEngine(app);

// Config body parsing middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Route cho các API và views khác
app.use("/1", webroutes);
app.use("/v1/api", apiroutes);

// Kiểm tra kết nối DB
const startServer = async () => {
  try {
    await connection();
    const url = process.env.DB_HOST;
    const client = new MongoClient(url);
    const dbName = process.env.DB_NAME;
    await client.connect();
    console.log("connected successfully to server");
    app.listen(port, hostname, () => {
      console.log(`App listening at http://${hostname}:${port}`);
    });
  } catch (error) {
    console.log("Error connecting to DB:", error);
  }
};

startServer();
