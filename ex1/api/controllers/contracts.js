const Contract = require('../models/contract');

module.exports.allContracts = () => {
    return Contract.find({}, { _id: false })
        .then((contracts) => contracts)
        .catch((erro) => erro);
};

module.exports.contract = (id) => {
    return Contract.find({ Id: id }, { _id: false })
        .then((contract) => contract)
        .catch((erro) => erro);
};

module.exports.contractsOnYear = (year) => {
    return Contract.find(
        { DataInicioContrato: { $regex: `.*/${year}$` } },
        { _id: false }
    )
        .then((contract) => contract)
        .catch((erro) => erro);
};

module.exports.contractsOfInst = (inst) => {
    return Contract.find({ NomeInstituicao: inst }, { _id: false })
        .then((contract) => contract)
        .catch((erro) => erro);
};

module.exports.courses = () => {
    return Contract.distinct('Curso')
        .then((courses) => courses)
        .catch((erro) => erro);
};

module.exports.institutions = () => {
    return Contract.distinct('NomeInstituicao')
        .then((institutions) => institutions)
        .catch((erro) => erro);
};

module.exports.addContract = (c) => {
    return Contract.create(c)
        .then((contract) => contract)
        .catch((erro) => erro);
};

module.exports.deleteContract = (id) => {
    return Contract.deleteOne({ Id: id })
        .then((contract) => contract)
        .catch((erro) => erro);
};
