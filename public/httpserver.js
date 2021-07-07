const http=require('http');
const fs=require('fs')
const port =process.env.port||3000;
const server=http.createServer((req,res)=>{
   res.statusCode =200 ;
res.setHeader('Content-Type', 'text.html')
if(res.url='/home'){
 
   const data=fs.readFileSync('Homepage.html')
   res.end(data)
}
})

server.listen(port,()=>
{
   console.log( 'Server is listening on the port ${port}');
}
    )