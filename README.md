# Tigon Tech Backend API

API สำหรับ Tigon Tech ที่พัฒนาด้วย Node.js และ Express

## การติดตั้ง

1. ทำการโคลนโปรเจค
```
git clone https://github.com/yourusername/test-tigon-tech-backend.git
cd test-tigon-tech-backend
```

2. ติดตั้ง dependencies
```
npm install
```

3. กำหนดค่าในไฟล์ .env
```
PORT=9000
NODE_ENV=development
MONGODB_URI=mongodb://localhost:27017/tigon-tech
JWT_SECRET=your_jwt_secret_key_here
```

## การใช้งาน

### การรันแอปพลิเคชันในโหมดพัฒนา
```
npm run dev
```

### การรันแอปพลิเคชันในโหมดปกติ
```
npm start
```

## โครงสร้างโปรเจค

```
├── app.js          # จุดเริ่มต้นของแอปพลิเคชัน
├── package.json    # ไฟล์แพ็คเกจ
├── .env            # ไฟล์สำหรับเก็บค่าคอนฟิก
├── config/         # โฟลเดอร์เก็บไฟล์คอนฟิก
│   └── database.js # ไฟล์คอนฟิกสำหรับการเชื่อมต่อฐานข้อมูล
├── controllers/    # โฟลเดอร์เก็บ controllers
│   └── indexController.js
├── models/         # โฟลเดอร์เก็บ models
├── public/         # โฟลเดอร์เก็บไฟล์ static
│   ├── css/
│   ├── js/
│   └── images/
├── routes/         # โฟลเดอร์เก็บ routes
│   └── index.js
└── services/       # โฟลเดอร์เก็บ services
    └── indexService.js
```

## API Endpoints

- GET / - หน้าหลักของ API
- GET /status - แสดงสถานะของเซิร์ฟเวอร์
- GET /api - แสดงรายการ API ทั้งหมด

## พัฒนาโดย

[ชื่อของคุณ] 