var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var autoIncrement = require('mongoose-auto-increment');

var connection = mongoose.createConnection("mongodb://localhost:27017/mini");

autoIncrement.initialize(connection);

var registrationSchema = Schema({

    uid: {type:Schema.Types.ObjectId, startAt: 1},
    username:{type:String, required:true, unique:true},
    password:{type:String, required:true},
    type:{type:String, required:true}
},{
versionKey: false
//_id:false
});

registrationSchema.plugin(autoIncrement.plugin, 'registration');

var registerModel = mongoose.model("registration", registrationSchema);

module.exports = registerModel;
