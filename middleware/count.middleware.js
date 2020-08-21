var count = 0
module.exports = (req,res,next)=>{
  count ++
  console.log('cookie:' + ' ' + count);

  next();
}
