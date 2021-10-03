array = [5 , 20 ,30 , 14 , 221 , 98 ,82];

const sort = arr => {
    for (let i = 1; i < arr.length; i++) {
        for (let j = i; j && arr[j-1] > arr[j]; j--) {
            [arr[j], arr[j-1]] = [arr[j-1], arr[j]];
        }
    }
    return arr
};

console.log(sort(array));

array = [[1, 2 ,3 , 4],[1,2,3,4][1,2,3,4]];

console.log(array[0]);

for (let i = 1; i < 5; i++) {
    console.log(i);
    for (let j = 0; j < 4; j++) {
        console.log(j + "kaas");
    }
}