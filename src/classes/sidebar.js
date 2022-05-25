import {block} from "../utils";
import {TextBlocks, TitleBlocks} from "./blocks";

export class Sidebar{
  constructor(selector, updateCallBack) {
    this.$el = document.querySelector(selector)
    this.update = updateCallBack
    this.init()
  }

  init() {
    this.$el.insertAdjacentHTML('afterbegin', this.template)
    this.$el.addEventListener('submit', this.add.bind(this))
  }

  get template() {
    return [
      block('Title'),
      block('Text')
    ].join('')
  }

  add(event) {
    event.preventDefault()

    const type = event.target.name
    const value = event.target.value.value
    const style = event.target.styles.value

    const newBlock = type === 'text'
      ? new TextBlocks(value, {style})
      : new TitleBlocks(value, {style})

    this.update(newBlock)
    event.target.value.value = ''
    event.target.styles.value = ''

  }
}