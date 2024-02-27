// async 

// 동기
function longWork() {
    const now = new Date();

    const afterTwoSeconds = now.getTime() + 2*1000;

    while(new Date().getTime() < now.getTime()) {

    }

    console.log("complete");
}

// console.log("Job");
// longWork();
// console.log("Training");


// 비동기
function asyncLongWork(){

    setTimeout(( ) => { 
        console.log("complete");
    },2000 );
}

console.log("Job");
asyncLongWork();
console.log("Training");