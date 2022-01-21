import { ICamp } from "types/type";

import Navigation from "components/Navigation";
import CampCard from "components/CampCard";

// TODO: 실서버 데이터로 변경
const camp: ICamp = {
  id: 0,
  name: "업무 단순화 & 자동화로 엑셀을 실무에 더 적극 활용하기",
  type: "인기",
  status: "모집중",
  field: "데이터분석",
  skill: "Excel",
  startDate: "2021-03-13",
  thumbnail: "https://cdn.comento.kr/images/pt/tmp/prefix_44UsYDVNuM.jpg",
};

const Home = () => {
  return (
    <div>
      <Navigation />
      <section>
        <div>인기 부트 캠프</div>
        <div style={{ display: "flex", gap: "20px" }}>
          <CampCard camp={camp} />
          <CampCard camp={camp} />
          <CampCard camp={camp} />
          <CampCard camp={camp} />
        </div>
      </section>
      <section>
        <div>특가 할인 캠프</div>
        <div style={{ display: "flex", gap: "20px" }}>
          <CampCard camp={camp} />
          <CampCard camp={camp} />
          <CampCard camp={camp} />
          <CampCard camp={camp} />
        </div>
      </section>
      <footer>
        <div>
          대표: 내이름. 서울특별시 중구 한강대로 416, 서울스퀘어 15층 101호
        </div>
        <div> Copyright by (주)카페인.</div>
        <div> All right reserved. 이용약관 개인정보처리방침</div>
      </footer>
    </div>
  );
};

export default Home;
