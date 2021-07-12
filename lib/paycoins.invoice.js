const getInvoiceData = require("../services/paycoins.invoice.getInvoice");
const createInvoiceData = require("../services/paycoins.invoice.createInvoice");
const getInvoiceDetailsData = require("../services/paycoins.invoice.getInvoiceDetails");

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
}

module.exports = Invoice;