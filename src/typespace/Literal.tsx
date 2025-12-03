
function Literal() {

  /*********************************************************************
   * 정리
   * type 변수명 = "특정문자값" | "특정문자값"
   * type 변수명 = 특정숫자값 | 특정숫자값
  *********************************************************************/ 

  // TypeScript Literal(리터럴) 타입 예제
  // 특정 원시 값 자체를 타입으로 정의하는 것을 의미합니다.
  // 변수가 가질 수 있는 값을 정확하고 제한적으로 명시할 때 사용됩니다.

  // 1. 문자열 리터럴 타입 (String Literal Types)
  // 가장 흔하게 사용되며, 변수가 특정 문자열만 가질 수 있도록 제한합니다.

  type StatusType = "success" | "error";
  let responseStatus: StatusType;
  responseStatus = "success";
  responseStatus = "error";
  // responseStatus = "pending"; // 특정하지 않은 문자열이므로 에러발생
  

  // 2.숫자 리터럴 타입 (Numeric Literal Type)
  // 변수가 특정 숫자값만 가질 수 있도록 제한합니다.

  type HttpCode = 200 | 400 | 500;
  let currentCode: HttpCode;
  currentCode = 200;
  currentCode = 400;
  // currentCode = 300; // 특정하지 않은 숫자값이므로 에러발생


  // 3. 불리언 리터럴 타입 (Boolean Literal Types)
  // true 또는 false 중 하나만을 명확히 지정할 때 사용합니다. 유니언 타입과 병합할때 유리하게 사용 가능합니다.

  interface SuccessResult {
    status: "success";  // status는 반드시 "success" 문자열이어야 함
    data: any;
    isError: false;     // isError는 반드시 false 불리언 값이어야 함
  }

  interface ErrorResult {
    status: "error";    // status는 반드시 "error" 문자열이어야 함
    message: string;
    isError: true;      // isError는 반드시 true 불리언 값이어야 함
  }

  type Result = SuccessResult | ErrorResult; // Result 타입은 성공 결과 또는 오류 결과 중 하나입니다.
  let success: Result = {
    status: "success",
    data: [1, 2],
    isError: false,
  } // 유효 (SuccessResult 규칙을 따름)

  // let mixed: Result = {
  //   status: "error", 
  //   data: [], 
  //   isError: true
  // } // 에러 (설정 값이 맞지 않음)

  // 이처럼 리터럴 타입을 유니언 타입(|)과 결합하면, 코드에서 발생 가능한 상태를 명확히 모델링하고, 각 상태에 따라 객체의 구조가 달라지는 것(SuccessResult에 data가 있고 ErrorResult에 message가 있는 것)을 타입 시스템이 보장해 줄 수 있습니다.

  return (
    <div>
      Literal
    </div>
  )
}

export default Literal
