var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
function merge(nums1, m, nums2, n) {
    var mergedArray = __spreadArray(__spreadArray([], nums1.slice(0, m), true), nums2.slice(0, n), true);
    mergedArray.sort(function (a, b) { return a - b; });
    nums1 = __spreadArray([], mergedArray, true);
    return nums1;
}
var nums1 = [1, 2, 3, 0, 0, 0];
var m = 3;
var nums2 = [2, 5, 6];
var n = 3;
console.log(merge(nums1, m, nums2, n));
