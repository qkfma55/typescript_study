
function TypeAlias() {

  /*********************************************************************
   * 정리
   * 원시타입 : type 변수명 = 타입종류
   * 객체타입 : type 변수명 = { 타입종류 }
   * 함수타입 : type 함수명 = ( 인자정의 ) => { 함수정의 }
  *********************************************************************/ 

  // 1. 원시 타입 및 유니언 타입에 별칭 부여
  type UserId = number; // 원시 타입(number)에 별칭 부여

  type LoadStatus = "loading" | "success" | "error"; // 유니언 타입에 별칭 부여

  let currentUserId: UserId = 1001;
  let appState: LoadStatus = "loading";

  // appState = "failed"; // 🚨 에러: LoadStatus에 정의되지 않은 값


  // 2. 객체 타입에 별칭 부여 (Interface와 유사)
  type Point = {
    x: number;
    y: number;
    z?: number;
  }

  let center: Point = { x: 50, y: 75 };
  center.z = 10


  // 3. 함수 타입에 별칭 부여
  // * 함수의 매개변수와 반환 값의 구조에 이름을 붙여 재사용성을 높입니다.

  // (a: number, b: number) 형태의 함수를 정의하며 반환 값은 number입니다.
  type MathOperation = (a: number, b: number) => number;

  const add: MathOperation = (x, y) => x + y;
  const subtract: MathOperation = (x, y) => x - y;

  console.log(add(10, 5)); // 출력: 15


  // 4. 제네릭과 결합하여 사용
  type DataContainer<T> = {
    data: T;
    timestamp: Date;
  }

  // 4-1. User 객체를 담는 컨테이너
  type User = { name: string };
  let userContainer: DataContainer<User> = {
    data: { name: "Charlie" },
    timestamp: new Date(),
  }

  // 4-2. 숫자 배열을 담는 컨테이너
  let numberArrayContainer: DataContainer<number[]> = {
    data: [1, 2, 3],
    timestamp: new Date(),
  }

  // 5. 타입 별칭과 인터페이스의 주요 차이점
  // 객체 구조 정의 시 type과 interface 중 어느 것을 사용할지 고민할 수 있습니다.


  // 확장시
  // Alias (type) : (Intersection Type)를 사용하여 결합 (확장 유사)
  // Interface (interface) : extends 키워드를 사용하여 명시적으로 확장

  // 합침시
  // Alias (type) : 불가능 (같은 이름으로 두 번 선언 불가)
  // Interface (interface) : 가능 (같은 이름으로 여러 번 선언하면 속성이 자동으로 합쳐짐)

  // 용도
  // Alias (type) : 유니언, 튜플, 원시 타입 등 모든 타입에 이름을 붙일 때
  // Interface (interface) : 주로 객체의 구조를 정의하고 클래스에 구현될 계약을 정의할 때

  // ** 일반적으로 객체의 구조를 정의하고 나중에 확장할 필요가 있다면 interface를, 복잡한 유니언/튜플 타입 또는 함수 타입에 이름을 붙일 때는 type alias를 사용하는 것이 좋습니다.
  
  return (
    <div>
      TypeAlias
    </div>
  )
}

export default TypeAlias
