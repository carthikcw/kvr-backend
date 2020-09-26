var mongoose= require('mongoose');

  var Schema=mongoose.Schema;

var CustomerSchema =new Schema({

    firstname: {
        type:String,
        required:[true,'firstname required']
    },

    lastname:{
        type:String,
        required:[true,'lastname required']
    },
        emailId: {
              type:String,
              index:true,
              unique:true,
              required:[true,'emailID required']
          },
          password: {
              type:String,
              required:[true,'password required']
          },
          mobileNumber : {
              type:Number,
              min:[10, 'minimum numbers 10'],
              required:[true,'mobile number required']
          },
          isEmailVerified:{
              type:Boolean,
              default:false
          }
    });
module.exports=mongoose.model('customer',CustomerSchema);
