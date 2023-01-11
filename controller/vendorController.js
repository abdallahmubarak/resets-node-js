const prouductModel = require(`../model/vendor`);

exports.addVendor = async (req, res) => {
  try {
    const { productName, price,imgVendor } = req.body;
    await prouductModel.insertMany({productName, price,imgVendor});
    res.status(201).json({ message: "one product added" });
  } catch (error) {
    res.status(500).json({ message: "catch error in product" });
  }
};
