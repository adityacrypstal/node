const express = require('express');
var app = express();
const port = process.env.PORT || 3000;
app.use(express.static(__dirname+'/public'));
app.set('view engine','hbs');
// app.use((req, res, next) => {
//  var now = new Date().toString();
//  console.log(now);
// //  next();
// });

app.get('/about',(req,res) => {
    res.render('index.hbs');
});

// console.log(new Date().getFullYear());
app.listen(port , () => {
    console.log('App started');
});