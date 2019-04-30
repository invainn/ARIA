const router = require('express').Router();

const braintree = require('braintree');

const gateway = braintree.connect({
    environment: braintree.Environment.Sandbox,
    merchantId: process.env.BRAINTREE_MERCHANT_ID,
    publicKey: process.env.BRAINTREE_PUBLIC_KEY,
    privateKey: process.env.BRAINTREE_PRIVATE_KEY,
});

router.get('/token', (req, res) => {
    gateway.clientToken.generate({}, (err, data) => {
        if (err) {
            return res.status(401).send(err);
        }

        return res.status(200).send(data.clientToken);
    });
});

router.post('/', (req, res) => {
    const { nonce } = req.body;

    // This is an example, we should store prices in the database
    // of types of fees associated with an event
    // Sending the price on the client can lead to modification of said price
    gateway.transaction.sale({
        amount: '0.01',
        paymentMethodNonce: nonce,
        options: {
            submitForSettlement: true,
        },
        billing: {
            firstName: "Paul",
            lastName: "Smith",
            company: "Braintree",
            streetAddress: "1 E Main St",
            extendedAddress: "Suite 403",
            locality: "Chicago",
            region: "IL",
            postalCode: "60622",
            countryCodeAlpha2: "US"
        },
    },
    (err, result) => {
        if (err) {
            return res.status(400).send(err);
        }

        return res.status(200).send(result);
    });
});

router.post('/paypal', (req, res) => {
    const { nonce, price } = req.body;

    gateway.transaction.sale({
        amount: price,
        paymentMethodNonce: nonce,
        options: {
            submitForSettlement: true,
            paypal: {
                customField: 'NNMTA Event Registration',
                description: 'Event Registration for students'
            }
        },
    }
    ,(err, result) => {
        if (err) {
            return res.status(400).send(err);
        }

        return res.status(200).send(result);
    });
});

module.exports = router;