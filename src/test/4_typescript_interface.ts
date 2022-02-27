// interface는 타입 체크를 위해 사용한다
// 변수, 함수, 클래스에 사용한다.
// 여러가지 타입을 갖는 property로 이루어진 새로운 타입을 정의하는 것과 유사하다

test("interface", () => {
  interface user {
    name: string;
    age: number;
    email?: string;
    phone: string;
    created: string;
    grade: "A" | "B" | "C";
  }
});

test("interface? type?", () => {
  // type과 interface는 매우 유사한 기능
  // 둘 중 어는 것을 사용해도 상관없는 경우가 대부분

  interface IUser {
    name: string;
    age: number;
    email?: string;
  }
  type userType = {
    name: string;
    age: number;
    email?: string;
  };

  // 차이점 1) interface는 property 확장이 가능하고, type은 안된다.
  interface IUser {
    grade: "A" | "B" | "C";
  }

  type userType = {
    grade: "A" | "B" | "C";
  };

  // 차이점 2) interface는 하나의 형태만 가능, type은 union 또는 tuple 도 가능하다

  type ActionType =
    | { type: "COUNT"; count: number }
    | { type: "EAT"; food: string }
    | { type: "READ"; book: string };

  // 인터페이스
  interface IActionCount {
    type: "COUNT";
    count: string;
  }
  interface IActionEat {
    type: "EAT";
    food: string;
  }
  interface IActionRead {
    type: "READ";
    book: string;
  }

  let action: IActionCount | IActionEat | IActionRead;
});
