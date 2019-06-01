function compose() {
    let func = [...arguments];
    return function () {
        if (func.length === 0) return arguments[0];
        let result = func[func.length - 1](...arguments);
        for (let count = func.length - 2; count >= 0; count--) {
            result = func[count](result);
        }
        return result;
    }
}

//	http://www.codewars.com/kata/function-composition-1