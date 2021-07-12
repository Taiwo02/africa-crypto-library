const PaycoinsUtils = {};


PaycoinsUtils.emptyCheck = function (value, message, error){
	message = message || 'Some error occured';
	error   = error || Error;
	if(!value || typeof value == 'undefined')
		throw new error(message);
}

PaycoinsUtils.initDefaultValue = function (value, default_value) {
	return value || default_value;
}

module.exports = PaycoinsUtils;