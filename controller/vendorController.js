const vendorModel = require(`../model/vendor`);

exports.addVendor = async (req, res) => {
  try {
    
    let vendorName= req.body.vendorName
    var vendorImg = req.file.filename
    console.log(vendorImg,vendorName)

    const vendor = await vendorModel.create({
      vendorName,
      vendorImg
      })
      res.status(500).json({ vendor, message: " succes vendor added" });

          } catch (error) {
    res.status(500).json({ message: "error in adding vendor" });
  }
};