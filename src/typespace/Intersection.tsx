
function Intersection() {

  // 교차 타입 (Intersection Type)은 & 연산자를 사용하여 여러 타입을 하나로 결합하는 방식입니다.
  // 교차 타입으로 생성된 새로운 타입은 결합된 모든 타입의 모든 멤버를 포함해야 합니다.

  // 쉽게 말해, A의 모든 것 이면서 동시에 B의 모든 것인 타입을 정의하는 것입니다.

  // 1. 객체 인터페이스의 결합 (가장 일반적인 사용)
  // 두 개 이상의 인터페이스를 결합하여 새로운 객체 타입을 정의합니다.

  // 기본 사용자 정보
  interface User {
    id: number;
    name: string;
  }

  // 관리자 권한 정보
  interface Admin {
    role: 'admin' | 'super-admin';
    accessLevel: number;
  }

  // AdminUser는 User의 모든 속성과 Admin의 모든 속성을 가져야 합니다.
  type AdminUser = User & Admin; // 합집합

  // AdminUser 타입을 충족하는 객체
  let superUser: AdminUser = {
    // user속성
    id: 1, 
    name: "Master",
    role: "super-admin",
    accessLevel: 99,
  }

  // 속성 누락 또는 타입 불일치의 경우 에러 발생.

  
  
  // 2. 함수 오버로딩 정의 (Function Overloads)
  // 여러 함수 시그니처(Signature)를 결합하여 하나의 함수에 대한 여러 가지 호출 방식을 명세할 수 있습니다.
  
  // Intersection Type: A & B
  interface ColorConfig {
    (mode: 'hex' | 'rgb'): string; // mode 인수가 hex 또는 rgb 일때 string 반환
  }
  interface SizeConfig {
    (unit: 'px' | 'rem'): number; // unit 인수가 px 또는 rem 일때 number 반환
  }

  // 교차 타입으로 두 시그니처를 결합
  type MergedConfig = ColorConfig & SizeConfig;
  // 두 가지 호출 시그니처를 모두 만족하는 함수 타입입니다.
  // (mode: 'hex' | 'rgb') => string
  // (unit: 'px' | 'rem') => number

  // 2-1. 오버로드 시그니처 선언 (MergedConfig의 요구사항)
  function getConfigValue(param: 'hex' | 'rgb'): string;
  function getConfigValue(param: 'px' | 'rem'): number;

  // 2-2. 실제 함수 구현부 (가장 넓은 타입으로 처리)
  function getConfigValue(param: string): string | number {
      if (param === 'hex' || param === 'rgb') {
          // mode 관련 호출 처리 (string 반환)
          return "#FFFFFF"; 
      } else if (param === 'px' || param === 'rem') {
          // unit 관련 호출 처리 (number 반환)
          return 16; 
      }
      // 예외 처리 (실제 구현에서는 이 부분에 대한 방어가 필요합니다)
      throw new Error("Invalid config parameter");
  }

  // 타입 단언을 통해 구현체를 교차 타입으로 지정 (강제매핑)
  const mergedConfigFunc: MergedConfig = getConfigValue as MergedConfig; // (값) as (타입) 런타임 시점엔 아무런 영향이 없고, 오직 컴파일 시점에만 영향을 줍니다.

  // 사용: 'hex'를 넣으면 string을 반환한다고 추론
  let color = mergedConfigFunc('hex'); 
  console.log(`Color: ${color}`); // 출력: Color: #FFFFFF

  // 사용: 'px'를 넣으면 number를 반환한다고 추론
  let size = mergedConfigFunc('px'); 
  console.log(`Size: ${size}`);   // 출력: Size: 16

  // color.length; // string 타입이므로 .length 사용 가능
  // size.toFixed(0); // number 타입이므로 .toFixed 사용 가능

  return (
    <div>
      Intersection
    </div>
  )
}

export default Intersection
