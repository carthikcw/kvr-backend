var express=require('express');
var mongoose= require('mongoose');
var cors=require('cors');


var app=express();

var CustomerRouter=require('./src/routes/customer.route');
var AdminRouter= require('./src/routes/admin.route');
var Config= require('./src/config');


mongoose.connect(Config.AppConfig.MONGO_URI,{ useNewUrlParser: true,useUnifiedTopology: true},(err) => {
    if(err){
        console.log('error',err);
    }
    else
    {
        console.log('db connected');
    }
})

app.use(cors());
app.use(express.json());

app.use('/customer',CustomerRouter);
app.use('/admin',AdminRouter);

app.get('/healthcheck', (req,res) => {
res.send({'message':' app running successfully!'});
})

app.listen(Config.AppConfig.PORT,() => {

    console.log('server started');

})
