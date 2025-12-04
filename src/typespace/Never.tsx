

function Never() {

  /*********************************************************************
   * 정리
   * 1. 항상 예외를 발생시키는 함수
   * 2. 절대 반환하지 않는 함수 (무한 루프)
   * 3. 유니언 타입의 모든 가능성을 소진할 때 (타입 좁히기)
  *********************************************************************/ 

  // TypeScript의 never 타입은 절대 발생할 수 없는(도달할 수 없는) 값을 나타냅니다. 
  // 함수가 항상 예외를 발생시키거나(throw), 
  // 절대 반환하지 않는(무한 루프) 경우의 반환 타입으로 사용됩니다.

  // never는 모든 타입의 **서브 타입(Subtype)**이지만, 
  // 어떤 타입도 never의 서브 타입이 될 수 없습니다. 
  // (즉, never 타입에 어떤 값도 할당할 수 없습니다.)

  // 함수가 실행 흐름을 정상적으로 마치지 않고 항상 오류를 던져 버릴 때, 반환 타입은 never가 됩니다.
  function throwError(message: string): never {
    // 함수가 정상 종료되지 않고, 항상 이 지점에서 실행 흐름이 중단됩니다.
    throw new Error(message); 
  }

  // 사용 예시
  // try {
  //     throwError("프로세스 실패");
  // } catch (e) {
  //     console.error(e.message); // 출력: 프로세스 실패
  // }

  // 🚨 주의: 이 함수의 반환값은 할당할 수 없습니다.
  // let result: string = throwError("Fatal"); 
  // throwError의 반환 타입은 never이므로, result 변수는 never 타입이 됩니다.


  // 2. 절대 반환하지 않는 함수 (무한 루프)
  // 함수가 종료 조건 없이 무한 루프에 빠져 영원히 반환값을 호출자에게 돌려주지 않을 때, 반환 타입은 never가 됩니다.
  function infiniteLoop(): never {
    while (true) {
        // 계속해서 작업 수행 (예: 이벤트를 듣거나, 무한히 반복되는 백그라운드 작업)
    }
    // 이 함수는 이 루프를 벗어나지 않으므로, 이 지점에 도달할 수 없습니다.
  }

  // 3. 유니언 타입의 모든 가능성을 소진할 때 (타입 좁히기)
  // never 타입의 가장 강력한 실용적 사용은 식별된 유니언(Discriminated Union) 타입의 모든 경우의 수를 처리했는지 확인하는 완전성 검사입니다.
  // 유니언 타입의 모든 타입을 타입 좁히기로 처리한 후 남는 타입이 있다면, 이는 never가 될 수 없습니다.
  interface Circle { kind: "circle"; radius: number; }
  interface Square { kind: "square"; sideLength: number; }
  // 새로운 삼각형 타입이 추가됨
  interface Triangle { kind: "triangle"; base: number; height: number; } 

  type Shape = Circle | Square | Triangle;

  function assertNever(x: never): never {
    // x는 절대 도달해서는 안 되는 값이어야 합니다.
    throw new Error("처리되지 않은 도형 타입: " + x);
  }

  function getArea(shape: Shape) {
    switch (shape.kind) {
      case "circle":
        return Math.PI * shape.radius ** 2;
      case "square":
        return shape.sideLength ** 2;
        // 🚨 Triangle case가 누락됨 (가정)
        // case "triangle":
        //     return shape.base * shape.height / 2;

      default:
        // 만약 모든 case를 처리했다면, shape는 'never' 타입이 되어야 합니다.
        // 하지만 'triangle'이 남아있으므로, shape는 Triangle 타입입니다.
        // return assertNever(shape); // 🚨 에러 발생: Triangle 타입은 never에 할당될 수 없습니다!
    }
  }

  // 이 에러 덕분에 개발자는 Triangle 타입을 처리하는 case 문을 추가해야 한다는 사실을 컴파일 시점에 알게 됩니다. 
  // 이것이 never 타입을 유틸리티 함수로 사용하는 가장 중요한 이유입니다.




  return (
    <div>
      Never
    </div>
  )
}

export default Never
