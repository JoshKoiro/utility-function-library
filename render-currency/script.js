const renderCurrency = (number) => 
    (number % 1 !== 0) 
    ? "$" + renderComma(number)
    : "$" + renderComma(number) + ".00"

const renderComma = (number) => number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")

module.exports = renderCurrency