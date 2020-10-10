let express = require('express')

let app = express()
// 搭建服务器

app.get('/',(req,res)=>{
    res.send('我的首页')
})

app.listen(8080,()=>{
    console.log('服务器启动: http://localhost:8080');
})

