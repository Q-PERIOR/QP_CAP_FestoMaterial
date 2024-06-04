const cds = require('@sap/cds');

module.exports = cds.service.impl (async function() {
    const S4Product = await cds.connect.to('srv_ext');
    const S4SourcingProject = await cds.connect('UI_SOURCINGPROJECT_MANAGE');

    this.on('READ', 'Product', (req) => {
        console.log('>> delegating to remote service ... ');
        return S4Product.run(req.query);
    })

    this.on('READ', 'SourcingProject', (req) => {
        console.log('>> delegating to remote service ... ');
        return S4SourcingProject.run(req.query);
    })

    this.on('POST', 'SourcingProject', (req) => {
        console.log('>> delegating to remote service ... ');
        console.log(req.query);
        cds.env.features.fetch_csrf = true;
        return S4SourcingProject.run(req.query);
    })

    this.on('READ', 'Material', (req) => {
        console.log('>> delegating to remote service ... ');
        return S4SourcingProject.run(req.query);
    })
})



