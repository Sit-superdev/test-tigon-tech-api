const welcomeService = require("../services/welcomeService");

exports.getHomePage = async (req, res) => {
  try {
    const message = await welcomeService.getWelcomeMessage();
    res.status(200).json({ success: true, message });
  } catch (error) {
    console.error("Error in getHomePage controller:", error);
    res.status(500).json({ success: false, message: "เกิดข้อผิดพลาดในการเรียกหน้าหลัก" });
  }
};
