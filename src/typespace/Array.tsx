
function Array() {

  /*********************************************************************
   * 정리
   * 1. 기본문법 : Type[] 
   * 2. 제너릭 배열타입 : Array<Type>
   * 3. 유니언 타입 : (Type | Type)[]
   * 4. 읽기전용배열 : readonly Type[]
  *********************************************************************/ 

  // 크가 2가지 Array[]타입
  // 1. 기본문법 : Type[] 
  // 요소타입 뒤에 대괄호[]를 붙여서 해당 타입의 요소들로 이루어진 배열임을 나타냅니다.
  // number[], string[], boolean[], User[] - 사용자정의타입
  type User = { id: number, name: string };
  let users: User[] = [{id: 1, name: "A"}, {id: 2, name: "B"}];

  // 2. 제너릭 배열타입 : Array<Type>
  // Array<T> 형태로 정의하며, 이는 제네릭(Generic)을 사용한 표현입니다. 기능적으로 Type[]과 완전히 동일하며 *선호도 차이입니다.

  // 숫자 배열	  number[]	Array<number>
  // 문자열 배열	string[]	Array<string>

  let scores: Array<number> = [90,50,80];
  let fruitNames: Array<string> = ["apple", "banana", "kiwi"];

  // 3. 유니언 타입(|)으로 다양한 요소 허용하기
  let mixedArray: (number | string)[] = [1, "two", 3, "four"];
  // 주의: 아래 코드는 에러입니다.
  // let mixedArrayWrong: number | string[] = [1, "two"]; 
  // 위 코드는 'number' 타입이거나 'string[]' 타입이라는 의미입니다.

  // 4. 읽기전용배열 readonly
  // 배열을 선언한 후에는 내용을 변경(요소추가, 제거, 수정)할 수 '없도록' 읽기 전용 배열로 선언할 수 있습니다.
  let immutableNumbers: readonly number[] = [1, 2, 3];
  // immutableNumbers.push(4); // 🚨 Error: Property 'push' does not exist on type 'readonly number[]'.
  // immutableNumbers[0] = 10; // 🚨 Error: Index signature in type 'readonly number[]' only permits reading.

  return (
    <div>
      Array
    </div>
  )
}

export default Array
