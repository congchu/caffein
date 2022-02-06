import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "mobx-react";

import {
  Home,
  CampDetail,
  CampApply,
  Community,
  NotFound,
  MyPage,
} from "pages";
import GlobalStyled from "styles/global";

import RootStore from "stores/RootStore";

const rootStore = new RootStore();

const App = () => {
  return (
    <Provider {...rootStore}>
      <GlobalStyled />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/camp/apply" element={<CampApply />} />
          <Route path="/camp/:campId" element={<CampDetail />} />
          <Route path="/community" element={<Community />} />
          <Route path="/MyPage" element={<MyPage />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
