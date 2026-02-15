// function currying
function Addition(a){
    return function(b){
        return function(c){
            return a+b+c;
        }
    }
}
// Below is the normal way while multiple function call but function currying is the solution of that lets deep dive
// let res = Addition(2);
// let data = res(4);
// let data1 = data(3);
// console.log(data1);

// Function Currying 
let result = Addition(2)(33)(3);
console.log(result);


// Real world example
userObj = {
    name: "Aditya",
    age: 23
}

function userInfo(obj){
    return function(userinfo){
        return obj[userinfo];
    }
}

let res = userInfo(userObj);
console.log(res('age'));











