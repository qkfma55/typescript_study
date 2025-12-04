

function Union() {

  /*********************************************************************
   * 정리
   * 둘 이상의 타입 중 하나가 될 수 있는 새로운 타입을 정의하는 방식
   * 
  *********************************************************************/ 

  // 1. 기본 유니언 타입 (Primitive Types)
  // IdType은 number 타입이거나 string 타입일 수 있습니다.
  type IdType = number | string;

  let userId: IdType;

  // 유효: 숫자를 할당
  userId = 1001; 

  // 유효: 문자열을 할당
  userId = "user_abc";

  // 🚨 에러: 정의되지 않은 타입(불리언)을 할당하려고 시도
  // userId = true;


  // 2. 객체/인터페이스 유니언 타입 (Discriminated Unions)
  // 서로 다른 구조를 가진 객체 타입들을 결합하여, 하나의 타입으로 처리할 수 있게 합니다. 
  // 특히 특정 속성(식별자)의 값에 따라 타입을 구분하는 식별된 유니언(Discriminated Unions) 패턴에서 강력하게 사용됩니다.
 
  // 원 객체의 구조
  interface Circle {
    kind: "circle"; // 식별자 (Discriminator)
    radius: number;
  }

  // 사각형 객체의 구조
  interface Square {
    kind: "square"; // 식별자
    sideLength: number;
  }

  // Shape은 Circle 또는 Square 중 하나입니다.
  type Shape = Circle | Square;

  // 유효: 원 객체 생성
  let myCircle: Shape = { kind: "circle", radius: 10 };

  // 유효: 사각형 객체 생성
  let mySquare: Shape = { kind: "square", sideLength: 5 };


  // 3. 유니언 타입과 타입 좁히기 (Type Narrowing)
  function getArea(shape: Shape) {
    // 💡 타입 좁히기: 'kind' 속성으로 현재 객체의 타입을 확인합니다.
    if (shape.kind === "circle") {
        // 이 블록 안에서 shape는 Circle 타입으로 좁혀집니다.
        return Math.PI * shape.radius ** 2; // 안전하게 .radius에 접근 가능
    } else {
        // 이 블록 안에서 shape는 Square 타입으로 좁혀집니다.
        return shape.sideLength ** 2; // 안전하게 .sideLength에 접근 가능
    }
  }

  console.log(getArea(myCircle)); // 원의 면적 계산
  console.log(getArea(mySquare)); // 사각형의 면적 계산

  // 타입 좁히기가 없으면: shape.radius에 접근하려고 할 때, 
  // TypeScript는 shape이 Square 타입일 수도 있으므로 radius 속성이 없을 가능성을 경고합니다. 
  // 타입 좁히기(if 문)를 통해 이 문제를 해결합니다.
  
  return (
    <div>
      Union
    </div>
  )
}

export default Union
