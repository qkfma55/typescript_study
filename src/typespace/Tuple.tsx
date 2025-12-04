

function Tuple() {

  /*********************************************************************
   * 정리
   * 리터럴(Literal)과 차이점 : 리터럴은 단일 값 자체를 제한하고 튜플은 배열구조를 제한한다
   * type 변수명 = 정해진 데이터 값
   * 길이가 고정되어 있고, 각 요소의 타입이 미리 정의되어 있는 특수한 형태의 배열
   * 튜플은 각 위치(인덱스)에 정확히 어떤 타입의 값이 들어와야 하는지 명세할 때 사용됩니다.
  *********************************************************************/ 

  // 1. 기본 튜플 정의 및 사용

  // R, G, B 순서로 3개의 숫자가 반드시 포함되어야 합니다.
  type RGBColor = [number, number, number];

  // 유효: 순서와 타입을 정확히 지킴
  let red: RGBColor = [255, 0, 0];
  let colorCode: RGBColor = [12, 34, 56];

  // 인덱스 접근 시 정확한 타입 추론
  let redValue = red[0]; 
  // redValue의 타입은 number로 추론됨

  // 🚨 에러 1: 길이 불일치 (4개 요소)
  // let errorLength: RGBColor = [10, 20, 30, 40]; 

  // 🚨 에러 2: 타입 불일치 (두 번째 요소가 문자열)
  // let errorType: RGBColor = [10, "20", 30];


  // 2. 여러 타입을 포함하는 튜플
  // 튜플은 배열과 달리 각 인덱스마다 다른 타입을 가질 수 있다는 점에서 유용합니다.

  // 첫 번째 요소는 string, 두 번째는 number, 세 번째는 boolean이어야 합니다.
  type UserInfo = [string, number, boolean];

  let userA: UserInfo = ["Alice", 28, true];

  // 인덱스 접근을 통한 타입 안전성
  let name = userA[0]; // name의 타입은 string
  let age = userA[1];  // age의 타입은 number

  // 🚨 에러: age는 number 타입이므로 문자열 메서드 사용 불가
  // age.toUpperCase();


  // 3. 읽기 전용 튜플 (readonly)
  // 튜플의 요소를 생성 후에는 수정할 수 없게 만듭니다.
  // 요소의 타입뿐만 아니라 길이도 고정되고, 값도 변경할 수 없음
  type ImmutablePoint = readonly [number, number];

  let startPoint: ImmutablePoint = [0, 0];

  // 🚨 에러: 튜플의 값을 변경하려고 시도
  // startPoint[0] = 10;


  // 4. Optional 튜플 요소
  // 튜플의 마지막 요소에는 물음표(?)를 사용하여 해당 요소가 선택적일 수 있도록 정의할 수 있습니다.
  type LogEntry = [string, string, number?]; // 세 번째 요소 number는 선택 사항

  // ✅ 유효: 2개의 요소만 제공
  let shortLog: LogEntry = ["INFO", "앱 시작"]; 
  
  // ✅ 유효: 3개의 요소를 모두 제공
  let fullLog: LogEntry = ["ERROR", "데이터베이스 연결 실패", Date.now()]; 
  
  // 🚨 에러: 필수 요소가 누락됨 (첫 번째 string 요소 누락)
  // let missingLog: LogEntry = [Date.now()];

  return (
    <div>
      Tuple
    </div>
  )
}

export default Tuple
