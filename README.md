# Utility Function Library

This is a library to organize common functions used in data-transformation.

Below is a description of each utility and how to use it.

### Usage

This repository is designed to be imported into a project using `git clone` and `git pull`. Once a project has been created that you would like to import the Utility Function Library, navigate to the appropriate folder and run the following command:

```sh
git clone https://github.com/JoshKoiro/utility-function-library.git
```

Once the project folder has been imported into your project, you may update using:

```sh
git pull
```

All library files are named `script.js` in the appropriate folder location.

### Table of Contents

- [Create Array of Objects](#create-array-of-objects)

- [Regex Search](#regex-search)

- [Functional Loop](#functional-loop)

- [Render Currency](#render-currency)

  ​
## Create Array of Objects

To import the Create Array Object function use the following code:

### Import

```javascript
const makeObjectArray = require('./utility-function-library/create-object-array/script.js')
```

### Syntax

```javascript
const objectArray = createArrayObjects(data,[type],[records])
```



### Parameters

**Data**: The data to be made into an object-array. This can be in several formats as determined by the `type` parameter.

**Type** [Optional]: A string determining what type of information is being passed into `data`. 

| String               | Description                              |
| -------------------- | ---------------------------------------- |
| `"csv"` or `"comma"` | expected data passed into `data` is to be comma separated values file. (*.csv) |
| `"txt"` or `"tab"`   | expected data passed into `data` is to be tab-separated text file. (*.txt) |
| `"array"` or `null`  | expected data passed into `data` is to be 2 dimensional array |

**Records** [Optional]: A number determining the length of the return value array.

### Return Value

An array of objects with the first line of the .csv or .txt file being the object keys and the value of each key being the corresponding value from the dataset.

### Usage

```javascript
const makeObjectArray = require('./utility-function-library/create-object-array/script.js')

console.log(objectArray(data,'array'))
```



## Regex Search