
// --- Enum, Literal, Type Alias, Unknown, Null/Undefined ---

// 1. Enum 및 Literal Type: 서버 응답 상태 및 역할 정의
// Enum은 런타임 값으로, Literal은 엄격한 타입 제한으로 사용
export const enum HttpStatus {
  Ok = 200,       // number
  NotFound = 404,
}
// const enum : 상수열거형
// Ok, NotFound : 열거헝멤버
// 200, 404 : 상수리터럴


type UserRole = 'admin' | 'guest' // string literal union
// type : 타입별칭
// admin, guest : 리터럴
// | : 유니온

// 2. Union, Literal, Type Alias: API 요청 상태 정의
type Status = "idle" | "loading" | "success" | "error";

// 3. Object Type: API 응답을 위한 기본 Wrapper (타입 별칭 사용)
type ApiResponse<T> = {
  // T는 제네릭으로, API마다 달라지는 데이터 타입을 받습니다.
  status: Status;
  code: HttpStatus;
  data: T | null; // Null/Undefined: 데이터가 없을 때는 null일 수 있음
  error: unknown; // Unknown: 에러 객체는 구조를 알 수 없으므로 unknown으로 처리 후 좁혀서 사용
};
// type : 타입별칭
// ApiResponse : 타입이름
// <T> : 제네릭 타입 매개변수
// { ... } : 객체타입
// T | null : 제네릭, 유니온
// unknown : 모든 타입이 될 수 있지만, 사용 전 타입을 좁혀야 하는 가장 안전한 타입.


// 4. Object, Array, Tuple: 사용자 객체 및 배열 정의
export interface UserProfile {
  // Array Type: 권한 목록
  permissions: string[]; 
  // Tuple Type: 좌표 (읽기 전용으로 안전하게)
  readonly coordinates: [number, number]; 
}
// export : 내보내기(외부공개)
// interface : 객체 구조를 정의하는 코드
// string[] : 배열타입
// readonly : 읽기전용
// coordinates: [number, number] : 튜플타입. 정해진 길이와 순서를 가지는 배열 형태.



function Example() {
  return (
    <div>
      
    </div>
  )
}

export default Example
