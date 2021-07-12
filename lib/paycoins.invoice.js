const getInvoiceData = require("../services/paycoins.invoice.getInvoice");
const createInvoiceData = require("../services/paycoins.invoice.createInvoice");
const getInvoiceDetailsData = require("../services/paycoins.invoice.getInvoiceDetails");
const initiatePayout = require("../services/paycoins.invoice.payout");
const initiateCheckout = require("../services/paycoins.invoice.checkout");

function Invoice (PaycoinsBase) {

    this.getInvoice = function (data) {
        return getInvoiceData(data, PaycoinsBase)
    }

    this.createInvoice = function (data) {
        return createInvoiceData(data, PaycoinsBase)
    }

    this.getInvoiceDetails = function (data) {
        return getInvoiceDetailsData(data, PaycoinsBase)
    }

    this.payout = function (data) {
        return initiatePayout(data, PaycoinsBase)
    }

    this.checkout = function (data) {
        return initiateCheckout(data, PaycoinsBase)
    }
}

module.exports = Invoice;