const pusher = require("../config/pusher");

exports.spinWheel = async (req, res) => {
  try {
    console.log(req.body, "req.body");
    const { degrees } = req.body;
    pusher.trigger("spinner", "spin-wheel", degrees);

    res.status(200).json({ success: true });
  } catch (error) {
    console.error("Error in spinWheel controller:", error);
  }
};

exports.addPeople = async (req, res) => {
  try {
    const { items } = req.body;
    const result = items;
    pusher.trigger("spinner", "add-people", items);

    res.status(200).json({ success: true, result });
  } catch (error) {
    console.error("Error in spinRandom controller:", error);
    res.status(500).json({ success: false, message: "เกิดข้อผิดพลาดในการหมุนสุ่ม" });
  }
};

exports.addReward = async (req, res) => {
  try {
    const { items } = req.body;
    const result = items;
    pusher.trigger("spinner", "add-reward", items);

    res.status(200).json({ success: true, result });
  } catch (error) {
    console.error("Error in spinRandom controller:", error);
    res.status(500).json({ success: false, message: "เกิดข้อผิดพลาดในการหมุนสุ่ม" });
  }
};

exports.updatePeople = async (req, res) => {
  try {
    const { items } = req.body;
    const result = items;
    pusher.trigger("spinner", "update-people", items);

    res.status(200).json({ success: true, result });
  } catch (error) {
    console.error("Error in spinRandom controller:", error);
    res.status(500).json({ success: false, message: "เกิดข้อผิดพลาดในการหมุนสุ่ม" });
  }
};

exports.removePeople = async (req, res) => {
  try {
    const { items } = req.body;
    const result = items;
    pusher.trigger("spinner", "remove-people", items);

    res.status(200).json({ success: true, result });
  } catch (error) {
    console.error("Error in spinRandom controller:", error);
    res.status(500).json({ success: false, message: "เกิดข้อผิดพลาดในการหมุนสุ่ม" });
  }


  
};
