var shoppingCart = {
    Book:3,
    sunglass:1,
    keyboard:5,
    mouse:1,
    pen:25,
}
console.log(shoppingCart);
// ! Property Name Dot Notation
var pencount = shoppingCart.pen;
console.log(pencount);
// ! Use Specific Property Name Use dot Notation
var pencount2 = shoppingCart['sunglass'];
console.log(pencount2);
// ! Keys Property
var properties = Object.keys(shoppingCart)
console.log(properties);

