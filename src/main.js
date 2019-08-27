// regenerator-runtime is to support async/await syntax in ESNext.
// If you don't use async/await, you can remove regenerator-runtime.
import "regenerator-runtime/runtime";
import environment from "./environment";
import { PLATFORM } from "aurelia-pal";

import { initialState, options } from "./component/reducers/initialState";

export function configure(aurelia) {
  //aurelia.use.standardConfiguration().feature("resources");

  aurelia.use.plugin(PLATFORM.moduleName("aurelia-store"), {
    initialState,
    options
  }); // <----- REGISTER THE PLUGIN
  aurelia.start().then(() => aurelia.setRoot());

  aurelia.use
    .standardConfiguration()
    .feature(PLATFORM.moduleName("resources/index"));

  aurelia.use.developmentLogging(environment.debug ? "debug" : "warn");

  if (environment.testing) {
    aurelia.use.plugin(PLATFORM.moduleName("aurelia-testing"));
  }
  aurelia.use.plugin(PLATFORM.moduleName("aurelia-validation"));

  aurelia.start().then(() => aurelia.setRoot(PLATFORM.moduleName("app")));
}
