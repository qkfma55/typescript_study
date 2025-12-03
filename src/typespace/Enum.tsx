function Enum() { 

  /*********************************************************************
   * 정리
   * 0. 사용        : Enum 변수명 
   * 1. 숫자형 Enum : 자동 0부터 1씩 증가값으로 셋팅 됨. 수동으로 시작값 설정 가능.
   * 2. 문자형 Enum : key = value 형태로 값 할당.
  *********************************************************************/ 

  // enum 열거형 (숫자(numeric) 또는 문자열(string))
  // 1. 숫자형 Enum (Numeric Enums)
  // 0 부터 시작하는 숫자를 값으로 가집니다.

  enum Direction { // 사용시 파스칼케이스 권장.
    Up,     // 0 : 첫 시작값에 값을 할당하지 않으면 자동으로 0이 할당되고, 나머지는 1씩 증가합니다.
    Down,   // 1
    Left,   // 2
    Right,  // 3
  }
  // 시작값은 수동으로 지정할 수 있으며, 이후 값은 1씩 증가합니다.
  // Enum 멤버의 이름으로 값(Direction.Up → 0)을 얻을 수 있고, 값으로 이름(Direction[0] → "Up")도 얻을 수 있습니다.

  let playerDirection: Direction = Direction.Up;

  console.log(playerDirection)    // 출력 0
  console.log(Direction.Right)    // 출력 3
  console.log(Direction[1])       // 출력 Down

  // 2. 문자형 Enum (String Enums)
  // 모든 멤버에 문자열 값을 할당합니다. 역방향 매싱을 지원하지 않지만, 코드가 실행될 때 디버깅이 쉽고 의미가 명확해집니다.

  enum HttpStatus {
    OK = "OK",
    NotFound = "NOT_FOUND",
    ServerError = "SERVER_ERROR",
  }

  function handleResponse(status: HttpStatus): void {
    if(status === HttpStatus.OK) {
      console.log("요청 성공!");
    } else {
      console.log(`오류 발생: ${status}`);
    }
  }

  handleResponse(HttpStatus.OK)
  handleResponse(HttpStatus.ServerError)
  // HttpStatus["OK"]와 같이 값으로 이름을 찾는 것은 불가능합니다.


  return (
    <div>
      Enum
    </div>
  )
}

export default Enum
