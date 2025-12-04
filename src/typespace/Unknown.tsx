

function Unknown() {

  /*********************************************************************
   * 정리
   * TypeScript 3.0에서 도입된 타입으로, any 타입의 안전한 대안입니다.
   * any와 달리 unknown 타입의 값은 사용하기 전에 반드시 타입을 검사해야 하는 엄격한 규칙이 있습니다.
  *********************************************************************/ 

  // 1. unknown 타입 정의 및 할당
  // unknown 타입의 변수에는 어떤 타입의 값이라도 할당할 수 있습니다.
  let value: unknown;

  // 어떤 타입이든 할당 가능
  value = 100;
  value = "Hello World";
  value = [1, 2, 3];
  value = { name: "Safe" };

  // 2. unknown 타입 사용의 안전성 (Any와의 차이점)
  // unknown 타입의 값은 TypeScript에게 그 실제 타입이 무엇인지 알 수 없다고 경고합니다.
  // 따라서 타입 좁히기(Type Narrowing) 과정 없이는 해당 값의 속성이나 메서드에 접근할 수 없습니다.
  let userInput: unknown = "typescript is great!";

  // 🚨 에러: unknown 타입에는 .toUpperCase() 메서드가 있는지 알 수 없으므로 에러 발생.
  // userInput.toUpperCase(); 

  // 🚨 에러: unknown 타입에는 .length 속성이 있는지 알 수 수 없으므로 에러 발생.
  // console.log(userInput.length);


  // 3. 타입 좁히기를 통한 안전한 사용
  // unknown 타입의 값을 사용하려면, 반드시 typeof 검사나 타입 단언(Type Assertion) 등을 통해 해당 값의 타입을 특정해야 합니다.
  function processInput(input: unknown) {
    // 타입 좁히기: typeof 검사를 통해 string 타입임을 확정
    if (typeof input === 'string') {
        // 이 블록 내에서 input은 string 타입으로 간주됩니다.
        console.log(input.toUpperCase()); // 안전하게 string 메서드 사용 가능
    } 
    // 타입 좁히기: instanceof 검사를 통해 Date 타입임을 확정
    else if (input instanceof Date) {
        // 이 블록 내에서 input은 Date 타입으로 간주됩니다.
        console.log(input.toISOString()); // 안전하게 Date 메서드 사용 가능
    }
    // 타입 좁히기: 객체이고 특정 속성이 있는지 확인
    else if (typeof input === 'object' && input !== null && 'id' in input) {
        // 이 블록 내에서 input은 { id: unknown } 타입임을 알게 됨 (더 세밀한 검사 필요)
        console.log(input.id);
    }
    else {
        console.log("알 수 없는 타입의 입력입니다.");
    }
  }

  processInput("hello");   // 출력: HELLO
  processInput(new Date()); // 출력: (현재 시간의 ISO 문자열)
  processInput(123);       // 출력: 알 수 없는 타입의 입력입니다.


  // 4. unknown vs. any 비교

  // unknown
  // 엄격함. 사용 전에 반드시 타입을 좁혀야 함.
  // 안전함. 컴파일 시점 에러를 방지함.
  // 외부 데이터 (API 응답)나 타입이 불확실한 값을 안전하게 처리할 때.

  // any
  // 없음. 타입 검사를 완전히 우회함.
  // 위험함. 런타임 에러를 유발할 수 있음.
  // 타입 시스템을 일시적으로 꺼야 할 때 (되도록 사용 지양).

  // ** unknown은 들어오는 값은 알 수 없지만, 사용할 때는 반드시 안전하게 타입을 확인하도록 강제하여 
  // TypeScript의 강점을 유지하게 해줍니다.
  

  return (
    <div>
      Unknown
    </div>
  )
}

export default Unknown
