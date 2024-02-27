const express = require("express")
const app = express();

app.get('/',(req,res)=>{
	res.send("hello Api")
});

app.listen(8000,()=>console.log('server connected at 8000 port'));
