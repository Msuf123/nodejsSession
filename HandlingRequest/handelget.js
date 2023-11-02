const readFile=require('./cusotmjsFunctions/readFiles')
const getRequest=(req,res)=>{
    console.log(`./htmPages/JavaScript${req.url.split('/'[1])}`)
    if(req.url.includes('.js')){
        return res.end(readFile(`./htmPages/JavaScript/${req.url.split('/'[1])}`))   
    }
    if(req.url.includes('.css')){
        return res.end(readFile(`./htmPages/Css/${req.url.split('/')[1]}`))
    }

    switch(req.url){
        case '/':
            res.end(readFile('./htmPages/index.html'))
            break;
        default:
            
            res.writeHead(404)
            res.end('No such file')
            break;

    }
}
module.exports=getRequest