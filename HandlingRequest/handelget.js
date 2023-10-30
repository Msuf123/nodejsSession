const readFile=require('./cusotmjsFunctions/readFiles')
const getRequest=(req,res)=>{
    

    switch(req.url){
        case '/':
            res.end(readFile('./htmPages/index.html'))
            break;
        case '/index.js':
            res.end(readFile('./htmPages/index.js'))
            break;
        default:
            
            res.writeHead(404)
            res.end('No such file')
            break;

    }
}
module.exports=getRequest