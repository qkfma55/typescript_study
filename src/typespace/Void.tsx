

function Void() {

  /*********************************************************************
   * 정리
   * void 타입은 어떤 값도 반환하지 않는 함수의 반환 타입을 명시할 때 사용됩니다.
   * 1. 함수의 반환 타입으로 사용
   * 2. 함수 타입 정의에 사용
   * 3. void와 undefined의 차이점 (중요)
   * 엄격한 검사(strictNullChecks: true 일 때)
  *********************************************************************/ 

  // 1. 함수의 반환 타입으로 사용
  // void는 함수의 반환 타입으로 가장 흔하게 사용됩니다.
  function logMessage(message: string): void {
    console.log(`로그: ${message}`);
  }
  const result: void = logMessage("데이터 처리 완료");

  // 🚨 에러: void 타입 함수가 다른 값을 반환하려고 시도
  // function returningValue(): void { return 100; }
  

  // 2. 함수 타입 정의에 사용
  // CallbackType은 매개변수 없이 호출되며 아무것도 반환하지 않는 함수를 정의합니다.
  type CallbackType = () => void;

  const doSomething: CallbackType = () => {
      // console.log("작업 실행");
      // 명시적으로 return 문이 없거나, return; 만 있어도 void를 만족합니다.
  };

  doSomething();

  // 3. void와 undefined의 차이점 (중요)
  // JavaScript에서 함수가 반환값이 없으면 실제로 undefined를 반환합니다. 
  // 하지만 TypeScript에서 void와 undefined는 다르게 취급됩니다.

  // undefined
  // "값이 할당되지 않은" 상태를 나타내는 실제 값 타입.
  // undefined 외의 다른 값은 할당할 수 없습니다.

  // void
  // **"반환값을 사용하지 않겠다"**는 함수 타입.
  // undefined를 할당할 수 있지만, 주로 함수의 반환 타입에 사용됩니다.


  // 예제: 엄격한 검사(strictNullChecks: true 일 때)
  // void 타입의 변수에는 undefined만 할당할 수 있습니다. 
  // 다른 타입의 값이나 null은 할당할 수 없습니다.

  let v1: void = undefined; // undefined는 void에 할당 가능
  // let v2: void = null;    // 🚨 에러: null은 void에 할당 불가 (strictNullChecks가 true일 때)
  // void는 함수가 반환하는 값을 무시하도록 타입 시스템에 알리는 용도로 주로 사용되며,
  // any나 다른 실제 데이터 타입처럼 값 자체를 나타내는 용도는 아닙니다.


  return (
    <div>
      Void
    </div>
  )
}

export default Void
