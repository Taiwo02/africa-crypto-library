const getInvoicePage = require("../services/paycoins.invoice.getInvoice");

function Invoice (PaycoinsBase) {
    this.getInvoice = function (data) {
        return getInvoicePage(data, PaycoinsBase)
    }
}

module.exports = Invoice;