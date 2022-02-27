test("자바스크립트의 함수", () => {
  // 자바스크립트의 함수
  function sum(a, b) {
    return a + b;
  }

  // 타입을 추가하면 타입스크립트의 함수
  function sum2(a: number, b: number): number {
    return a + b;
  }

  sum(1, 2);
  sum2(1, 2);
});

test("함수의 인자", () => {
  function buildName(firstName: string, lastName: string) {
    if (lastName) {
      return firstName + lastName;
    } else {
      return lastName;
    }
  }
  buildName("Bob"); // 30
  buildName("Bob", "Adams", "Sr."); // error,너무 많은 매개 변수
  buildName("Bob", "Adams"); // error, 너무 적은 매개변수

  // 이런 특성은
  // 정의된 매개변수의 갯수 만큼 인자를 넘기지 않아도 되는
  // 자바스크립트의 특성과 반대됩니다.

  // 만약 이러한 특성을 살리고 싶다면 ?를 이용해서 아래와 같이 정의할 수 있습니다.

  function buildName2(firstName: string, lastName?: string) {
    if (lastName) {
      return firstName + lastName;
    } else {
      return lastName;
    }
  }
  buildName2("Bob"); // 30
  buildName2("Bob", "Adams", "Sr."); // error, 너무 많은 매개 변수
  buildName2("Bob", "Adams"); // 정확합니다.
});

