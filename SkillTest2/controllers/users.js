const User = require('../models/User')
const bcrypt = require('bcrypt')

module.exports.user_sign_in_controller = (req, res)=>{
    if(req.isAuthenticated()){
        res.redirect('/')
   
    }
    else{
        res.render('user_sign_in', {title:"User | sign in"});
        
    }
}

module.exports.user_sign_up_controller = (req, res) =>{
    if(req.isAuthenticated()){
        res.redirect('/')
    }
    else{
    res.render('user_sign_up', {title:"User|Sign Up"});
    }
}

//sign in 

module.exports.createSession = (req, res) =>{
    //to do
    User.findOne({email: req.body.email}).then(result=>{
        if(result){
            if(result.password == req.body.password){
                res.cookie('user_id',result.id)
                console.log("why");
                req.flash('success', 'User login Successfully');
                console.log("why flash not working");
                console.log(res.locals.flash)
                console.log(req.flash)
                return res.redirect('/');
            }
            else{
                return res.redirect('back');
            }  

        }
        else{
            return res.redirect('back');
        }
    })
}


module.exports.create = (req, res)=>{
    console.log("enter create");
    if(req.body.password != req.body.confirm_password){
        console.log('enter password check');
        return res.redirect('back');
    }
    User.findOne({email: req.body.email}).then((result)=>{
        if(result){
        console.log(result);
        console.log("enter user check");
        return res.redirect('back');
        }
        else{
            console.log("every thing is fine");
            User.create(req.body).then((user)=>{  
                res.redirect('/user/signIn');
            }).catch((err)=>res.redirect('back'));
        }
    }
)}

module.exports.create = async (req, res) => {
    try {
        const hashpassword = await bcrypt.hash(req.body.password, 10)
        User.create({
            name: req.body.name,
            email: req.body.email,
            password: hashpassword
        })
        return res.redirect('/user/signIn');
    } catch (error) {
        console.log(error)
        return res.redirect('back')
    }
}

module.exports.signout = (req, res)=>{
    console.log("enters signout");
    req.logout(function(err) {
        if (err) { return next(err); }
        res.redirect('/user/signIn');
      });
    
}


