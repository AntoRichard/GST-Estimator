const path = require('path');
const compAuth = require(path.join(__dirname,'..','database','compAuth'));

exports.IndusLoginGet = (req, res) => {
    res.render('industry_register');
}

exports.IndusLoginPost = (req, res) => {
    let data = {
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        username: req.body.username,
        password: req.body.password
    }

    compAuth.create(data,(err,result)=>{
        if(err) throw err;
        console.log(result);
        res.redirect('/industry-login');
    });
    

    console.log(data);
}