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
var counting = require('./middleware/count.middleware')
// var cookieParser = require('cookie-parser')
var controller = require ('./controller/bookList.controller')
const bodyParser = require('body-parser')
app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
app.set('view engine', 'pug')
app.set('views', './views')
// app.use(cookieParser())
app.use(counting);


// Set some defaults (required if your JSON file is empty)
// bạn tạo middleware xong rồi phải không
// dạ
// 
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



app.post('/', controller.postIndex) // ?? cái này để làm gì vậy bạn ?
// theo đề bài thì là gửi cookie qua mỗi lần user vào sever ạ... em đặt couting côkeie ở đó ạ
// hoh; nhưng như thế thì bạn phải gọi tới kiểu như http://localhost:3000/ thì nó mới nhảy vào ođây

// để mình ghi cái này, lý thuyết tí.

// bình thường mình sẽ hay viết như này 
// app.use('path', middleware, validation, controller);
// nếu như bạn muốn tất cả điều chạy qua mà không cần đường dẫn bạn có thể viết
// app.use(middleware) (ví dụ middleware, validate cũng được) 

// vậy nếu muốn chạy tất cả chỉ cần thêm 1 dòng app.use(middleware ) đúng không ạ?
// yes, nhưng mà đặt ở đâu cho hợp lý nha, vì chương trình chạy từ trên xuống, nên đặt cuối  nó cũng không có ý nghĩa gì lăm :v
// app.use(counting) như này ý ạ?
// yes, tùy bạn đặt tên thôi :3
// bạn qua file middleware đi 

app.post('/update',controller.update)


app.use('/users', userRoute)
app.use('/transaction', transaction)
app.use(express.static('public'))


// listen for requests :)
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})