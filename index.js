const BASE = require("./lib/paycoins.base"); 
const invoice = require("./lib/paycoins.invoice");

function Paycoins (public_key, secret_key) {
    const paycoinsbase = new BASE(
        public_key,
        secret_key
    );

    this.Invoice = new invoice(paycoinsbase);
};

module.exports = Paycoins;