
function Literal() {

/*
  📝 TypeScript Literal (리터럴) 타입 예제
TypeScript의 **리터럴 타입(Literal Type)**은 특정 원시 값 자체를 타입으로 정의하는 것을 의미합니다. 변수가 가질 수 있는 값을 정확하고 제한적으로 명시할 때 사용됩니다.

쉽게 말해, **'모든 문자열'**이 아닌 **'정확히 "success"라는 문자열'**만 허용하도록 타입을 좁히는 것입니다.

1. 문자열 리터럴 타입 (String Literal Types)
가장 흔하게 사용되며, 변수가 특정 문자열만 가질 수 있도록 제한합니다.

📝 예제: 특정 상태 값 정의
TypeScript

// StatusType은 오직 "success" 또는 "error"라는 문자열만 허용합니다.
type StatusType = "success" | "error";

let responseStatus: StatusType;

// ✅ 유효: 정의된 리터럴 값을 할당
responseStatus = "success";
responseStatus = "error";

// 🚨 에러: 정의되지 않은 문자열을 할당하려고 시도
// responseStatus = "pending"; 
// Type '"pending"' is not assignable to type 'StatusType'.
2. 숫자 리터럴 타입 (Numeric Literal Types)
변수가 특정 숫자 값만 가질 수 있도록 제한합니다.

📝 예제: 특정 HTTP 상태 코드 정의
TypeScript

// HttpCode는 오직 200, 404, 500 세 가지 숫자만 허용합니다.
type HttpCode = 200 | 404 | 500;

let currentCode: HttpCode;

// ✅ 유효
currentCode = 200;
currentCode = 500;

// 🚨 에러: 정의되지 않은 숫자를 할당하려고 시도
// currentCode = 400; 
// Type '400' is not assignable to type 'HttpCode'.
3. 불리언 리터럴 타입 (Boolean Literal Types)
true 또는 false 중 하나만을 명확히 지정할 때 사용합니다. (유니언 타입과 결합하여 사용될 때 유용합니다.)

📝 예제: 상태 객체에서 특정 플래그 강제
TypeScript

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

// Result 타입은 성공 결과 또는 오류 결과 중 하나입니다.
type Result = SuccessResult | ErrorResult;

// ✅ 유효 (SuccessResult 규칙을 따름)
let success: Result = { status: "success", data: [1, 2], isError: false };

// 🚨 에러: isError와 status 값이 충돌
// let mixed: Result = { status: "success", data: [], isError: true }; 
// Type '{ status: "success"; data: any[]; isError: true; }' is not assignable to type 'Result'.
이처럼 리터럴 타입을 유니언 타입(|)과 결합하면, 코드에서 발생 가능한 상태를 명확히 모델링하고, 각 상태에 따라 객체의 구조가 달라지는 것(SuccessResult에 data가 있고 ErrorResult에 message가 있는 것)을 타입 시스템이 보장해 줄 수 있습니다.
*/

  return (
    <div>
      Literal
    </div>
  )
}

export default Literal
