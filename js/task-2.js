function makeArray(firstArray, secondArray, maxLength) {
    const newArray = [];
    for (let i = 0; i <= firstArray.length - 1; i += 1) {
        if (newArray.length <= maxLength - 1) {
            newArray.push(firstArray[i]);
        }
    }
    for (let i = 0; i <= secondArray.length - 1; i += 1) {
        if (newArray.length <= maxLength - 1) {
            newArray.push(secondArray[i]);
        }
    }
    return newArray;
}

console.log(makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3)); // ["Mango", "Poly", "Ajax"]
console.log(makeArray(["Mango", "Poly", "Houston"], ["Ajax", "Chelsea"], 4)); // ["Mango", "Poly", "Houston", "Ajax"]
console.log(makeArray(["Mango"], ["Ajax", "Chelsea", "Poly", "Houston"], 3)); // ["Mango", "Ajax", "Chelsea"]
console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 2)); // ["Earth", "Jupiter"]
console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 4)); // ["Earth", "Jupiter", "Neptune", "Uranus"]
console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus", "Venus"], 0)); // []