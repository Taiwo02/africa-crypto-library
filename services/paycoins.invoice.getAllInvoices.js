const Q = require("q");

function service (_paycoins) {
    const D = Q.defer();
    Q.fcall( () => {
        return;
    })
    .then(() => {
        let params = {}
        params.public_key = _paycoins.getPublicKey();
        params.secret_key = _paycoins.getSecretKey();
        params.method = "GET";
        return _paycoins.request(`api/invoices/`, params)
    })
    .then( resp => {
        D.resolve(resp.body);
    })
    .catch( err => {
        D.reject(err);
    });
    return D.promise;
}

module.exports = service;