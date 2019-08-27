import { Store } from "aurelia-store";
import { inject } from "aurelia-framework";
import { secondAction } from "../reducers/allActions.js";

@inject(Store)
export class Home {
  constructor(Store) {
    this.done = false;
    this.message = "Hello World!";
    this.todoList = ["clean my room", "walk a Dog", "shower", "go shopping"];
    this.newTodo = "";
    this.store = Store;
    this.store.registerAction("SecondAction", secondAction);
  }
  attached() {
    // console.log("home state  ==> ", this.state);
    // console.log(" home store ===>", this.store);
  }
  addItem() {
    this.todoList.push(this.newTodo);
    this.newTodo = "";
  }

  bind() {
    // this function is a must to see this.state in attached  but in the html is not required

    this.subscription = this.store.state.subscribe(
      state => (this.state = state)
    );
  }

  deleteItem(todo) {
    this.todoList.splice(this.todoList.lastIndexOf(todo), 1);
  }
  triggerSecond() {
    this.store.dispatch("SecondAction", "Ali Aissani");
  }
}
