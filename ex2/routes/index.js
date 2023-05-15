var express = require('express');
var router = express.Router();
const Contracts = require('../controllers/contracts');

/* GET home page. */
router.get('/', function (req, res) {
    Contracts.allContracts()
        .then((contracts) => {
            res.render('index', { contracts: contracts });
        })
        .catch((err) => {
            res.render('error', { error: err });
        });
});

router.get('/:id', function (req, res) {
    Contracts.contract(req.params.id)
        .then((contract) => {
            res.render('contract', { contract: contract });
        })
        .catch((err) => {
            res.render('error', { error: err });
        });
});

router.get('/inst/:nipc', function (req, res) {
    Contracts.contractsWithInst(req.params.nipc)
        .then((contracts) => {
            res.render('institution', {
                contracts: contracts,
                nomeInst: nipc,
                numInst: contracts[0].NIPCInstituicao,
            });
        })
        .catch((err) => {
            res.render('error', { error: err });
        });
});

module.exports = router;
