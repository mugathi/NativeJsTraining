function prefill(length, value) {
    let numberValue = parseFloat(length, 10);
    if (numberValue == 0) {
        return [];
    } else if (!numberValue || numberValue < 0 || numberValue % 1 !== 0) {
        throw new TypeError(length + " is invalid");
    } else {
        return Array(numberValue).fill(value);
    }
}