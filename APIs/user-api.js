//create mini express app user api
const exp=require('express');
const userApp=exp.Router();
//local state
//local state
let users = [
    {id:100,name:'Pragna'},
    {id:200,name:'Pranav'},
    {id:300,name:'Praneetha'},
    {id:400,name:'Prakash'},
    {id:500,name:'Pravallika'},
];

//create API(routes)
//each route consists a request handling mechanism  -CRUD Operations
//route to get users
userApp.get('/users',(req,res)=>{
    //resend response
    res.send({message:"all users",payload:users});
})

//route to get individual user data
userApp.get('/users/:id',(req,res)=>{
    let id = Number(req.params.id);
    let index = users.findIndex(user => user.id === id);
    console.log("index = ",index);
    if(index == -1){
        res.send({message:"User with id not found"});
    }
    else{
        res.send(users[index]);
    }
    
})

//route to create user
userApp.post('/user',(req,res)=>{
    //get new user from request
    let newUser = req.body;
    console.log(newUser);
    //push new user to users array
    users.push(newUser);
    res.send({message:"New User Created"});
})

//route to update user
userApp.put('/user',(req,res)=>{
    //get modified user from request
    let modifiedUser = req.body;
    //get index of user with id 400 from data as requested
    let index = users.findIndex(user => user.id === modifiedUser.id);
    if(index === -1){
        res.send({message:"No user with the requested id to update"});
    }
    else{
        users.splice(index,1,modifiedUser);
        res.send({message:"User Details Modified"});
    }
})

/*//route to delete user method 1
userApp.delete('/user',(req,res)=>{
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
userApp.delete('/user/:id',(req,res)=>{
    //get value from the url
    let id = Number(req.params.id); //converts the id from string to number
    console.log("id = ",id);
    let index = users.findIndex(user => user.id === id);
    if(index===-1){
        res.send({message:"No user with the requested id"});
    }
    else{
        users.splice(index,1);
        res.send({message:"User deleted successfully"});
    }
    
});

module.exports = userApp;