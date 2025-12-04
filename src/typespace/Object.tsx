

function Object() {

  /*********************************************************************
   * 정리
   * 1. 인터페이스 (interface)를 사용한 객체 타입 정의 (권장)
   * 2. 타입 별칭 (type alias)을 사용한 객체 타입 정의
   * 3. 익명 객체 타입 (Inline Object Type)
   * 4. 제네릭 객체 타입
  *********************************************************************/ 

  // TypeScript에서 **객체 타입(Object Type)**은 속성(property)들의 이름과 타입, 
  // 그리고 메서드(method)들의 구조를 정의하는 타입입니다. JavaScript의 모든 객체와 유사한 구조를 가집니다.

  // 객체 타입을 정의하는 가장 일반적이고 권장되는 방법은 
  // **인터페이스(interface)**와 **타입 별칭(type alias)**을 사용하는 것입니다.

  // 1. 인터페이스 (interface)를 사용한 객체 타입 정의 (권장)
  // 객체의 구조를 정의하는 가장 표준적인 방법입니다.

  interface Person {
    // 필수 속성
    firstName: string; 
    lastName: string;
    
    // 선택적 속성 (?:)
    age?: number; 
    
    // 메서드 시그니처 (함수)
    greet(message: string): void;
  }

  // Person 인터페이스를 충족하는 객체
  let user: Person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    greet: (msg: string) => {
        console.log(`${msg}, ${user.firstName}!`);
    }
  };

  user.greet("Hello"); // 출력: Hello, John!

  // 🚨 에러: 필수 속성(lastName)이 누락됨
  // let incompleteUser: Person = { firstName: "Jane" }; 



  // 2. 타입 별칭 (type alias)을 사용한 객체 타입 정의
  // 인터페이스와 거의 동일하게 객체 타입을 정의할 수 있으며, 
  // 유니언/인터섹션 등 복잡한 타입을 결합할 때 유용합니다.

  type Config = {
    // 읽기 전용 속성 (readonly)
    readonly apiUrl: string; 
    timeout: number;
  };

  let defaultConfig: Config = {
    apiUrl: "https://api.example.com",
    timeout: 5000
  };

  // 🚨 에러: readonly 속성은 수정 불가
  // defaultConfig.apiUrl = "http://new.api";



  // 3. 익명 객체 타입 (Inline Object Type)
  // 변수를 선언하는 동시에 그 구조를 인라인으로 정의할 수 있지만, 
  // 재사용성이 떨어져 복잡한 구조에는 잘 사용되지 않습니다.

  let point: { x: number; y: number } = { x: 10, y: 20 };

  // 🚨 에러: 정의된 속성 외에 추가할 수 없음
  // point.z = 30;



  // 4. 제네릭 객체 타입
  // 객체가 담을 값의 타입을 유연하게 정의할 때 사용됩니다.

  // Dictionary는 문자열 키를 가지며, 그 값의 타입은 T로 정의됩니다.
  interface Dictionary<T> {
    [key: string]: T;
  }

  // 값이 number인 Dictionary
  let scores: Dictionary<number> = {
    math: 90,
    science: 85
  };

  // 값이 Person 객체인 Dictionary
  let usersById: Dictionary<Person> = {
    'u1': { firstName: "A", lastName: "B", greet: () => {} }
  };

  // 🚨 에러: number 타입 Dictionary에 문자열 할당 시도
  // scores.english = "excellent";
  
  return (
    <div>
      Object
    </div>
  )
}

export default Object
