var Cat = (function () {
    let totalWeight = 0;
    let instanceCount = 0;
    let Cat = function (name, weight) {
        if (!name || !weight) {
            throw new error();
        }
        this.name = name;
        this._weight = weight;
        totalWeight += this._weight;
        instanceCount++;
        Object.defineProperty(this, 'weight', {
            get() {
                return this._weight;
            },
            set(newWeight) {
                totalWeight -= this._weight;
                this._weight = newWeight;
                totalWeight += this._weight;
            }
        });
    };
    Cat.averageWeight = function () {
        return totalWeight / instanceCount;
    }
    return Cat;
}());

//	http://www.codewars.com/kata/using-closures-to-share-class-state