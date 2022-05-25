import {Site} from "./site";
import {Sidebar} from "./sidebar";

export class App{
  constructor(model) {
    this.model = model
  }

  init() {
    const site = new Site('#site')

    site.toRender(this.model)

    const updateCallback = newBlock => {
      this.model.push(newBlock)
      site.toRender(this.model)
    }
    const side = new Sidebar('#panel', updateCallback)
  }
}