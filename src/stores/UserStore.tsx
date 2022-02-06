import { observable, action, makeObservable } from "mobx";

class UserStore {
  @observable username: string = "";
  @observable count: number = 0;

  constructor() {
    makeObservable(this);
    this.username = "guest";
  }

  increaseCount() {
    this.count++;
  }
  @action setUsername(username: string) {
    this.username = username;
  }
}

export default UserStore;
