function compose(f, g) {
    return function () {
        return f(g(...arguments));
    }
}

//	http://www.codewars.com/kata/function-composition