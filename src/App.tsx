import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Home, CampDetail, CampApply, Community, NotFound } from "pages";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="camp/apply" element={<CampApply />} />
        <Route path="camp/:id" element={<CampDetail />} />
        <Route path="community/" element={<Community />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
