
function Generic() {

  /*********************************************************************
   * 정리
   * identity<T>(arg: T):T
   * identity<T>
   * 1. 함수에서 제네릭 사용하기
   * 2. 인터페이스에서 제네릭 사용하기
   * 3. 클래스에서 제네릭 사용하기
   * 4. 제네릭 제약 조건(Generic Constraints)
   * 5. 클래스 타입으로 제약 (생성자 제약)
  *********************************************************************/ 

  // 제네릭은 재사용 가능한 컴포넌트(함수, 클래스, 인터페이스 등)을 만드는 도구입니다.
  // 실제 타입이 무엇인지 알지 못한 상태로 코드를 작성한 후, 사용할 때 타입을 지정할 수 있게 해줍니다.
  // 쉽게말해, 타입의 플레이스 홀더 라고 생각할 수 있습니다.

  // 1. 함수에서 제네릭 사용하기
  // T는 Generic Type Variable(제네릭 타입 변수)
  // T는 함수가 호출될 때 결정되는 "임의의 타입"을 의미합니다.
  function identity<T>(arg: T): T {
    return arg;
  }

  // 1-1. 타입을 명시적으로 지정하여 호출
  let output1 = identity<string>('myString'); // T는 string으로 결정됨
  console.log(output1); // 출력 myString

  // 1-2. 타입 추론을 통해 호출 (대부분 이 방식사용)
  let output2 = identity(100); // T는 number로 추론됨
  console.log(output2); // 출력 100

  let output3 = identity(true); // T는 boolean으로 추론됨
  console.log(output3); // 출력 true


  // 2. 인터페이스에서 제네릭 사용하기
  // 인터페이스가 다룰 값의 타입을 나중에 결정하고 싶을때 사용합니다.

  // Box 인터페이스는 T 타입을 담습니다.
  interface Box<T> {
    value: T;
  }

  // 2-1. number 타입을 사용하는 Box
  let numberBox: Box<number> = {
    value: 42,
  }
  console.log(numberBox.value); // 42

  // 2-2. string 타입을 사용하는 Box
  let stringBox: Box<string> = {
    value: 'Hello',
  }
  console.log(stringBox.value); // Hello

  // 2-3. error
  // 🚨 numberBox.value = 'wrong type';

  // 3. 클래스에서 제네릭 사용하기
  // 클래스에서 다루는 속성이나 메서드의 타입을 유연하게 만들때 사용합니다.

  // 어떤 타입이든 담을 수 있는 Stack 클래스
  class Stack<T> {
    private items: T[] = [];
    push(item: T) {
      this.items.push(item);
    }
    pop(): T | undefined {
      return this.items.pop();
    }
  }
  // 3-1. 문자열 Stack 생성
  let stringStack = new Stack<string>();
  stringStack.push('A');
  stringStack.push('B');
  console.log(stringStack.pop()) // 출력 B

  // 3-2. 숫자 Stack 생성
  let numberStack = new Stack<number>();
  numberStack.push(10);
  numberStack.push(20);
  console.log(numberStack.pop()) // 출력 20

  // 4. 제네릭 제약 조건(Generic Constraints) 예제
  // 4-1. extends 키워드를 사용한 기본 제약: 제네릭타입 변수 뒤에 extends 키워드를 사용하여 해당 변수가 특정타입의 '서브타입'이어야 함을 명시합니다.
  // <T extends { length: number }>:T 는 반드시 { length : number } 인터페이스를 확장(extends)해야 합니다.
  // 즉, length : number 속성을 반드시 가지고 있어야 합니다.
  function printLength<T extends { length : number }>(arg:T):T {
    // 제약 조건 덕분에, TypeScript는 arg가 .length 속성을 가지고 있음을 압니다.
    console.log(`길이: ${arg.length}`);
    return arg;
  }

  // 4-1-1. 성공 : 문자열은 length 속성을 가집니다.
  printLength('Hello typescript'); // 16

  // 4-1-2. 성공 : 배열은 length 속성을 가집니다.
  printLength([10,20,30]) // 3

  // 4-1-3. 성공 : 객체도 length 속성을 명시하면 통과합니다.
  printLength({ length: 5, value: 'test' }) // 5

  // 4-1-4. 실패 : 🚨 일반 숫자는 length 속성이 없으므로 에러 발생.
  // printLength(100)

  // 4-2. 두 제네릭 타입 간의 제약
  // 하나의 제네릭 타입 변수가 다른 제네릭 타입 변수를 확장하도록 제안하여, 두 타입간의 관계를 강제할 수 있습니다.
  // <O, K extends keyof O> : 
  // O는 임의의 객체 타입입니다.
  // K는 O 타입의 모든 키(속성 이름)들 중 하나여야 합니다. (keyof O는 'O의 모든 키를 문자열 유니언으로 나타낸 타입'입니다.)
  function getProperty<O, K extends keyof O>(obj: O, key: K) {
    // K가 O의 키임을 보장받으므로 안전하게 접근 가능
    return obj[key];
  }
  let person = { name: "Alice", age: 30, city: "Seoul" };

  // 4-2-1. 성공: 'name'은 person 객체의 유효한 키입니다.
  let personName = getProperty(person, 'name'); // 결과 타입: string
  console.log(personName); // 출력: Alice

  // 4-2-2. 성공: 'age'도 유효한 키입니다.
  let personAge = getProperty(person, 'age');  // 결과 타입: number
  console.log(personAge); // 출력: 30

  // 실패: 'address'는 person 객체에 없는 키이므로 컴파일 에러 발생.
  // getProperty(person, 'address');

  // 5. 클래스 타입으로 제약 (생성자 제약)
  // 제네릭이 특정 클래스의 인스턴스임을 보장하는 것이 아니라, 특정 클래스의 생성자 자체를 전달할 때 사용합니다. 이는 주로 팩토리 패턴(Factory Pattern)을 구현할 때 유용합니다.
  // C는 { new (...args: any[]): T }를 확장해야 합니다.
  // 이는 C가 T 타입의 인스턴스를 생성할 수 있는 생성자 함수(클래스)여야 함을 의미합니다.
  function createInstance<T>(Constructor: { new (...args: any[]): T }): T {
    return new Constructor();
  }

  class Product {
      name: string = "Default Product";
  }

  // 5-1. Product 클래스의 인스턴스를 생성합니다.
  let newProduct = createInstance(Product);
  console.log(newProduct.name); // 출력: Default Product

  return (
    <div>
      Generic
    </div>
  )
}

export default Generic
