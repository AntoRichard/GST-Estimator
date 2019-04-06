let indexGet = (req, res) => {
    console.log(`${req.method} : ${req.url}`);

    res.render('index');
}

exports.indexGet = indexGet;