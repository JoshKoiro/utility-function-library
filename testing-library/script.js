const log = require('../color-console/script.js').log
const color = require('../color-console/script.js').colors

module.exports.render = (val,text) => {
    (val === true)
        ? log(color.FgGreen,text)
        : log(color.FgRed,text)
}

module.exports.equal = (func,val,text) => {
    (func === val)
        ? this.render(true,text)
        : this.render(false,text)
} 

module.exports.not = (func,val,text) => {
    (func !== val)
        ? this.render(true,text)
        : this.render(false,text)
}