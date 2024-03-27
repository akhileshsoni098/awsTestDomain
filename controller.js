const TestModel = require("./model");

exports.createdata = async (req, res) => {
  try {
    const data = req.body;
    const saveData = await TestModel.create(data);

    res.status(201).json(saveData);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};

exports.getdata = async (req, res) => {
  try {
    const allData = await TestModel.find();

    res.status(200).json({ data: allData });
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};
