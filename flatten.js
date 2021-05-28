function flatten(array) {
    const flattenReducer = (result, element) => Array.isArray(element) ? element.reduce(flattenReducer, result) : result.concat(element);
    return array.reduce(flattenReducer, []);
}

function testFlatten() {
    const array1 = [[[1], 2, 3], 4, [5, [6]]];
    const array2 = [1, [2, [3, 4, [5]], 6], [7], 8];
    console.log('Flattened array 1:', flatten(array1));
    console.log('Flattened array 2:', flatten(array2));
}

testFlatten();