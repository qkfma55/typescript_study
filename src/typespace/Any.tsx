function Any() {

  /*********************************************************************
   * 정리
   * 어떤 값도 다 수용할 수 있다. 변수, 함수, 빈 객체 등
  *********************************************************************/ 


  let value: any = "이것은 문자열 입니다.";
  console.log(value);

  value = 100;
  console.log(value);

  value = true;
  console.log(value);

  function processData(data: any) {
    // TypeScript는 data의 실제 타입을 모르기 때문에
    // 이 코드가 런타임에 에러를 발생시킬지 컴파일 시점에 알 수 없습니다.
    console.log("데이터 길이: ", data.length);
    // data가 객체가 아닐 경우 (예: 숫자나 불리언) 런타임 에러가 발생할 수 있습니다.
  }

  processData("안녕하세요")
  processData([1,2,3]);
  
  // 주의 : data가 숫자일때 length 속성은 없으므로 런타임 에러가 발생합니다.
  // 만약 이 코드를 실행하면 자바스크립트 런타임에서 TypeError가 발생합니다.
  // 🚨 processData(100); // 타입에러 발생안함. 걍 Undefined

  // ** any타입은 속성이나 메서드 사용에 대해 아무런 경고도 주지 않습니다. 이로 인해 **런타임 에러(실제 프로그램이 실행될 때 발생하는 에러)**가 발생할 위험이 커집니다.

  let myObject: any = {}; // 빈객체(초기에는 아무 메서드도 없음)
  // TypeScript는 myObject가 hello()라는 메서드를 가지고 있는지 확인하지 않습니다.
  // myObject.hello(); // 이 코드는 런타임에러를 발생시킵니다.

  // any 보다 안전한 대안
  // unknown : 값은 일단 받아들이되, 사용하기 전 반드시 타입을 검사해야함.
  // 값을 사용하려면 if(typeof value === 'string') 같은 타입 좁히기 과정을 거쳐야 합니다.
  // Object : 모든 타입의 객체를 나타냅니다. (원시타입X) 
  // 객체 형태이지만, 어떤 속성이 있는지 모를때 사용합니다. any처럼 임의의 속성에 접근할 수 없습니다.
  // as (타입단언) : 개발자가 특정 시점에 해당 값의 타입을 확신하고 TypeScript에게 알려주는 방법.
  // 타입을 확신할 때만 사용해야하며, 라이브러리/외부 데이터 타입을 강제로 지정할 때 사용합니다.

  return (
    <div>
      any
    </div>
  )
}

export default Any
