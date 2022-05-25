import {model} from "../module";

export class Site{
  constructor(selector) {
  this.$el = document.querySelector(selector)
  }

  toRender(model) {
    model.forEach((block) => {
      this.$el.insertAdjacentHTML('beforeend', block.toHTML())
    })
  }
}