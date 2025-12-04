

function NullUndefined() {

  /*********************************************************************
   * 정리
   * 1. undefined 타입
   * 2. null 타입
   * 3. null과 undefined의 타입 시스템 동작
   * 4. null 또는 undefined를 확인하는 타입 좁히기
  *********************************************************************/ 

  // null 및 undefined 타입 예제
  // TypeScript에서 null과 undefined는 값이면서 동시에 타입입니다. 
  // 두 타입은 JavaScript의 핵심 개념을 반영하며, 값의 **부재(Absence)**를 나타냅니다.

  // 1. undefined 타입
  // undefined는 값이 할당되지 않은(Not assigned) 상태를 나타냅니다.

  // 1-1. 타입을 명시하지 않고 변수 선언 시 undefined로 추론
  let notInitialized: undefined; 
  // 이 변수에는 undefined 외의 다른 값은 할당할 수 없습니다 (strict 모드 시).

  // 1-2. 값 할당
  notInitialized = undefined; 

  // 1-3. 존재하지 않는 객체 속성에 접근 시
  let user = {};
  // console.log(user.name); // 런타임에 undefined가 반환됨


  // 2. null 타입
  // null은 **의도적으로 값이 비어 있음(Intentional absence of value)**을 나타냅니다. 
  // 개발자가 명시적으로 "여기는 값이 없다"고 지정한 것입니다.

  let userData: string | null = "데이터";

  // 2-1. 데이터를 지우고 null 할당
  userData = null; 

  // 2-2. 데이터 조회 결과가 없을 때
  function findUser(id: number): string | null {
      if (id === 1) {
          return "Alice";
      }
      // 사용자를 찾지 못하면 의도적으로 null 반환
      return null; 
  }

  
  // 3. null과 undefined의 타입 시스템 동작
  // TypeScript의 동작은 strictNullChecks 설정에 따라 크게 달라집니다.

  // A. strictNullChecks: false (기본 설정)
  // 이 모드에서는 null과 undefined가 모든 타입에 암묵적으로 포함됩니다.

  // 이 모드에서는 string 타입에 null이나 undefined를 할당해도 에러가 나지 않습니다.
  let myString: string = "hello";
  myString = null;     // 허용됨
  myString = undefined; // 허용됨
  // B. strictNullChecks: true (권장 설정)
  // 이 모드에서는 null과 undefined는 해당 타입이 명시적으로 포함되지 않는 한 어떤 타입에도 할당될 수 없습니다. 
  // 이는 버그를 줄이고 타입 안전성을 높이는 핵심 기능입니다.


  // strictNullChecks: true 모드
  let myStringStrict: string = "hello";
  // myStringStrict = null;       // 🚨 에러: Type 'null' is not assignable to type 'string'.
  // myStringStrict = undefined;  // 🚨 에러: Type 'undefined' is not assignable to type 'string'.

  // 해결책: 유니언 타입(`|`)을 사용해 명시적으로 허용해야 합니다.
  let nullableString: string | null = null;
  let optionalString: string | undefined = undefined;
  
  
  // 4. null 또는 undefined를 확인하는 타입 좁히기
  // null 또는 undefined가 될 수 있는 유니언 타입의 변수를 사용할 때는, 
  // 이 두 값의 부재를 확인하는 타입 좁히기 과정이 필수적입니다.

  function printLength(text: string | null | undefined): void {
      // 💡 타입 좁히기: null과 undefined를 동시에 제거 (nullish check)
      if (text) {
          // 이 블록 안에서 text는 string 타입으로 좁혀집니다.
          console.log(text.length); 
      } else {
          // text가 null, undefined, 또는 빈 문자열인 경우
          console.log("텍스트 값이 없습니다.");
      }

      // 💡 타입 좁히기: null만 확인 (명시적 null check)
      if (text !== null && text !== undefined) {
          // text가 string 타입으로 좁혀집니다.
          console.log(`길이는 ${text.length} 입니다.`);
      }
  }


  
  return (
    <div>
      NullUndefined
    </div>
  )
}

export default NullUndefined
