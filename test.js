let arr = [1,2,3,4,5]
arr = arr.map((value) => {
    let x;
    if (value == 1) {
        x = 'st';
    } else if (value == 2) {
        x = 'nd';
    } else if (value == 3) {
        x = 'rd'
    } else {
        x = 'th'
    }
    return `${value}${x}`
} )

console.log('array', arr)
// console.log('newarray', newArr)

