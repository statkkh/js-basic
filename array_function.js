let members = [
    '유진',
    '레이',
    '가을',
    '리즈',
    '이서',
    '원영',
];


// members.push('coding');
console.log(members);       

// console.log(members.concat('codeing'));

// console.log(members);       
console.log(members.slice(0,3));       
// console.log(members);       

// spread operator
let members2 = [
    ...members
]
console.log(members2);

console.log("====================================================");

// join
console.log(members.join());
console.log(members.join('/'));


console.log(members.sort());

// filter()

numbers = [1,2,7,8,15];

console.log(numbers.filter((x) => x%2==0));

// find() -- 조건에 해당되면 값 반환후 종료
console.log(numbers.find((x)=> x % 2 ==0 )) // 2

// findIndex
console.log(numbers.findIndex((x)=> x % 2 ==0 )) // 1
