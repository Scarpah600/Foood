'use strict'

const app = require('../ionic_3/bin/express');
const variables = require('../ionic_3/bin/configuration/variables');
app.listen(variables.Api.port,() => {
    console.info(`Api inicializado com sucesso na porta ${variables.Api.port}`);
});