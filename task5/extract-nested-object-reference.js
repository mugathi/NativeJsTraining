Object.prototype.hash = function (string) {
    var arr = string.split('.');
    var res = this;
    for (let i = 0; i < arr.length; i++) {
        if (!res) {
            break;
        } else {
            res = res[arr[i]];
        }
    }
    return res;
}

//https://www.codewars.com/kata/extract-nested-object-reference