const listAllApiService = require("../services/listAllApiService");

exports.getAllApis = async (req, res) => {
  try {
    const apis = await listAllApiService.getAvailableApis();
    res.status(200).json({ success: true, count: apis.length, data: apis });
  } catch (error) {
    console.error("Error in getAllApis controller:", error);
    res.status(500).json({ success: false, message: "เกิดข้อผิดพลาดในการดึงรายการ API" });
  }
};
