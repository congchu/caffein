import { Link } from "react-router-dom";
import { observer } from "mobx-react-lite";
import CampStore from "stores/CampStore";

import { Navigation } from "components";

const CampDetail = () => {
  return (
    <>
      <Navigation />
      <Link to="/camp/apply">
        <div>Camp 신청하기</div>
      </Link>
    </>
  );
  const campStore = useContext(CampStore);
};

export default observer(CampDetail);
