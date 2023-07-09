// Callback functions
// const callback = (function(){
//     let counter = 1;
//     function emitRandomNumber(){
//         const maxAttempt = 10;
//         let randomNum = '';
//         console.log("Attempt #" + counter + ". EmitRandomNumber is called.");
//         setTimeout(function(){
//             randomNum = Math.floor(Math.random() * 100);
//             console.log("2 seconds have lapsed.");
//             if(randomNum <= 80 && counter < maxAttempt){
//                 counter++;
//                 console.log("Random number generated is " + randomNum + ".");
//                 console.log("-----");
//                 emitRandomNumber();
//             }
//             else{
//                 console.log("Random number generated is " + randomNum + "!!!");
//                 console.log("-----");
//             }
//         }, 2000);
//     }
//     emitRandomNumber();
// })();

// Promises
// const promise = (function(){
//     let counter = 1;
//     function emitRandomNumber(){
//         const maxAttempt = 10;
//         let randomNum = '';
//         console.log("Attempt #" + counter + ". EmitRandomNumber is called.");
//         let promise = new Promise(function(resolve, reject){
//             setTimeout(function(){
//                 randomNum = Math.floor(Math.random() * 100);
//                 console.log("2 seonds have lapsed.");
//                 if(randomNum <= 80 && counter < maxAttempt){
//                     counter++;
//                     resolve("Random number generated is " + randomNum + ".");
//                 }
//                 else{
//                     reject("Random number generated is " + randomNum + "!!!");
//                 }
//             }, 2000);
//         });
//         promise
//         .then(function(response){
//             console.log(response);
//             console.log("-----");
//             emitRandomNumber();
//         })
//         .catch(function(response){
//             console.log(response);
//             console.log("-----");
//         });
//     }
//     emitRandomNumber();
// })();

// Async and Await
/*********************************************
 * async - makes a function return a Promise
 * await - makes a function wait for a Promise
 *********************************************/
const testFunction = (async function(){
    
    let counter = 1;

    function emitRandomNumber(){
        const maxAttempt = 10;
        let randomNum;
        console.log("Attempt #" + counter + ". EmitRandomNumber is called.");
        
        setTimeout(async function(){
            randomNum = Math.floor(Math.random() * 100);
            console.log("2 seconds have lapsed.");
            if(randomNum <= 80 && counter < maxAttempt){
                counter++;
                console.log("Random number generated is " + randomNum + ".");
                console.log("-----");
                await emitRandomNumber();
            }
            else{
                console.log("Random number generated is " + randomNum + "!!!");
                console.log("-----");
            }
        }, 2000);
    }

    await emitRandomNumber();

})();