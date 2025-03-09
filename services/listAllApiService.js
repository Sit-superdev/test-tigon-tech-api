exports.getAvailableApis = async () => {
  // ในสถานการณ์จริง อาจจะดึงข้อมูลจากฐานข้อมูลหรือไฟล์คอนฟิก
  return [
    {
      path: '/',
      method: 'GET',
      description: 'หน้าหลักของ API'
    },
    {
      path: '/api',
      method: 'GET',
      description: 'แสดงรายการ API ทั้งหมดที่มีในระบบ'
    }
    // สามารถเพิ่มรายการ API อื่นๆ ได้ตามต้องการ
  ];
}; 