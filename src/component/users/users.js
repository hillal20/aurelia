import { inject } from "aurelia-framework";
import Service from "../../../service/service";

@inject(Service)
class Users {
  constructor(Service) {
    this.service = Service;
    this.data = [];
    this.infosys = "the compansy is";
    this.slotVariable = " ===== SLOTVeriable ======";
  }

  attached() {
    this.service
      .fetchingData()
      .then(msg => {
        console.log("msg ====> ", msg);
        const { data } = msg.data;
        this.data = data;
        console.log(" this.data ===> ", this.data);
      })
      .catch(err => {
        console.log("err ==> ", err);
      });
  }
}
export default Users;
