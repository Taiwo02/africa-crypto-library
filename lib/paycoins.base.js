const Request = require('request');
const PaycoinsUtils = require('./paycoins.utils');


function PaycoinsBase (public_key, secret_key) {

	PaycoinsUtils.emptyCheck(public_key, "Public Key required");
	PaycoinsUtils.emptyCheck(secret_key, "Secret Key required");

	const PUBLIC_KEY = public_key;
	const SECRET_KEY = secret_key;
	const BASE_URL = "https://africa-crypto.herokuapp.com";	

	this.getPublicKey = function () {
		return PUBLIC_KEY;
	}

	this.getSecretKey = function () {
		return SECRET_KEY;
	}

	this.getBaseUrl = function () {
		return BASE_URL;
	}

	this.setBaseUrl = (new_base_url) => {
		if (new_base_url) {
			BASE_URL = new_base_url;
		}
	}

	this.request = function (path, payload, callback){

		let requestOptions = {};
		let requestMethod  = payload.method;
		let datakey        = requestMethod == 'POST' ? 'body' : 'qs';
		let requestJSON    = datakey == 'body' ? true : false;
		// console.log(payload)
		requestOptions.uri      = path;
		requestOptions.baseUrl  = this.getBaseUrl();
		requestOptions.method   = requestMethod;
		requestOptions[datakey] = PaycoinsUtils.initDefaultValue(payload, {});
		requestOptions.json     = requestJSON;
		requestOptions.headers  = {
			'Content-Type':'application/json',
			'X-PBK-KEY' : payload.public_key,
			'X-SEC-KEY' : payload.secret_key
		};
		// console.log(requestOptions)
		if(callback) {
			this._makeRequest(requestOptions, callback);
			return requestOptions;
		} else {
			return this._makePromiseRequest(requestOptions);
		}

	}
}

PaycoinsBase.prototype._makeRequest = function(requestOptions, callback) {
	Request(requestOptions,
		function (err, res, body) {
			if(typeof res == "undefined"){
				res = {};
			}

			if(typeof body == 'undefined'){
				body = {};
			}
			callback(err, res, body);
		}
	);
};

PaycoinsBase.prototype._makePromiseRequest = function (requestOptions) {
	var self = this;
	return new Promise(function (resolve, reject) {
		self._makeRequest(requestOptions, function (err, res, body) {
			if (err) {
				reject(err);
			} else {
				resolve(res, body);
			}
		});
	});
};


module.exports = PaycoinsBase;