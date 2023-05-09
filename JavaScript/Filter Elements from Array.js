/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function(arr, fn) {
    let ar = [];
    arr.forEach(function(x, i) {
        if(fn(x,i)) {
            ar.push(x);
        }
    })
    return ar;
};
