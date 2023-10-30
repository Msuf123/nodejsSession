const fs=require('fs')
const readFile=(path)=>{
    const data=fs.readFileSync(path)
    return data
}
module.exports=readFile