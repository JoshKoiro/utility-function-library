const makeObjectArray = require('./script.js')
const fs = require('fs')

fs.readFile('','utf-8',() =>{
    (err)
        ? console.log(err)
        : test(data)
})

const test = (data) => {
    console.log(makeObjectArray(data,"csv"))
}