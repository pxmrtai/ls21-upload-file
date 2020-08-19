var count = 0
module.exports = (req,res,next)=>{
  count =+ 1
  console.log(count);
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
