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

let gstCalc = (amount, product) => {
    let gstpercent;
    amtData.forEach((d)=>{
        if(product === d.prod)
        {
            gstpercent = d.per;
        }
    })
    gst = (amount * gstpercent) / 100;
    return `${amount + gst}-${gstpercent}`;
}


module.exports = gstCalc;