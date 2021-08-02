const BASE = require("./lib/paycoins.base"); 
const invoice = require("./lib/paycoins.invoice");
const exchangeRates = require("./lib/paycoins.exchangeRates");

function Paycoins (public_key, secret_key) {
    const paycoinsbase = new BASE(
        public_key,
        secret_key
    );

    this.Invoice = new invoice(paycoinsbase);
    this.ExchangeRates = new exchangeRates(paycoinsbase);
};

module.exports = Paycoins;