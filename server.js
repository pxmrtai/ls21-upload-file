const express = require('express')
const app = express()
const port = 5000
const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')
const shortid = require('shortid');
const adapter = new FileSync('db.json')
const db = low(adapter)
var userRoute = require('./routes/users.route');
var transaction = require('./routes/transaction.route')
var controller = require ('./controller/bookList.controller')
const bodyParser = require('body-parser')
app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
app.set('view engine', 'pug')
app.set('views', './views')

// Set some defaults (required if your JSON file is empty)
db.defaults({ list: [] })
  .write()
 
app.get('/',controller.index)
app.get('/book',controller.listBook
//         server
)
// app.get('/users/index',(req,res) => {
//     res.render('users/index',{
//        listUser : db.get('user').value()
//     })
// })
app.get('/:id',controller.view)
app.get("/:id/delete", controller.deleteBook)



app.post('/',controller.)
app.post('/update',(req,res)=>{
    db.get('list')
    .find({ id:  req.body.id })
    .assign({title: req.body.title})
    .write()
    res.redirect('/book')
})


app.use('/users', userRoute)
app.use('/transaction', transaction)

// listen for requests :)
const listener = app.listen(process.env.PORT, () => {
  console.log("Your app is listening on port " + listener.address().port);
});
