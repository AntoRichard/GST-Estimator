const path = require('path');
const QR_Code = require('qr-image');

const eBillDB = require(path.join(__dirname, '..', 'database', 'eBill'));
const MaintainDB = require(path.join(__dirname, '..', 'database', 'maintain'));

const fs = require('fs');
exports.getEntry = (req, res) => {
    res.render('entry');
}

exports.postEnter = (req, res) => {

    let username;
    fs.readFile('username.txt', 'utf-8', (err, uName) => {
        if (err) throw err;
        username = uName;
        console.log(username);
        let imgName = `${username}.jpg`;
        let data1 = {
            username: uName.split('-')[0],
            gstNo: req.body.gstNo,
            industryName: req.body.industryName,
            prod: req.body.prod,
            quant: req.body.quant,
            hsn: req.body.hsn,
            size: req.body.size,
            wards: req.body.wards,
            way: req.body.way,
            vechNo: req.body.vechNo,
            pod: req.body.pod,
            imageName: imgName
        }
        let value_Entity = `Username : ${uName}\nGST NO : ${req.body.gstNo}\nIndustry Name : ${req.body.industryName}\nProduct Name : ${req.body.prod}\nQuantity : ${req.body.quant}\nHSN Code : ${req.body.hsn}\nSize : ${req.body.size}\nTransport : ${req.body.wards}\nMode : ${req.body.way}\nVehile Number : ${req.body.vechNo}\nPlace of delivery : ${req.body.pod}`;
        QR_Code.image(`${value_Entity}`, {
            type: "jpg",
            size: 20
        }).pipe(fs.createWriteStream(`${username}.jpg`));

        eBillDB.create(data1, (err, result) => {
            if (err) throw err;
            console.log(result);
            fs.readFile('billNo.txt', 'utf-8', (err, vv) => {
                if (err) throw err;
                let vvv = parseInt(vv) + 1;
                fs.writeFile('billNo.txt', vvv, (err) => {
                    if (err) throw err;
                    res.redirect('/ewayBill');
                })
            })

        });
        fs.readFile('indusName.txt', 'utf-8', (err, name) => {
            if (err) throw err;
            let data2 = {
                username: name.split('-')[0],
                gstNo: req.body.gstNo,
                industryName: req.body.industryName,
                prod: req.body.prod,
                quant: req.body.quant,
                hsn: req.body.hsn,
                size: req.body.size,
                wards: req.body.wards,
                way: req.body.way,
                vechNo: req.body.vechNo,
                pod: req.body.pod
            }

            MaintainDB.create(data2, (err, result) => {
                if (err) throw err;
                console.log(result);
                console.log('from maintain....');
            });
        });


    })

}