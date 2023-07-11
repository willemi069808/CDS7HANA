const cds = require('@sap/cds');

module.exports = srv => {
    srv.on('InsertItems', async (req, next) => {
        await INSERT.into(cds.entities.Items).entries({ ID: 1, Value: 41 });
        await INSERT.into(cds.entities.Items).entries({ ID: 2, Value: 42 });
        await INSERT.into(cds.entities.Items).entries({ ID: 3, Value: 43 });
        await INSERT.into(cds.entities.Items).entries({ ID: 4, Value: 44 });

        return next;
    });
    srv.on('UpdateItems1', async (req, next) => {
        console.log(await SELECT.from(cds.entities.Items));

        await UPDATE(cds.entities.Items, 1).set({ Value: 91 });
        await UPDATE(cds.entities.Items, 2).set({ Value: 92 });

        console.log(await SELECT.from(cds.entities.Items));

        return next;
    });
    srv.on('UpdateItems2', async (req, next) => {
        console.log(await SELECT.from(cds.entities.Items));

        await cds.db.run(UPDATE(cds.entities.Items, 3).set({ Value: 93 }));
        await cds.db.run(UPDATE(cds.entities.Items, 4).set({ Value: 94 }));

        console.log(await SELECT.from(cds.entities.Items));

        return next;
    });
}