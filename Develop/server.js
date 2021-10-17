const express = require('express');


const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

//Router here
require('./routes/api')(app);
require('./routes/controller')(app);

app.listen(PORT, function(){
    console.log('Server listening PORT:' + PORT);
})