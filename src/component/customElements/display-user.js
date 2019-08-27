import { bindable } from "aurelia-framework";

class DisplayUser {
  @bindable user;
  @bindable firstName;
  constructor() {
    this.slotVariable = "SLOT_VARIABLE";
  }
  attached() {}
  valueChanged(newValue, oldValue) {}
}

export default DisplayUser;
