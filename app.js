const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
require('dotenv').config();


const app = express();

// กำหนดค่า middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// เชื่อมต่อกับฐานข้อมูล (อาจจะทำการคอมเมนต์ไว้หากยังไม่ต้องการใช้งาน)
// database.connect();

const PORT = process.env.PORT || 9000;

// นำเข้า routes
const indexRoute = require('./routes/index');
// ตัวอย่างการนำเข้า routes อื่นๆ (อาจจะทำการคอมเมนต์ไว้หากยังไม่ได้สร้าง)
// const usersRoute = require('./routes/users');
// const productsRoute = require('./routes/products');


app.use('/', indexRoute);



// จัดการกับ 404 Not Found
app.use((req, res, next) => {
  res.status(404).json({ message: 'Route not found' });
});

// จัดการกับ Error
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ 
    message: 'Something went wrong!',
    error: process.env.NODE_ENV === 'production' ? {} : err
  });
});

// เริ่มต้นเซิร์ฟเวอร์
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
