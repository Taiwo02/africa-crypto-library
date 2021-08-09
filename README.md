<p align="center">
    <img title="Paycoins" height="200" src="assets/paycoins.png" width="30%"/>
</p>

# Paycoins Nodejs Library

<!-- ![npm](https://img.shields.io/npm/dt/paycoins-node) -->
![npm](https://img.shields.io/npm/v/paycoins-node)
<!-- ![NPM](https://img.shields.io/npm/l/paycoins-node) -->

## Paycoins Services exposed by the library

- Get Single Invoice By ID
- Get Single Invoice By Invoive Ref
- Get All Invoices
- Create Invoice
- Get current exchange rate of <b>1 NGN</b> to major other cryptos and fiat currencies

## How to use

`npm install payoins-node`

You can get your PUBLICK_KEY and SECRET_KEY from the Paycoins dashboard.

```
const Paycoins = require('paycoins-node');

const paycoins = new Paycoins(PUBLICK_KEY, SECRET_KEY);
```

### Invoice

### `.getInvoiceById()`

This allows you to get a single paycoins invoice using it's ID

```javascript
const Paycoins = require("paycoins-node");

const paycoins = new Paycoins(PUBLIC_KEY, PRIVATE_KEY);

const getInvoiceById = async () => {
  try {
    const payload = {
      id: "535535574f5467774d546b784e6a49784d546b354d6a4d334e546731",
    };
    const response = await paycoins.Invoice.getInvoice(payload);
    console.log(response);
  } catch (error) {
    console.log(error);
  }
};
```

#### Returns

A sample response is:

```javascript
{
    "data":{
        "inv_reference":"INV980191621199237585",
        "redirect_url":"http://localhost:9000/invoice/",
        "status":-1,
        "final_amount":0,
        "amount":200,
        "amount_remain":0,
        "currency":"NG",
        "usd_equivalent":2.25,
        "available_currencies": [
          {
            "currency":"BTC",
            "name":"Bitcoin",
            "icon":"jhfed efhhef",
            "address":"326aNdz1QWkGehkXGrmXcPdZZ5Qr79tczJ",
            "amount":0.000068,
            "exchange_rate":2941712.81
          },
          {
            "currency":"ETH",
            "name":"Ethereum",
            "icon":null,
            "address":"0x26853E025F40A383C0644d61374155dd785E3254",
            "amount":0.001108,
            "exchange_rate":180459.43
          },
          {
            "currency":"XRP",
            "name":"XRP",
            "icon":null,
            "address":"rw2ciyaNshpHe7bCHo4bRWq6pqqynnWKQg:::ucl:::1752739073",
            "amount":3.603131,
            "exchange_rate":55.51
          }
        ],
        "customer_details":{
            "customer_email":"taiwo@gmail.com",
            "customer_firstname":"Taiwo",
            "customer_lastname":"Enoch",
            "customer_phone":null
        },
        "business_details":{
            "name":"Agape Businesses",
            "email":"adesinasamueloluwaseun@gmail.com"
        },
        "customizations":{
            "title":"Sale",
            "description":null,
            "logo":null
        },
        "payment_link":"https://paycoins-checkout.netlify.app/checkout/535535574f5467774d546b784e6a49784d546b354d6a4d334e546731"},
        "error":false,
        "message":"Invoice Details Fetched"
}
```

### `.getInvoiceByRef()`

This allows you to get a single paycoins invoice using it's Inv Ref

```javascript
const Paycoins = require("paycoins-node");

const paycoins = new Paycoins(PUBLIC_KEY, PRIVATE_KEY);

const getInvoiceByRef = async () => {
  try {
    const payload = {
      id: "INV1608644446774",
    };
    const response = await paycoins.Invoice.getInvoiceDetails(payload);
    console.log(response);
  } catch (error) {
    console.log(error);
  }
};
```

#### Returns

```javascript
{
    "data":{
        "reference":"INV1608644446774",
        "status":"paid",
        "amount":2000,
        "currency":"NGN",
        "usd_equivalent":4.87,
        "available_currencies": [
          {
            "currency":"BTC",
            "name":"Bitcoin",
            "icon":"jhfed efhhef",
            "address":"34G94bqB1awozqaE1vnraHxn1LnL9gcrGu",
            "amount":0.000147,
            "exchange_rate":13609091.59
          },
          {
            "currency":"ETH",
            "name":"Ethereum",
            "icon":null,
            "address":"0xfCe39aCA85ef4B7C2dC4a118Cbcc9aCcd8C4cF79",
            "amount":0.002398,
            "exchange_rate":833921.06
          },
          {
            "currency":"XRP",
            "name":"XRP",
            "icon":null,
            "address":"rw2ciyaNshpHe7bCHo4bRWq6pqqynnWKQg:::ucl:::3982814913",
            "amount":7.788506,
            "exchange_rate":256.79
          }
        ],
        "customer_details":{
            "customer_email":"adesinasamueloluwaseun@gmail.com",
            "customer_firstname":"adesina",
            "customer_lastname":"samuel",
            "customer_phone":null
        },
        "business_details":{
            "name":"Agape Businesses",
            "email":"adesinasamueloluwaseun@gmail.com"
        },
        "customizations":{
            "title":"Sales",
            "description":null,
            "logo":null
        },
        "payments":[],
        "payment_link":"https://paycoins-checkout.netlify.app/checkout/535535574d6a49324e4459784e6a41344e6a51304e4451324e7a6331"},"error":false,
        "message":"Invoice Details Fetched"
}
```
### `.getAllInvoices()`

This allow you to get all list of available invoices in your wallet

```javascript
const Paycoins = require("paycoins-node");

const paycoins = new Paycoins(PUBLIC_KEY, PRIVATE_KEY);

const getAllInvoices = async () => {
  try {
    const response = await paycoins.Invoice.getAllInvoices();
    console.log(response);
  } catch (error) {
    console.log(error);
  }
};
```
### `.createInvoice()`

This allow you to initiate an invoice for payment

```javascript
const Paycoins = require("paycoins-node");

const paycoins = new Paycoins(PUBLIC_KEY, PRIVATE_KEY);

const createInvoice = async () => {
  try {
    const payload = {
      amount: 1000,
      currency: "NGN",
      redirect_url: "https://bcoin.com",
      customer: {
        firstname: "sdk",
        lastname: "node",
        email: "sdknodesetup@example.com",
      },
      customization: {
        title: "Sales",
      },
    };
    const response = await paycoins.Invoice.createInvoice(payload);
    console.log(response);
  } catch (error) {
    console.log(error);
  }
};
```

#### Returns

```javascript
{
  data: {
    reference: 'INV1626108108916',
    payment_link: 'https://paycoins-checkout.netlify.app/checkout/535535574d7a6b334e6a4d784e6a49324d5441344d5441344f544532'
  },
  error: false,
  message: 'Invoice Created'
}
```

### Exchange Rates

### `.getExchangeRates()`

This allows you to get the current market exchange rate of <b>1 NGN</b> (Nigeria Naira) to all other cryptos and fiat currencies

```javascript
const Paycoins = require("paycoins-node");

const paycoins = new Paycoins(PUBLIC_KEY, PRIVATE_KEY);

const getExchangeRates = async () => {
    try {
        const payload ={
            "currency": "NGN"
          }
        const response = await paycoins.ExchangeRates.getCurrencyExchangeRates(payload)
        console.log(response)

    } catch (error) {
        console.log(error)
    }
}
```

## Webhooks
Webhooks allow you to configure a URL that will be notified every time an event occurs on your account. When one of the events you subscribe to happens, paycoins will send a json object representing that event through a HTTP POST request to your webhooks URL.

### Webhook configuration
You can either edit your existing webhook configurations, or click “Add Webhook” configurations in your paycoins developer account settings. The most important things is to provide the <b>URL</b> address that events should be sent to.

### Responding to webhook
We do not expect any response from the endpoint you configure. You can respond with a customary HTTP 200 code, however this is not required. We currently do not support resending events that were failed to be properly delivered.

### Event types
This is a list of all the types of events we currently send. We may add more at any time, so you shouldn’t rely on only these types existing in your code.

#### `New deposited payment`
Sent when new payment has been deposited to your wallet.

##### `Response results`
```javascript
data: {
  currency: "BTC",
  amount: 0.001,
  type: "payment-successful",
  reference: "INV1608644446774",
},
```

#### `Payout`
Sent when new payout/withdrawal is made on your wallet.
##### `Response results.`
N.B: This respnse may varies depending on the status of the payout action

`payout successful response`
```javascript
data: {
  currency: "BTC",
  amount: 0.001,
  type: "payout",
  status: "successful"
},
```

`payout failed response`
```javascript
data: {
  currency: "BTC",
  amount: 0.001,
  type: "payout",
  status: "failed"
},
```
`payout request expired response`
```javascript
data: {
 currency: "BTC",
  amount: 0.001,
  type: "payout",
  status: "expired"
},
```

`payout cancelled response`
```javascript
data: {
  currency: "BTC",
  amount: 0.001,
  type: "payout",
  status:"canceled"
},
```