filterObjectArray = (data,type,records) => mapObjects(data,type).filter((e,i)=> i!== 0)

const mapObjects = (data,type) => 
    (type=== "csv") 
        ? data.split('\r\n').map((e,i) => objectifyCommaElement(data,i))
        : (type === "txt")
            ? data.split('\r\n').map((e,i) => objectifyTabElement(data,i))
            : data.map((e,i) => objectifyArrayElement(data,i))

const objectifyCommaElement = (data,element) => objectify(getHeaders(data,"comma"),getCommaRecord(data,element))
const objectifyTabElement = (data,element) => objectify(getHeaders(data,"tab"),getTabRecord(data,element))
const objectifyArrayElement = (data,element) => objectify(getHeaders(data,"array"),getArrayRecord(data,element))

const objectify = (keys,data) => {  
    let outputObj = {}
    data.reduce((object,element,index) => outputObj[keys[index]] = element,{})
    return outputObj
}

const getHeaders = (data,type) => 
        (type === "tab") 
            ? getTabRecord(data,0)
            : (type === "comma")
                ? getCommaRecord(data,0)
                : (type === "array")
                    ? getArrayRecord(data,0)
                    : null

const getTabRecord = (data,n) => data.split('\r\n')[n].split("\t")

const getCommaRecord = (data,n) => data.split('\r\n')[n].split(",")

const getArrayRecord = (data,n) => data[n]

module.exports = filterObjectArray