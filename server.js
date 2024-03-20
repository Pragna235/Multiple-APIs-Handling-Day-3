//create a http server
const exp=require('express')
const app=exp();
//add body parser middleware
app.use(exp.json())

//import userApp and productApp
const userApp=require('./APIs/user-api');
const productApp=require('./APIs/product-api');

//if url starts with /user-api,then forward req to userApp
app.use('/user-api',userApp);
//if url starts with /product-api,then forward req to productApp
app.use('/product-api',productApp);



// //create a middleware
// const middleWare1=(req,res,next)=>{
//     console.log("Middleware-1 executed")
//     //res.send({message:"reply from middleware"})
//     next()
// }

// const middleWare2=(req,res,next)=>{
//     console.log("Middleware-2 executed")
//     //res.send({message:"reply from middleware2"})
//     next()
    
// }

// const middleWare3=(req,res,next)=>{
//     console.log("Middleware3 is executed")
//     //res.send({message:"reply from middleware3"})
//     next()
// }

//use as app level middleware
//app.use(middleWare1)
//app.use(middleWare3)
//app.use(middleWare2)

//assign port number
const port =4000
app.listen(port,()=>console.log(`Server is listening on ${port}`))


 //error handling middleware
 app.use((err,req,res,next)=>{
    res.send({message:"Error occured",payload:err.message})
     })
    


