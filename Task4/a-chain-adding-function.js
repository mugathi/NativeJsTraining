function add(count) {
    let sum = function (num) {
        return add(count + num);
    }
    sum.toString = function () {
        return count;
    }
    return sum;
}

//	http://www.codewars.com/kata/a-chain-adding-function