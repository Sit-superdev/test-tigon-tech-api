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

exports.testPusher = async (req, res) => {
  try {
    const { items } = req.body;
    const result = items;
    let data = {
      "NODE_ENV": process.env.NODE_ENV,
      "PUSHER_APP_ID": process.env.PUSHER_APP_ID,
      "PUSHER_KEY": process.env.PUSHER_KEY,
      "PUSHER_SECRET": process.env.PUSHER_SECRET,
      "PUSHER_CLUSTER": process.env.PUSHER_CLUSTER,
      "PUSHER_USE_TLS": process.env.PUSHER_USE_TLS
    }
    res.status(200).json({ success: true, data });
  } catch (error) {
    console.error("Error in spinRandom controller:", error);
    res.status(500).json({ success: false, message: "เกิดข้อผิดพลาดในการหมุนสุ่ม" });
  }

}