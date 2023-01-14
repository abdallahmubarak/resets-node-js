const prouductModel = require(`../model/vendor`);

exports.addVendor = async (req, res) => {
  try {
    const { name,imgVendor } = req.body;
    await prouductModel.insertMany({name,imgVendor});
    res.status(201).json({ message: "vendor added" });
  } catch (error) {
    res.status(500).json({ message: "catch error in vendor" });
  }
};
