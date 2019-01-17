function cache(func) {
    let isExists = [];
    let isVisited = [];
    return function () {
        let key = JSON.stringify(arguments);
        if (!isExists[key] && !isVisited[key]) {
            isExists[key] = func(...arguments);
            isVisited[key] = true;
        }
        return isExists[key];
    }
}

// 	http://www.codewars.com/kata/function-cache