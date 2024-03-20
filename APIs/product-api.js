//create mini express app user api
const exp=require('express');
const productApp=exp.Router();
//local state
//local state
let products = [
    {id:100,name:'Puma'},
    {id:200,name:'Prada'},
    {id:300,name:'Porsche'}
];

//create API(routes)
//each route consists a request handling mechanism  -CRUD Operations
//route to get users
productApp.get('/products',(req,res)=>{
    //resend response
    res.send({message:"all products",payload:products});
})

//route to get individual user data
productApp.get('/products/:id',(req,res)=>{
    let id = Number(req.params.id);
    let index = products.findIndex(prod => prod.id === id);
    console.log("index = ",index);
    if(index == -1){
        res.send({message:"Product with id not found"});
    }
    else{
        res.send(products[index]);
    }
    
})

//route to create user
productApp.post('/product',(req,res)=>{
    //get new user from request
    let newProd = req.body;
    console.log(newProd);
    //push new user to users array
    products.push(newProd);
    res.send({message:"New Product Created"});
})

//route to update user
productApp.put('/product',(req,res)=>{
    //get modified user from request
    let modifiedProd = req.body;
    //get index of user with id 400 from data as requested
    let index = products.findIndex(prod => prod.id === modifiedProd.id);
    if(index === -1){
        res.send({message:"No Product with the requested id to update"});
    }
    else{
        products.splice(index,1,modifiedProd);
        res.send({message:"Product Details Modified"});
    }
})

/*//route to delete user method 1
productApp.delete('/user',(req,res)=>{
    //get deleted user id from request
    let delUser = req.body;
    //get index of user with id 400 from data as requested
    let index = users.findIndex(user => user.id === delUser.id);
    if(index === -1){
        res.send({message : "No user found with the requested id to be deleted"});
    }
    else{
        users.splice(index,1);
        res.send({message:"User Successfully Deleted"});
    }
})*/

//route to delete user method 2
productApp.delete('/product/:id',(req,res)=>{
    //get value from the url
    let id = Number(req.params.id); //converts the id from string to number
    console.log("id = ",id);
    let index = products.findIndex(user => user.id === id);
    if(index===-1){
        res.send({message:"No product with the requested id"});
    }
    else{
        products.splice(index,1);
        res.send({message:"Product deleted successfully"});
    }
    
})

module.exports = productApp;