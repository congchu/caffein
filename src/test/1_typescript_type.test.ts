/**
 * Typescript의 타입 알아보기
 */

test("[Primary 타입]", () => {
  // ⭐️ number, string, boolean'

  // 명시적으로 number 타입을 설정
  let product_id: number = 124981;

  // 명시적으로 string 타입을 설정
  let product_name: string = "VR 글래스";

  // 명시적으로 boolean 타입을 설정
  let is_waterprofing: boolean = false;

  console.log(product_id, product_name, is_waterprofing);
});

test("[Primary 타입] 설정된 데이터 타입이 아닌,데이터 타입을 할당하면 에러 발생", () => {
  let product_id: number = 124981;
  let product_name: string = "VR 글래스";
  let is_waterprofing: boolean = false;

  // [오류]
  // [ts] '"p9023412"' 형식은 'number' 형식에 할당할 수 없습니다.
  // let product_id: number
  product_id = "p9023412";

  // [오류]
  // [ts] '() => void' 형식은 'string' 형식에 할당할 수 없습니다.
  // let product_name: string
  product_name = function () {};

  // [오류]
  // [ts] '() => void' 형식은 'string' 형식에 할당할 수 없습니다.
  // let product_name: string
  is_waterprofing = 0;

  console.log(product_id, product_name, is_waterprofing);
});




test("[Any 타입]", () => {
  // 기존에 자바스크립트로 구현되어 있는 웹 서비스 코드에
  // 타입스크립트를 점진적으로 적용할 때 활용하면 좋은 타입.

  // 단어 의미 그대로 모든 타입에 대해서 허용한다는 의미를 갖고 있습니다.
  // > noImplicitAny 설정 값을 true여야 사용할 수 있습닏가.
  let str: any = "hi";
  let num: any = 10;
  let arr: any = ["a", 2, true];

  console.log(str, num, arr);
});




test("[Array 타입] 설정이 없으면 에러가 난다", () => {
  let members = ["이권", "감장겸", "장도일"];

  members = [9, 13, 26];
  // [오류]
  // [ts] 'number[]' 형식은 'string[]' 형식에 할당할 수 없습니다.
  //      'number' 형식은 'string' 형식에 할당할 수 없습니다.
  // let members: string[]
});

test("[Array 타입] 선언", () => {
  let members: string[] = ["이권", "감장겸", "장도일"];
});

test("[Array 타입] 어떤 테이터 타입도 설정할 수 있는 배열", () => {
  let members: any[] = [{ name: "이권" }, "감장겸", ["장도일"]];
});

test("[Array 타입] 예시", () => {
  // 오직 숫자 아이템만 허용
  let nums: number[] = [100, 101, 102];

  // 오직 문자 아이템만 허용
  let strs: string[] = ["ㄱ", "ㄴ", "ㄷ"];

  // 오직 불리언 아이템만 허용
  let boos: boolean[] = [true, false, true];

  // 모든 데이터 타입을 아이템으로 허용
  let anys: any[] = [100, "ㄴ", true];

  // 특정 데이터 타입만 아이템으로 허용
  let selects: (number | string)[] = [102, "ㅇ"];

  console.log(nums, strs, boos, anys, selects);
});




test("[Union 타입]", () => {
  //  변수에 설정 가능한 타입 값을 number, string 모두 가능하게 하려면 파이프(|)를 사용하여 설정합니다.
  // 이를 유니온(union) 타입이라고 부릅니다.

  let userAge: number | string;
  userAge = 13;
  userAge = "24";

  function setInfo(id: number | string, name: string) {
    return { id, name };
  }

  console.log(userAge, setInfo);
});



test("[Void 타입]", () => {
  // void는 결과 값을 반환하지 않는 함수에 설정합니다.

  //리턴 값 타입이 명시적으로 설정되지 않는 함수
  function assignClass(name: string): void {
    document.documentElement.classList.add(name);
  }
});

test("[Void 타입]이 아닌 경우", () => {
  // void는 결과 값을 반환하지 않는 함수에 설정합니다.

  // 리턴 값 타입이 숫자인 함수
  function factorial(n: number): number {
    if (n < 0) {
      return 0;
    }
    if (n === 1) {
      return 1;
    }
    return n * factorial(n - 1);
  }

  // 리턴 값 타입이 문자인 경우
  function repeat(text: string, count: number = 1): string {
    let result: string = "";
    while (count--) {
      result += text;
    }
    return result;
  }
});



/** 이 외 tuple, enum, object, never 타입이 있지만
 자주 쓰이지는 않(는 것)으므로, 다른 타입들에 충분히 익숙해지고나서 학습 추천 합니다.
  */



test("[사용자 정의 타입] Dom 타입 구경하기", () => {
  // 복잡한 타입을 매번 설정하는 것은 상당히 번거로운 작업입니다.
  // Dom 변수에 할당될 객체의 각 속성별 타입 설정 구문을 살펴보면 매우 복잡하죠.
  
  let Dom: {
    version: string;
    el: (selector: string) => void;
    css: (prop: string) => void;
  } = {
    version: "0.0.1",
    el() {},
    css() {},
  };

  console.log(Dom);
});



test("[사용자 정의 타입] 타입 정의해서 사용하기", () => {
  // 사용자 정의 타입 operation 정의
  // 타입 별칭(Type Alias)
  type userType = {
    name: string;
    age: number;
    email?: string;
    phone: string;
    created: string;
    grade: "A" | "B" | "C";
  };

  const user: userType = {
    name: "홍길동",
    age: 30,
    phone: "010-1234-1234",
    created: "2020-02-27 13:20:00",
    grade: "C",
  };

  user.grade = "B";
});
