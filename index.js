// Collection Functions (Arrays or Objects)
function myEach(collection, callback) {
    if (Array.isArray(collection)) {
        for (let i = 0; i < collection.length; i++) {
            callback(collection[i], i, collection);
        }
    } else {
        for (let key in collection) {
            if (collection.hasOwnProperty(key)) {
                callback(collection[key], key, collection);
            }
        }
    }
    return collection;
}

function myMap(collection, callback) {
    let result = [];
    myEach(collection, (value, key, collection) => {
        result.push(callback(value, key, collection));
    });
    return result;
}

function myReduce(collection, callback, acc) {
    let keys = Array.isArray(collection) ? collection : Object.values(collection);
    let startIndex = 0;

    if (acc === undefined) {
        acc = keys[0];
        startIndex = 1;
    }

    for (let i = startIndex; i < keys.length; i++) {
        acc = callback(acc, keys[i], collection);
    }
    return acc;
}

function myFind(collection, predicate) {
    if (Array.isArray(collection)) {
        for (let i = 0; i < collection.length; i++) {
            if (predicate(collection[i], i, collection)) {
                return collection[i];
            }
        }
    } else {
        for (let key in collection) {
            if (collection.hasOwnProperty(key) && predicate(collection[key], key, collection)) {
                return collection[key];
            }
        }
    }
    return undefined;
}

function myFilter(collection, predicate) {
    let result = [];
    myEach(collection, (value, key, collection) => {
        if (predicate(value, key, collection)) {
            result.push(value);
        }
    });
    return result;
}

function mySize(collection) {
    if (Array.isArray(collection)) {
        return collection.length;
    }
    return Object.keys(collection).length;
}

// Array Functions
function myFirst(array, n) {
    if (n === undefined) {
        return array[0];
    }
    return array.slice(0, n);
}

function myLast(array, n) {
    if (n === undefined) {
        return array[array.length - 1];
    }
    return array.slice(-n);
}

// BONUS Functions
function mySortBy(array, callback) {
    return [...array].sort((a, b) => {
        const aValue = callback(a);
        const bValue = callback(b);

        if (aValue < bValue) return -1;
        if (aValue > bValue) return 1;
        return 0;
    });
}

function myFlatten(array, shallow, newArr = []) {
    for (let i = 0; i < array.length; i++) {
        if (Array.isArray(array[i])) {
            if (shallow) {
                newArr.push(...array[i]);
            } else {
                myFlatten(array[i], shallow, newArr);
            }
        } else {
            newArr.push(array[i]);
        }
    }
    return newArr;
}

// Object Functions
function myKeys(object) {
    let keys = [];
    for (let key in object) {
        if (object.hasOwnProperty(key)) {
            keys.push(key);
        }
    }
    return keys;
}

function myValues(object) {
    let values = [];
    for (let key in object) {
        if (object.hasOwnProperty(key)) {
            values.push(object[key]);
        }
    }
    return values;
}
