
const app = require(`express`).Router()
const auth = require(`../middleWare/auth`)

//#region login
const loginValidation = require(`../middleWare/loginValidation`)
const userController = require(`../controller/user`)
const categoryController = require(`../controller/categoryController`)
const vendorController = require(`../controller/vendorController`)
const reciptContoller = require(`../controller/reciptController`)
const reciptAnalysisController = require(`../controller/reciptAnalysisController`)



//#endregion 


// User Routers
app.post('/register',loginValidation,userController.postRegister);
app.post(`/login`,loginValidation,userController.postLogin);
app.post(`/signout`,auth,userController.postSignOut);
app.get(`/profile`,auth,userController.getProfile);

//app.post(`/signout`,profileValidation,userController.postSignOut);


// Resturant Routers
//app.post(`/restaurant`,resturantController)
//app.post(`/addCategory`,categoryController.addCategory)
//app.get(`/getAllCategories`,categoryController.getAllCategories)
//app.post(`/addVendor`,vendorController.addVendor)
//app.get(`/getVendorsByCategory`,vendorController.getVendorsByCategory)

// Product Routers
//app.post(`/addProduct`,productController)

app.get('/myRecipts',auth,reciptContoller.getCustomRecipts)//1
app.get('/reciptById',auth,reciptContoller.getReciptById)//1
app.get('/customRecipt',auth,reciptContoller.getCustomRecipts)// only date
app.delete('/deleteRecipt',auth,reciptContoller.deleteRecipt)//1
app.post('/addRecipt',auth,reciptContoller.addRecipt)//1

//app.get('/getPieChart',auth,reciptAnalysisController)
//app.get('/getLineChart',auth,reciptAnalysisController)


module.exports = app