

function Interface() {


// 인터페이스(Interface)는 객체의 구조(Shape)을 정의하는데 사용되는 TypeScript의 핵심 기능입니다.
// 객체가 어떤 속성과 메서드를 가져야 하는지 명세하여 타입 안전성을 확보하고 코드의 계약(Contract) 역할을 합니다.

// 1. 객체 속성 정의 (Defining Object Properties)
// 가장 기본적인 사용법으로, 객체가 반드시 포함해야 할 속성들의 이름과 타입을 정의합니다.

// User 인터페이스는 name과 age 속성을 요구합니다.
interface User {
  name: string;
  age: number;
}

// 인터페이스를 충족하는 객체
let person: User = {
  name: "Minho Lim",
  age: 25,
}

// 인터페이스를 불충족하는 객체
// let incompletePerson: User = { name : 'jisoo' }; // 에러발생. 객체누락



// 2. 선택적 속성 (Optional Properties)
// 물음표(?)를 사용하여 해당 속성이 있을 수도 있고 없을 수도 있음을 나타냅니다.
interface User {
  name: string;
  age: number;
  jobTitle?: string; 
}

let user1: User = { name: "Alice", age: 30 }; // 유효

let user2: User = { name: "bob", age: 40, jobTitle: "Engineer" }; // 유효


// 3. 읽기 전용 속성 (Readonly Properties)
// readonly 키워드를 사용하여 객체가 생성된 이후에는 해당 속성의 값을 수정할 수 없도록 제한합니다.
interface Product {
  readonly id: number; // 읽기전용
  name: string;
  price: number;
}

let laptop: Product = {
  id: 101,
  name: "Laptop",
  price: 1200,
}

console.log(laptop.id) // 출력 101

// laptop.id = 200 // 오류. 읽기 전용이므로 수정불가
laptop.name = "br"
console.log(laptop.name) // 출력 br


// 4. 함수 타입 정의 (Defining Function Types)
// 인터페이스는 객체의 구조뿐만 아니라 **함수의 형태(매개변수 타입과 반환 타입)**도 정의할 수 있습니다.

// AddFunction 인터페이스는 (x: number, y: number) 형태의 함수를 정의
interface AddFunction {
  (x: number, y: number) : number;
}

// 인터페이스를 충족하는 함수 정의
let myAdd: AddFunction = function (a, b){
  return a + b;
}

console.log(myAdd(5, 3)); // 8

// 인터페이스의 매개변수 타입과 상이하므로, 오류발생
// let wrongAdd: AddFunction = function (a: string, b: string) {
//   return a+b;
// }


// 5. 인덱싱 가능 타입 (Indexable Types)
// 인터페이스가 배열처럼 숫자 인덱스나 객체처럼 문자열 키를 통해 접근될 수 있는 구조를 정의할 때 사용합니다.

// 숫자 인덱스 ([0], [1], ...)를 사용하여 접근했을 때 문자열 값을 반환해야 함을 정의합니다.
interface StringArray {
  [index: number]: string;
}
let myArray: StringArray = ["hello", "world"];
console.log(myArray[0]); // 출력 : hello

// myArray[2] = 100; // 숫자 인덱스로 접근 시 문자열이 아닌 다른 타입을 반환하려고 하면 에러


  return (
    <div>
      Interface
    </div>
  )
}

export default Interface
