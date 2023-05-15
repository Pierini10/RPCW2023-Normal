var express = require('express');
var router = express.Router();
const Contract = require('../controllers/contracts');

router.get('/', function (req, res) {
    const { inst, year } = req.query;

    if (year) {
        Contract.contractsOnYear(year)
            .then((contracts) => {
                res.send(contracts);
                res.end();
            })
            .catch((erro) => {
                res.send(erro);
                res.end();
            });
    } else if (inst) {
        Contract.contractsOfInst(inst)
            .then((contracts) => {
                res.send(contracts);
                res.end();
            })
            .catch((erro) => {
                res.send(erro);
                res.end();
            });
    } else {
        Contract.allContracts()
            .then((contracts) => {
                res.send(contracts);
                res.end();
            })
            .catch((erro) => {
                res.send(erro);
                res.end();
            });
    }
});

router.get('/courses', function (req, res) {
    Contract.courses()
        .then((courses) => {
            res.send(courses);
            res.end();
        })
        .catch((erro) => {
            res.send(erro);
            res.end();
        });
});

router.get('/institutions', function (req, res) {
    Contract.institutions()
        .then((institutions) => {
            res.send(institutions);
            res.end();
        })
        .catch((erro) => {
            res.send(erro);
            res.end();
        });
});

router.get('/:id', function (req, res) {
    Contract.contract(req.params.id)
        .then((contract) => {
            res.send(contract);
            res.end();
        })
        .catch((erro) => {
            res.send(erro);
            res.end();
        });
});

router.post('/', function (req, res) {
    Contract.addContract(req.body)
        .then((contract) => {
            res.send(contract);
            res.end();
        })
        .catch((erro) => {
            res.send(erro);
            res.end();
        });
});

router.delete('/:id', function (req, res) {
    Contract.deleteContract(req.params.id)
        .then((contract) => {
            res.send(contract);
            res.end();
        })
        .catch((erro) => {
            res.send(erro);
            res.end();
        });
});

module.exports = router;
