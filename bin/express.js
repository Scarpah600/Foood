const express =  require('express');
const bodyPaser = require('body-parser');
const categoriaRouter = require('../bin/routes/categoria.router')
const produtoRouter = require ('../bin/routes/produto.routes')

const app = express();

app.use(bodyPaser.json());
app.use(bodyPaser.urlencoded({extended: false}));

app.use('/api/categoria', categoriaRouter);
app.use('/api/produto',produtoRouter)
module.exports = app;



