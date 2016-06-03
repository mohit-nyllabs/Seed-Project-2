/**
 * Created by mohitgupta-nylc on 6/3/16.
 */
var mongoose  = require ('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
  firstName:{type: String, required: true},
    lastName: {type:String, required: true},
    password: {type:String, required: true},
    email: {type:String, required: true, unique: true},
    messages: [{type: Schema.Types.ObjectId, ref: 'Message'}]

});

module.exports = mongoose.model('User',schema);