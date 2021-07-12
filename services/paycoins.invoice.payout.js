const Q = require("q");

function service (params, _paycoins) {
    const D = Q.defer();
    Q.fcall( () => {
        return params;
    })
    .then((params) => {
        params.public_key = _paycoins.getPublicKey();
        params.secret_key = _paycoins.getSecretKey();
        return _paycoins.request(`wallet/${params.business_id}/payouttest/${params.wallet_id}`, params)
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