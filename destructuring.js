const colors = {
    color1 : 'red',
    color2 : 'green',
    color3 : 'blue'
}

let {color1, color2} = colors;
color1 = 'magenta';
colors.color1 = color1;
console.log(color1);
console.log(colors);

//We can't reassign the const variable itself but we can reassign the properties inside of it. 