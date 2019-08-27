import moment from "moment";
import("bootstrap/dist/css/bootstrap.min.css");
import("bootstrap");
import { EventAggregator } from "aurelia-event-aggregator";
import { workBox } from "../js/main";

import { aurelia } from "aurelia-framework";
import { initialState } from "./component/reducers/initialState";

import { Store } from "aurelia-store";
import { HttpClient } from "aurelia-http-client";
import { inject } from "aurelia-framework";
import { connectTo } from "aurelia-store";

import { demoAction } from "./component/reducers/allActions";
import Service from "../service/service";

import AuthorizeStep from "./component/pipeLineSteps/authorizeStep";

@inject(HttpClient, Store, EventAggregator, Service)
@connectTo()
export class App {
  constructor(HttpClient, Store, EventAggregator, Service) {
    this.store = Store;
    this.store.registerAction("DemoAction", demoAction);
    this.eventAgr = EventAggregator;
    this.message = `the year ${moment().format("YYYY")}`;
    this.HttpClient = HttpClient;
    this.dispatchDemoAction = false;
    this.user = "No User";
    this.service = Service;
    this.newTag = "";
  }

  configureRouter(config, router) {
    config.title = "Router Test";
    config.map([
      {
        route: "/",
        name: "HomeRoute",
        moduleId: PLATFORM.moduleName("./component/home/home"),
        title: "Home"
      },
      {
        route: "/about",
        name: "aboutRoute",
        moduleId: PLATFORM.moduleName("./component/about/about"),
        title: "About Us "
      },
      {
        route: "/post/:slug",
        name: "postRoute",
        moduleId: PLATFORM.moduleName("./component/post/post"),
        title: "Post Something "
      },
      {
        route: "/users",
        name: "usersRoute",
        moduleId: PLATFORM.moduleName("./component/users/users"),
        title: "Users  List "
      },
      {
        route: "/user/:slug",
        name: "userDetail",
        moduleId: PLATFORM.moduleName("./component/user/user"),
        title: "User  Here "
      },
      {
        route: "/login",
        name: "loginRoute",
        moduleId: PLATFORM.moduleName("./component/login/login"),
        title: "Login  Here "
      }
    ]);
  }

  attached() {
    this.tags = [];
    this.aGSubscription = this.eventAgr.subscribe("user", user => {
      this.user = user;
    });

    console.log(" win app  ====> ", window);
    console.log(" doc app  ====> ", document);
    console.log(" nav app  ====> ", navigator);
    ////////////////////////////////////////////////
    // console.log(" app state ===>", this.state);
    // console.log("app store ===>", this.store);
    // console.log("dispatchDemoAction ===> ", this.dispatchDemoAction);

    this.tags = this.service.tags;
    this.checkedTag = [];
    ///////////////// workbox is here
    // workBox();
  }

  bind() {
    this.subscription = this.store.state.subscribe(
      state => (this.state = state)
    );
  }

  unbind() {
    this.subscription.unsubscribe();
  }

  dAction() {
    this.dispatchDemoAction = true;
    if (this.dispatchDemoAction === true) {
      this.store.dispatch("DemoAction", "Hilal Aissani");
    }
  }
  detached() {
    this.aGSubscription.dispose();
  }
  logout() {
    this.eventAgr.publish("user", "No User");
  }
  delegateAction(e) {
    alert(" delegate actions ");
    console.log("e ==>", e);
  }
  addTag() {
    this.service.tags.push(this.newTag);
    this.newTag = "";
  }
  checkedTagFn(value) {
    alert("hello");
    console.log("value ====> ", value.value);
  }
}
