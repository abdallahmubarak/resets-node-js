
const app = require(`express`).Router()
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../swagger');

const auth = require(`../middleWare/auth`)
const uploadCategory = require(`../middleWare/uploadImgCategory`)
const uploadVendor = require(`../middleWare/uploadimgVendor`)

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
app.post(`/addCategory`,auth,uploadCategory.single('file'),categoryController.addCategory)
//app.get(`/getAllCategories`,categoryController.getAllCategories)
app.post(`/addVendor`,auth,uploadVendor.single('img'),vendorController.addVendor)
//app.get(`/getVendorsByCategory`,vendorController.getVendorsByCategory)

// Product Routers

app.get('/myRecipts',auth,reciptContoller.getAllRecipts)//1
app.get('/recipt',auth,reciptContoller.getReciptById)//1
app.get('/customRecipt',auth,reciptContoller.getCustomRecipts)// only date
app.delete('/deleteRecipt/:id',auth,reciptContoller.deleteRecipt)//1
app.post('/addRecipt',auth,reciptContoller.addRecipt)//1
app.get('/reciptByCategory',auth,reciptContoller.getReciptByCategoryId)//1
app.get('/reciptreciptByVendor/:vendor',auth,reciptContoller.getReciptByVendorId)//1

//app.get('/getPieChart',auth,reciptAnalysisController)
//app.get('/getLineChart',auth,reciptAnalysisController)

app.use('/api-docs', swaggerUi.serve);
app.get('/api-docs', swaggerUi.setup(swaggerDocument));

module.exports = app