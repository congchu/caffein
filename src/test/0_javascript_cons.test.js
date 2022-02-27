test("동일 연산자(==)는 인수를 강제로 변환하여 예기치 않은 동작을 유발한다", () => {

    // @ts-ignore
    expect("" == 0).toBe(true);
});

test("존재하지 않는 프로퍼티의 접근을 허용한다.", () => {

    const obj = { width: 10, height: 20 };
    const area = obj.width * obj.heigth;

    expect(area).toBe(200);

});


