/**  
 * [미니 실습]
 * 아래 Figma 링크를 참고하여, 캠프 아이템의 인터페이스를 만들어보자
 * https://www.figma.com/proto/pYBuhJKhKnV1GbhGf6sxBc/%EC%BD%94%EB%A9%98%ED%86%A0-%EC%A7%81%EB%AC%B4PT?page-id=2%3A562&node-id=2%3A571&starting-point-node-id=2%3A571
 * 
 * 조건 1) 클래스 직무 구분은 2가지 타입이 있다.
 *       1. 직무 : IT, 디자인, 기획 등
 *       2. 분야 : 백엔드, SQL, 프론트 등
 * 
 * 조건 2) 클래스 상태 구분
 *       - 모집전(ready), 모집중(open), 모집완료(completed) 3종류이다.
 *       - union 타입을 사용한다.
 * 
*/


test("캠프 인터페이스 만들기 ", () => {
  // Q. 인터페이스에는 어떤 타입의 값들이 필요할까요?

  interface Camp {}

  // 변수 선언
  const currenCamp: Camp = {};
});
