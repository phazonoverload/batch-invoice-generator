const { fixed, instances } = require('./input.js')
const PDFDocument = require('pdfkit')
const fs = require('fs')

const outputDir = './output'

if (!fs.existsSync(outputDir)) fs.mkdirSync(outputDir)

for(let instance of instances) {
    const doc = new PDFDocument()
    const fileName = `${instance.name.toLowerCase().split(' ').join('-')}.pdf`
    doc.pipe(fs.createWriteStream(`${outputDir}/${fileName}`))

    doc.font('Helvetica-Bold').fontSize(32).text(instance.name, 32, 32)
    doc.font('Helvetica')
    doc.text(`Invoice ${fixed.invoiceId}`)

    doc.fontSize(16)
    doc.text(`Generated ${fixed.date} - Due ${fixed.due}`)

    doc.moveDown()
    doc.text(instance.name)
    const lines = instance.address.split(', ')
    for(let line of lines) doc.text(line)
    for(let i=0; i<lines.length+1; i++) doc.moveUp()

    for(let line of fixed.address) doc.text(line, { align: 'right' })

    const longerLine = Math.max(lines.length, fixed.address.length)

    let moveDownBy = 0
    if(fixed.address.length < lines.length+1) moveDownBy = lines.length+1 - fixed.address.length
    for(let i=0; i<moveDownBy+1; i++) doc.moveDown()

    doc.list(fixed.services.map(s => (`${s.name}: ${fixed.currency}${s.value}`)))

    doc.moveDown()
    const total = fixed.services.reduce((n, {value}) => n+value, 0)
    doc.text(`Total: ${fixed.currency}${total}`)





    doc.end()
}
