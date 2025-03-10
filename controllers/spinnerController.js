const pusher = require("../config/pusher");

exports.spinWheel = async (req, res) => {
  try {
    const { degrees } = req.body;
    pusher.trigger("spinner", "spin-wheel", degrees);

    res.status(200).json({ success: true });
  } catch (error) {
    console.error("Error in spinWheel controller:", error);
    res.status(500).json({ success: false, message: "ในการหมุนสุ่ม" });
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
    res.status(500).json({ success: false, message: "ในการเพิ่มคน" });
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
    res.status(500).json({ success: false, message: "ในการเพิ่มรางวัล" });
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
    res.status(500).json({ success: false, message: "ในการอัพเดตคน" });
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
    res.status(500).json({ success: false, message: "ในการลบคน" });
  }
};


exports.removeReward = async (req, res) => {
  try {
    const { items } = req.body;
    const result = items;
    pusher.trigger("spinner", "remove-reward", items);

    res.status(200).json({ success: true, result });
  } catch (error) {
    console.error("Error in spinRandom controller:", error);
    res.status(500).json({ success: false, message: "ในการลบรางวัล" });
  }
};
