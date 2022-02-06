// components/UserView.js
import React, { Component } from "react";
import { inject, observer } from "mobx-react";
import UserStore from "stores/UserStore";
import { Navigation } from "components";

interface IProps {
  userStore?: UserStore;
}
@inject("userStore")
@observer
class MyPage extends Component<IProps, {}> {
  render() {
    const { userStore } = this.props;

    if (!userStore) {
      return <div>로딩중</div>;
    } else {
      return (
        <div style={{ backgroundColor: "gray" }}>
          <Navigation />

          <div style={{ padding: "60px" }}>
            <br />
            <div>이름 : {userStore?.username}</div>
            <div>클릭 수 : {userStore?.count}</div>

            <br />
            <button onClick={() => userStore.setUsername("구민정")}>
              이름 업데이트
            </button>
            <button onClick={() => userStore.increaseCount()}>숫자 +1</button>
          </div>
        </div>
      );
    }
  }
}

export default MyPage;
