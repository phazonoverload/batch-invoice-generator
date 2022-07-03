const fixed = {
    date: 'June 14 2022',
    due: 'July 14 2022',
    invoiceId: 'YGT-01',
    currency: '£',
    address: ['Kevin Lewis', 'My Address Line 1', 'My Address Line 2', 'My Postcode'],
    services: [
        { name: 'Line Item For Invoice', value: 50 },
        { name: 'Line Item For Invoice', value: 100 },
        { name: 'Line Item For Invoice', value: 300 },
    ]
}

const instances = [
    { name: 'First Speakers Name', address: 'Speaker Addr Line 1, Speaker Addr Line 2, City, Postcode' },
    { name: 'Second Speakers Name', address: 'Speaker Addr Line 1, Speaker Addr Line 2, City, Postcode' },
]

module.exports = { fixed, instances }
