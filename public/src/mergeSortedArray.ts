function merge(nums1: number[], m: number, nums2: number[], n: number): number[] {

    let mergedArray : number[] = [...nums1.slice(0,m), ...nums2.slice(0,n)];

    mergedArray.sort((a,b) => a-b);

    nums1 = [...mergedArray];
    return nums1;
}

const nums1 = [1,2,3,0,0,0];
const m = 3;    
const nums2 = [2,5,6];
const n = 3;

console.log(merge(nums1, m, nums2, n));