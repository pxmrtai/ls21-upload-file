var count = 0
module.exports = (req,res,next)=>{
  count ++
  console.log('cookie:' + ' ' + count);

  next();
}
// 
// dạ
// exports 1 function không tên để gán cho 1 biến ngoài kia
// ~~
// ở đây thì mình thực hiện việc đếm count 
// vào log ra count thì có nhiều cách
// bạn có thể làm cách đơn gian như này 
// :v cách đơn gian nhất.
// hoặc bạn có thể nghiên cứu lowdb, lưu nó vào db rồi tăng lên mỗi lần gọi :3
// dạ. nhưng làm sao để tăng giá trị khi gửi cookie lên ạ?
/** 
  // Increment count
  db.update('count', n => n + 1)
  .write()
*/
// có thể dùng cách nafyl
// dạ. nhưng làm sao để tăng giá trị khi gửi cookie lên ạ?
// cookie = cookie + 1 @@?
// hmmmmm
// khi họ request là họ gửi cookies lên cho mình đấy :v
// em thấy log đếm ra rồi cơ mà nhiều khi em thấy nó đếm thêm 2 3 lần khi mà em chỉ click vào 1 req.. hay là do cái cái link đó nó req nhiều cái nên nó đếm như vậy ạ?
// sr, mình mới bị crash máy
// dạ không sao ạ
// bạn chưa cài cookies parser huh, hừm, bài này thì không cần lắm

// dạ em đang cài tại em đang test một số thứ.. bài này như này là xong đúng không ạ... 
// như vây là được rồi chỉ là, bạn cần biết là nó có chạy qua rồi biến count tăng lên là được rồi
// mỗi lần bạn gửi resquest lên server thì nó sẽ chạy qua cái middleware count rồi tăng biến count lên 1 thôi // dạ <3 
// cơ sao cả body parser với cookie parser không cài luôn vậy 
//body parser nó có trong file package mà anh nhỉ?
// sao lại thế anh nhỉ? tự nhiên không có :)))
// ở bài nà thì nó không có cookies gì đâu bạn 
// vì bạn chưa set cookies nữa , đây nói đúng hơn là đếm số request gửi lên server thôi :v chứ chưa  có cookies gì đâu
// dạ ... em hiểu rồi ạ!! tại em đang muốn test mấy cái để hiểu rõ hơn về cookie thôi ạ... thử làm vài cái test giống trên của anh thịnh xem nó có chạy qua  hay mấy cái linh tinh không thôi ạ :)) 