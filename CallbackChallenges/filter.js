function filter(arr, operation){
    let newArr = [];
    for(var i=0; i<arr.length; i++){
        if(operation(arr[i])==true){
            newArr[i] = arr[i];
        }
    }
    return newArr;
}

/*1*/
let result = filter([1,2,3,4,15], function(val) { return val<10; }); //this filters each value in the array and only allows values that is less than 10
console.log(result); //this should log [1,2,3,4]

/*2*/
result = filter([1,2,3,4,15], function(val) { return val<3; }); //only allows values that is less than 3
console.log(result); //this should log [1,2]


    
