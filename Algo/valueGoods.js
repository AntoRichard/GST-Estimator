// const Ebill = require('../database/eBill');

// const fs = require('fs');

let amtData = [{
    prod: 'Coffee',
    amout: 240,
    per: 0.50
}, {
    prod: 'Robar steel',
    amout: 40,
    per: 0.18
}, {
    prod: 'Tea',
    amout: 192,
    per: 0.50
}, {
    prod: 'Merchantbar',
    amout: 42,
    per: 0.18
}];


let valueOfGoods = (qty,size,prod) => {
    let quant = parseInt(qty);
    let amt,per; 
    if(size === 'Quintal'){
        quant = quant*100;
    }else if(size === 'Tonnes'){
        quant = quant*1000;
    }

    amtData.forEach((a)=>{
        if(prod === a.prod){
            amt = parseInt(a.amout);
            per = parseFloat(a.per);
        }
    });

    let total = quant * amt;
    let net_amount = total + (total * per);
    return net_amount;
}


module.exports = valueOfGoods;