const getInvoiceData = require("../services/paycoins.invoice.getInvoice");
const createInvoiceData = require("../services/paycoins.invoice.createInvoice");
const getInvoiceDetailsData = require("../services/paycoins.invoice.getInvoiceDetails");
const initiatePayout = require("../services/paycoins.invoice.payout");
const initiateCheckout = require("../services/paycoins.invoice.checkout");
const getAllInvoicesData = require("../services/paycoins.invoice.getAllInvoices");

const getExchangeRates = require("../services/paycoins.exchangeRates.get");

function ExchangeRates (PaycoinsBase) {

    this.getCurrencyExchangeRates = function (data) {
        return getExchangeRates(data, PaycoinsBase)
    }
}

module.exports = ExchangeRates;