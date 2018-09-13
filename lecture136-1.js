let show = console.log; 
let input = [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20];
// input.sort((a,b) => a-b).forEach(num => console.log(num));


function cleaner(array) {
    let sorted = array.sort((a,b) => a-b);
    let cleaned = sorted.map((num) => {
        return num;
    })
    return cleaned;
}

show(cleaner(input));