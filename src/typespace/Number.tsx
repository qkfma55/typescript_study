
function Number() {

  /*********************************************************************
   * 정리
   * 
  *********************************************************************/ 


  // let num: number;
  // let integer: number = 6;
  // let float: number = 3.14;

  // let hex: number = 0xf00d; // 61453
  // let binary: number = 0b1010; // 10
  // let octal: number = 0o744; // 484

  // let infinity: number = Infinity;
  // let nan: number = NaN;

  // function plus(num1: number, num2: number): number { 
  //     // : number 함수의 반환타입선언 : 의도는 명확히하고 실수는 방지하기 위한 이중 안전장치
  //     // 함수가 반환(return)될때 타입을 검사
  //     return num1 + num2;
  // }

  let num: number;
  let integer: number = 6;
  let float: number = 3.14;

  let hex: number = 0xf00d; // 61453
  let binary: number = 0b1010; // 10
  let octal: number = 0o744; // 484

  let infinity: number = Infinity;
  let nan: number = NaN;

  function plus(num1: number, num2: number): number {
      return num1 + num2;
  }

  return (
    <div>
      Number
    </div>
  )
}

export default Number
