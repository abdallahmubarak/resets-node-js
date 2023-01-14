const categorytModel = require(`../model/category`);

exports.addCategory = async (req, res) => {
  try {
    const {name,categoryImg}= req.body
    
        await categorytModel.insertMany({name,categoryImg});
        res.status(201).json({ message: `category added` });
    

  } catch (error) {
    res.status(500).json({ message: "error in category" });
  }
};