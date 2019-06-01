Array.prototype.square = function () {
    var input = this;
    return input.map(e => e * e);
}
Array.prototype.cube = function () {
    var input = this;
    return input.map(e => e * e * e);
}
Array.prototype.sum = function () {
    var input = this;
    return input.reduce((accumulator, currentValue) => accumulator + currentValue);
}
Array.prototype.average = function () {
    var input = this;
    if (input.length <= 0) return NaN;
    return input.sum() / input.length;
}
Array.prototype.even = function () {
    var input = this;
    return input.filter(e => e % 2 === 0);
}
Array.prototype.odd = function () {
    var input = this;
    return input.filter(e => e % 2 !== 0);
}


//https://www.codewars.com/kata/array-helpers