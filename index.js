const fs=require('fs')
const http=require('http')
const server=http.createServer((req,res)=>{
const method=req.method
switch(method){
  case 'GET':
    break;
  case 'POST':
    break;
  case 'DELETE':
    break;
  case 'PUT':
    break;
  default:
    res.end('No Such request is supported')
}
})
server.listen(3000,()=>{
  console.log('Server is listing to port http://localhost:3000')
})
