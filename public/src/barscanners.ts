function processBarscanners(barscannerlist: string): string[] {
    let barscanners: string[] = [];
    let barscannerMap: Map<string, string> = new Map<string, string>();
    let barscannersArray = barscannerlist.split('|');
    for (const barscanner of barscannersArray) {
        const barcodeClient = barscanner.slice(0, 4);
        if (barscannerMap.has(barcodeClient)) {
            return ["invalid configuration"];
        }
        const barcodeValue = barscanner.slice(4);
        console.log(`barcodeClient = ${barcodeClient} ,barcodeValue = ${barcodeValue}`);
        barscannerMap.set(barcodeClient, barcodeValue);
        barscannerMap.set(barcodeClient, barcodeValue);
    }

    const sortedkeyMap = Array.from(barscannerMap.keys()).sort();

    console.log(`sortedkeyMap = ${sortedkeyMap.toString()}`);
    sortedkeyMap.forEach(sortedKey => {
        const value = barscannerMap.get(sortedKey);
        if (value !== undefined) {
            barscanners.push(value);
        }
    });
    console.log(`barscanners = ${barscanners}`);
    return barscanners;
}

const invalidInput = "0002abcdef|0003qwerty|0004sdfghj|0002zxcbm";
const validInput = "0002abcdef|0003qwerty|0004sdfghj|0001zxcbm";
const result = processBarscanners(validInput);
console.log(result);