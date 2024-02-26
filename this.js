// 
// JS 는 Lexical Scope 

const testFunction = function(){
    return this;
}

// console.log(testFunction());

console.log(testFunction() === global);

function Person(name ,year){
    this.name = name;
    this.year = year;   

    this.sayHello = function(){
        return `Hello ${this.name}입니다`;
    };
}

const minJi = new Person("김민지", 1997);
// console.log(minji);

Person.prototype.dance = function(){
    return `${this.name} is dancing`;
}

// 프로토 타입에 함수를 정리 해도 this키워드 실행하는 대상의 객체로 매핑이 
// console.log(minji.dance());

// 1) apply() : parameter 리스트로 입력 필수
// 2) call() : 컴마를 기반 파리미터를 순서대로 넘겨주고
// 3) bind() : 

function multiply(x,y,z){
    return `${this.name} / result : ${x} + ${y} + ${z}`;
}

// 

function returnName(){
    return this.name;
}

// console.log(returnName());

const minJi2 = {
    name : "KimMinji"
}


// console.log(multiply.call(minJi2,4,3,5));
// console.log(multiply.apply(minJi2,[4,3,5]));

const lateFunc = multiply.bind(minJi2, 3, 8,5);
// bind : 원하는 함수에 원하는 객체를 바인딩 가능
console.log(lateFunc());
