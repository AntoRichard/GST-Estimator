exports.getCust = (req, res) =>{
    res.render('custlogin');
}

exports.postCust = (req,res)=>{
    let data = {
        appName : req.body.appName,
        tradeName : req.body.tradeName,
        address : req.body.address,
        email : req.body.email,
        phone : req.body.phone,
        username : req.body.username,
        password : req.body.password
    }

    console.log(data);
}