let handler = async m => m.reply(`
╭─「 Donasi • Pulsa 」
│ • Indosat Ooredoo [null]
│ • Telkomsel [null]
╰────

╭─「 Donasi • Non Pulsa 」
│ • Gopay, OVO, Dana [null]
│ • https://
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
