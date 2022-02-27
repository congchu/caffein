/**
 * Typescript의 타입 알아보기
 */

test("Null과 Undefined", () => {
  // undefined은 변수를 선언하고 값을 할당하지 않은 상태 (=자료형이 없는 상태)
  // null은 변수를 선언하고 빈 값을 할당한 상태(빈 객체)이다.

  let var1: undefined = undefined; // 자료형이 없는 상태
  let var2: null = null; // 빈 값을 할당한 상태 (= 데이터 없음을 표현하기 위해 사용)

  // typeof를 통해 자료형을 확인해보면
  // - null은 object로
  // - undefined는 undefined가 출력
  expect(typeof var1).toBe("undefined");
  expect(typeof var2).toBe("object");

  // undefined는 명시적 타입으로는 쓰지 않는 편
  // null은 데이터가 없음을 표현하기 위해, 유니온 타입으로 많이 쓴다.
  const userName: string | null = null;
});

test("Truthy and Falsy", () => {
  let obj: any = {};

  if (obj.username === undefined) {
    console.log("이름이 없네요.");
  }
  if (obj.username === null) {
    console.log("이름이 없네요.");
  }

  // 이름이  이 undefined 이거나, null 인 상황을 대비하려면
  // 아래와 같이 코드를 작성할 수 있다

  if (!obj.username) {
    console.log("person이 없네요");
  }
  // 이게 작동하는 이유는, undefined 와 null 은 Falsy 한 값입니다.
  // Falsy 한 값 앞에 느낌표를 붙여주면 true 로전환됩니다.

  console.log(!undefined);
  console.log(!null);

  // Falsy 한 값은 이 외에도 몇개 더 있다.
  console.log(!undefined);
  console.log(!null);
  console.log(!0);
  console.log(!"");
  console.log(!NaN);
});

test("Truthy, Falsy는 if 문에서도 사용할 수 있다", () => {
  const value = { a: 1 };
  if (value) {
    console.log("value 가 Truthy 하네요.");
  }


const obj = { a: 1 };

const truthy = value ? true : false;
});
