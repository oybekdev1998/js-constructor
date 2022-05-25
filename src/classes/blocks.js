import {col, css, row} from "../utils";

class Block{
  constructor(type, value, options) {
    this.type = type
    this.value = value
    this.options = options
  }

  toHTML() {
    throw new Error('Должен быть реализован методь toHTML')
  }
}

export class TitleBlocks extends Block{
  constructor(value, options) {
    super( 'title', value, options);
  }

  toHTML() {
    const {tag = 'h1', style} = this.options
    return row(col(this.value, tag), css(style))
  }
}

export class TextBlocks extends Block{
  constructor(value, options) {
    super('text', value, options);
  }

  toHTML() {
    const {tag = 'p', style} = this.options
    return row(col(this.value, tag), css(style))
  }
}

export class ColumnsBlocks extends Block{
  constructor(value, options) {
    super('columns', value, options);
  }

  toHTML() {
    const {tag, style} = this.options
    const html = this.value.map(item => col(item, tag)).join('')
    return row(html, css(style))
  }
}

export class ImageBlocks extends Block{
  constructor( value, options) {
    super('image', value, options);
  }

  toHTML() {
    const style = this.options.style
    return row(`<img src="${this.value}"/>`, css(style))
  }
}