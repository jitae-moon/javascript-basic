// 1. 배열의 구조분해 할당
let arr = [1, 2, 3];

let [one, two, three, four = 4] = arr;
console.log(one, two, three, four);

// 2. 객체의 구조 분해 할당
let person = {
    name: 'moon',
    age: 29,
    hobby: 'tennis'
}

let {name, age, hobby} = person;
console.log(name, age, hobby);

// 3. 객체 구조 분해 할당을 이요해서 함수의 매개변수 얻기
const func = ({name, age, hobby, etc}) => {
    console.log(name, age, hobby);
};

func(person);