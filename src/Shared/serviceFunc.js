

export const utilMaxValue = (arr) => {
    let outputArr = arr.map(item => {
        let outputItem = parseFloat(item)
        if(typeof outputItem !== 'number' || isNaN(outputItem)) {
            outputItem = 0
        }
        return outputItem
    })
    const output = outputArr.length > 0 ? Math.max(...outputArr) : ''
    return output
}
