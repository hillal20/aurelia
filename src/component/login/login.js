import { Router } from "aurelia-router";
import { inject } from "aurelia-framework";
import { EventAggregator } from "aurelia-event-aggregator";
import {
  ValidationRules,
  ValidationControllerFactory
} from "aurelia-validation";
@inject(Router, EventAggregator, ValidationControllerFactory)
export class Login {
  constructor(Router, EventAggregator, ValidationControllerFactory) {
    this.name = "";
    this.password = "";
    this.router = Router;
    this.eventAgr = EventAggregator;
    this.controller = ValidationControllerFactory.createForCurrentScope();
    this.object = {};
  }
  login() {
    if (this.name === "Hilal") {
      this.popup = true;
    } else {
      this.popup = false;
    }
    this.object = {
      name: this.name,
      password: this.password
    };
    console.log("obj ===> ", this.object);

    if (this.object.name === "Bilal") {
      this.router.navigateToRoute("aboutRoute");
      this.eventAgr.publish("user", this.object.name);
    }
  }
}
