'use strict'

function produtoController(){

}

produtoController.prototype.post = async (req,res) => {};
produtoController.prototype.put = async (req,res) => {};
produtoController.prototype.get = async (req,res) => {
    res.status(200).send('Funcionando Prouduto...');
};
produtoController.prototype.getById = async (req,res) => {
    res.status(200).send(`Funcionando por Id ${req.params.id}`);
};
produtoController.prototype.delete = async (req,res) => {};

module.exports = produtoController;