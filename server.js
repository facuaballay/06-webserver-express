const express = require('express');
const app = express();
const hbs = require('hbs');

require('./hbs/helpers');

const port = process.env.PORT || 3000;

//cualquier cosa que pongamos aca dentro va a ser publico se va a poder ver
app.use(express.static(__dirname+'/public'))
 //express hbs
 app.set('view engine', 'hbs');



hbs.registerPartials(__dirname + '/views/parciales');

 app.get('/', function (req, res) {
   
     res.render('home',{
         nombre:'Facu aballay',
         
     });
     })
     app.get('/about', function (req, res) {
   
        res.render('about');
        })
// app.get('/', function (req, res) {
//     let salida = {
//         nombre:'facu',
//         edad: 32,
//         url:req.url
//     }

//     res.send(salida);
// //   res.send('Hola Mundo')
// })

 
app.listen(port,()=>{
    console.log(`Escuchando el puerto ${port} `);
})