const Q = require("q");

function service (params, _paycoins) {
    const D = Q.defer();
    Q.fcall( () => {
        return params;
    })
    .then((params) => {
        params.public_key = _paycoins.getPublicKey();
        params.secret_key = _paycoins.getSecretKey();
        params.method = "GET";
        return _paycoins.request(`api/invoice/${params.id}`, params)
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