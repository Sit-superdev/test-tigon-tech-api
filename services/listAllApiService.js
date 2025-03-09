exports.getAvailableApis = async () => {
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
  ];
}; 