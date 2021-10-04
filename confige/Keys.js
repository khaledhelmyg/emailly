
if(process.env.NODE_ENV==='production'){
  //reture the set of prod keys
  module.exports=require('./prod');
}else{
  //return the dev keys
  module.exports=require('./dev');
}