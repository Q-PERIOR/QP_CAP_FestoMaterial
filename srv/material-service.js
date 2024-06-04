const cds = require('@sap/cds');

module.exports = cds.service.impl (async function() {
    const S4Product = await cds.connect.to('srv_ext');

    this.on('READ', 'Product', (req) => {
        console.log('>> delegating to remote service ... ');
        return S4Product.run(req.query);
    })
})



