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

