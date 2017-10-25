//Construct Regex operation
const createRegex = (input,options) => (options === undefined)
        ? new RegExp(input,"ig") 
        : appendRegex(input,options)

const appendRegex = (input,options) => {
        let output = new RegExp(input,"ig");
        (/case/.test(options))
            ? output = new RegExp(input,"g")
            : output = output;
        (/regex/.test(options))
            ? output = new RegExp(input)
            : output = output;
        return output
}
//Use Regex Function to search text
const search = (content,regex,options) => (createRegex(regex,options).test(content)) ? content : null

//Use Search Function to map over array of strings
const searchContent = (content,regex,options) => 
        (typeof content === "string")
            ? content.split("\r\n")
                .map((e) => search(e,regex,options))
                        .filter((e) => e !==null)
            :content
                .map((e) => search(e,regex,options))
                    .filter((e) => e !== null)

module.exports = searchContent;