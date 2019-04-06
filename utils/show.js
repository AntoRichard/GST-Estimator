const path = require('path');
const fs = require('fs');
const DetailsDB = require(path.join(__dirname, '..', 'database', 'compDetails'));

exports.showGet = (req, res) => {
    fs.readFile('indusName.txt', 'utf-8', (err, name) => {
        if (err) throw err;
        DetailsDB.findOne({
            compName: name.split('-')[0]
        }, (err, data) => {
            if (err) throw err;
            res.render('show', {
                data: data
            });
            console.log(data)
        })
        // console.log(name);
    });
}