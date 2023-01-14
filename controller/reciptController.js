const reciptModel = require(`../model/recipt`);
exports.addRecipt = async function (req, res, next) {
  try {

    const reciptObject = await reciptModel.insertMany({
      //need to add a validation for body inputs
      serialNumber:req.body.serialNumber,
      vendor: req.body.id,
      category: req.body.category,
      tax: req.body.tax,
      service: req.body.service,
      amount: req.body.amount,
      totalAmount: req.body.amount,
      status:"ACTIVE",
      userId: req.userId,
      resetDetails: req.body.items,
    });
    res.status(201).json({ message: "Recipt Successfully Inserted" ,reciptObject});
  } catch (error) {
    res.status(500).json({ message: "catch error requesting an order reset" });
  }
};

exports.getReciptById = async function (req, res, next) {
  try {

    const reciptObject = reciptModel.findById(req.id)
      .lean().exec(function (err, results) {
        if (err)
          return console.error(err);
        try {
          console.log(results);
        } catch (error) {
          console.log("errror getting results");
          console.log(error);
        }
      });
    res.status(200).json({ message: "Recipt Successfully retrived" ,reciptObject});
  } catch (error) {
    res.status(500).json({ message: "catch error requesting an order reset" });
  }
};
exports.getAllRecipts = async function (req, res, next) {
  try {

    const reciptObject =  reciptModel.find({userId:req.userId})        
    .lean().exec(function (err, results) {
    if (err) return console.error(err)
    try {
        console.log(results)            
    } catch (error) {
        console.log("errror getting results")
        console.log(error)
    } 
});
    res.status(200).json({ message: "Recipt Successfully retrived" ,reciptObject});
  } catch (error) {
    res.status(500).json({ message: "catch error requesting an order reset" });
  }
};
exports.getCustomRecipts = async function (req, res, next) {
  try {
   var criteriaObject = {};
   if (req.vendor !==''){
    criteriaObject["vendor"]=req.vendor;
   }
   if (req.category !==''){
    criteriaObject["category"]=req.category;
   }
   if (req.user !==''){
    criteriaObject["userId"]=req.user;
   }
//const fromDate = req.fromDate;

    const reciptObject =  reciptModel.find(criteriaObject)       
    .lean().exec(function (err, results) {
    if (err) return console.error(err)
    try {
        console.log(results)            
    } catch (error) {
        console.log("errror getting results")
        console.log(error)
    } 
});
    res.status(200).json({ message: "Recipt Successfully retrived" ,reciptObject});
  } catch (error) {
    res.status(500).json({ message: "catch error requesting an order reset" });
  }
};

exports.deleteRecipt = async function (req, res, next) {
  try {

    const reciptObject = await reciptModel.delete(req.id)        
    .lean().exec(function (err, results) {
    if (err) return console.error(err)
    try {
        console.log(results)            
    } catch (error) {
        console.log("errror getting results")
        console.log(error)
    } 
});
    res.status(200).json({ message: "Recipt Successfully retrived" ,reciptObject});
  } catch (error) {
    res.status(500).json({ message: "catch error requesting an order reset" });
  }
};