const restaurantModel = require(`../model/category`);

exports.addCategory = async (req, res) => {
  try {
    const {restaurantName,address,contact,categoryImg}= req.body
    const restaurant = await restaurantModel.findOne({restaurantName}) 
    if (restaurant) {

        res.status(500).json({ message: " restaurant already added" });
    } else {
        await restaurantModel.insertMany({restaurantName,address,contact,categoryImg});
        res.status(201).json({ message: `one restaurant added` });
    }

  } catch (error) {
    res.status(500).json({ message: "catch error in restaurant" });
  }
};