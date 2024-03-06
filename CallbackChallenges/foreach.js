function foreach(arr, operation){
    let newArr = [];
    for(var i=0; i<arr.length; i++){
        newArr[i] = operation(arr[i]);
    }  
    return newArr;
}

//1
let result = foreach([1,2,3,4,5], function(num) { return num*2; });
console.log(result); //this should log [2,4,6,8,10]

//2
result = foreach([1,2,3,"v88", "training"], function(val) { 
    return ( (typeof(val) === 'number') ? 0 : val);
});
console.log(result); //this should log [0,0,0,"v88","training"];

//3
result = foreach([1,2,3,"hello"], function(val) { return typeof(val); });
console.log(result); //this should log ["number", "number", "number", "string"];