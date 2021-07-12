const Paycoins = require('./index');

const PUBLIC_KEY = "lv_pub_6lKZDlUbHJGJA5Q25T5IGdRrTWIQuQ";
const PRIVATE_KEY = "lv_sec_GfINYaasvlLLGCAvjrcZWOlKERtU0y"

const paycoins = new Paycoins(PUBLIC_KEY, PRIVATE_KEY);

const getInvoice = async () => {
    try {
        const payload ={
            "id": "535535574f5467774d546b784e6a49784d546b354d6a4d334e546731"
          }
        const response = await paycoins.Invoice.getInvoice(payload)
        console.log(response)

    } catch (error) {
        console.log(error)
    }
}
// getInvoice();


const createInvoice = async () => {
    try {
        const payload = {
            "amount": 1000,
            "currency": "NGN",
            "redirect_url": "https://bcoin.com",
            "customer": {
                "firstname": "sdk",
                "lastname": "node",
                "email": "sdknodesetup@example.com"
            },
            "customization": {
               "title": "Sales"
            }
        }
        const response = await paycoins.Invoice.createInvoice(payload)
        console.log(response)

    } catch (error) {
        console.log(error)
    }
}

// createInvoice()

const getInvoiceDetails = async () => {
    try {
        const payload ={
            "id": "INV1608644446774"
          }
        const response = await paycoins.Invoice.getInvoiceDetails(payload)
        console.log(response)

    } catch (error) {
        console.log(error)
    }
}

getInvoiceDetails()