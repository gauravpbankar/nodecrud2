const mongoose = require('mongoose');
mongoose.connect(process.env.DB_URL || 'mongodb://localhost:27017/employee', {useNewUrlParser: true});
var conn =mongoose.Collection;

var uploadSchema =new mongoose.Schema({
	imagename: String,

});

var uploadModel = mongoose.model('uploadimage', uploadSchema);
module.exports=uploadModel;