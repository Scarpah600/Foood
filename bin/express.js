const express =  require('express');
const bodyPaser = require('body-parser');
const categoriaRouter = require('../bin/routes/categoria.router')
const produtoRouter = require ('../bin/routes/produto.routes')
const mongoose = require('mongoose');
const variable = require('../bin/configuration/variables');
const app = express();

app.use(bodyPaser.json());
app.use(bodyPaser.urlencoded({extended: false}));
mongoose.connect(variable.Database.connection);

app.use('/api/categoria', categoriaRouter);
app.use('/api/produto',produtoRouter)
module.exports = app;



