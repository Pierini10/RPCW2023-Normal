const axios = require('axios');

module.exports.allContracts = () => {
    return axios
        .get('http://localhost:15015/contracts')
        .then((response) => {
            return response.data;
        })
        .catch((err) => {
            return err;
        });
};

module.exports.contract = (id) => {
    return axios
        .get('http://localhost:15015/contracts/' + id)
        .then((response) => {
            return response.data;
        })
        .catch((err) => {
            return err;
        });
};

module.exports.contractsWithInst = (inst) => {
    return axios
        .get('http://localhost:15015/contracts?inst=' + inst)
        .then((response) => {
            return response.data;
        })
        .catch((err) => {
            return err;
        });
};
