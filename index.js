
const http=require('http')
const getRequest=require('./HandlingRequest/handelget')
const putRequest=require('./HandlingRequest/handelput')
const deleteRequest=require('./HandlingRequest/handeldelete')
const postRequest=require('./HandlingRequest/handelpost')
const server=http.createServer((req,res)=>{
const method=req.method
switch(method){
  case 'GET':
    getRequest(req,res)
    break;
  case 'POST':
    postRequest(req,res)
    break;
  case 'DELETE':
    deleteRequest(req,res)
    break;
  case 'PUT':
    putRequest(req,res)
    break;
  default:
    res.end('No Such request is supported')
}
})
server.listen(3000,()=>{
  console.log('Server is listing to port http://localhost:3000')
})
