const mongoose = require('mongoose');

// connecting to db
// mongoose.connect('mongodb://localhost/vibhu',{
//     useNewUrlParser : true
// }).then(()=>{
//     console.log("COnnection succesfull");
// }).catch((e)=>{
//     console.log("No connection");
// });

mongoose.connect('mongodb://localhost/vibhu');
