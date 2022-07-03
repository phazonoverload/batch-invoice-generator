# Batch Invoice Generator

I run a lot of community initiatives that allow me to pay participants and vendors but I require invoices for my records. Sometimes, and often, this will be the first time a person needs to create an invoice.

Rather than stress them out, I offer to create one 'on their behalf' using their provided information (name, address) along with information that is fixed for all people I am creating invoices for (my address, line items, etc). To aid this, I built a script to allow the generation of many invoices at once.

## Usage

Run this command

```
git clone https://github.com/phazonoverload/batch-invoice-generator && cd batch-invoice-generator && npm install && mv input.example.js input.js
```

Then, update the information in `index.js`.

Once completed, run `node index.js` and all invoices should appear in a `output` directory.
