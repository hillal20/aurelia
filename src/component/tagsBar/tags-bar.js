import { inject, bindable } from "aurelia-framework";
import Service from "../../../service/service";
@inject(Service)
export class TagsBar {
  @bindable tags;
  constructor(Service) {
    this.service = Service;
    this.tags = [];
  }
  attached() {
    this.tags = this.service.tags;
    console.log("this  tags ===> ", this.tags);
  }
}
