function processBarscanners(barscannerlist) {
    var barscanners = [];
    var barscannerMap = new Map();
    var barscannersArray = barscannerlist.split('|');
    for (var _i = 0, barscannersArray_1 = barscannersArray; _i < barscannersArray_1.length; _i++) {
        var barscanner = barscannersArray_1[_i];
        var barcodeClient = barscanner.slice(0, 4);
        if (barscannerMap.has(barcodeClient)) {
            return ["invalid configuration"];
        }
        var barcodeValue = barscanner.slice(4);
        console.log("barcodeClient = ".concat(barcodeClient, " ,barcodeValue = ").concat(barcodeValue));
        barscannerMap.set(barcodeClient, barcodeValue);
        barscannerMap.set(barcodeClient, barcodeValue);
    }
    var sortedkeyMap = Array.from(barscannerMap.keys()).sort();
    console.log("sortedkeyMap = ".concat(sortedkeyMap.toString()));
    sortedkeyMap.forEach(function (sortedKey) {
        var value = barscannerMap.get(sortedKey);
        if (value !== undefined) {
            barscanners.push(value);
        }
    });
    console.log("barscanners = ".concat(barscanners));
    return barscanners;
}
var invalidInput = "0002abcdef|0003qwerty|0004sdfghj|0002zxcbm";
var validInput = "0002abcdef|0003qwerty|0004sdfghj|0001zxcbm";
var result = processBarscanners(validInput);
console.log(result);
