
function Boolean() {

  /*********************************************************************
   * 정리
   * 
  *********************************************************************/ 

  
  // 타입정의 → 값할당
  // let isBoolean: boolean;
  // isBoolean = true;
  let isBoolean: boolean;
  isBoolean = true;
  
  // 타입정의 + 값할당
  // let isDone: boolean = false;
  let isDone: boolean = false;

  // Undefined도 가능함을 명시
  // let middle: string | undefined = undefined;
  let middle: string | undefined = undefined;

  // boolean 배열 선언
  // let activeUsers: boolean[];
  // activeUsers = [true, false, true];
  // activeUsers.push(false);
  let activeUsers: boolean[];
  activeUsers = [true, false, true];
  activeUsers.push(false) // true, false, true, false


  // interface를 이용한 객체 선언
  // interface Eraser {
  //   id: boolean,
  //   name: boolean,
  //   email: boolean,
  //   isActive: boolean,
  //   role: boolean | undefined,
  // }
  interface Eraser {
    id: boolean,
    name: boolean,
    email: boolean,
    isActive: boolean,
    role: boolean | undefined,
  }

  // 선언된 인터페이스 타입을 사용하여 값을 할당.
  // const eraserUser: Eraser = {
  //   id: true,
  //   name: false,
  //   email: true,
  //   isActive: true,
  //   role: false,
  // }
  const eraserUser: Eraser = {
    id: true,
    name: true,
    email: true,
    isActive: true,
    role: undefined,
  }

  // 다른 변수에 핪 할당
  const guestEraserUser: Eraser = {
    id: true,
    name: true,
    email: true,
    isActive: true,
    role: true,
  }

  return (
    <div>
      Boolean
    </div>
  )
}

export default Boolean
