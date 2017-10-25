const looper = (i,callback,...other) => {
    callback(i,...other)
    return (i>1)
        ? looper(i-1,callback,...other)
        : null
}

module.exports = looper