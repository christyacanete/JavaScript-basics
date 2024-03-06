function reject(arr, operation){
    let newArr = [];
    let j=0;
    for(var i=0; i<arr.length; i++){
        newArr[j] = arr[i]
        operation(arr[i]) ? j=0 : j++;
    }
    return newArr;
}

/*1*/
let result = reject([1,2,3,4,15], function(val) { return val<10; }); //rejects any value that is less than 10
console.log(result); //this should log [15]

/*2*/
result = reject([1,2,3,4,15], function(val) { return val<3; }); //rejects any value that is less than 3
console.log(result); //this should log [3,4,15]
