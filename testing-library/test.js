const tester = require('./script.js')

const testFun = (a) => (a === undefined) ? 1 : a * 2

tester.equal(testFun(),1,"test function returns 1")

tester.equal(testFun(5),10,"test function multiplies by 2")

