export function row(content, style = '') {

  return `<div class="row" style="${style}">${content}</div>`
}

export function col(content, tag) {
  return `<div class="col-sm"><${tag}>${content}</${tag}></div>`
}

export function css(styles = {}) {
  const toString = key =>`${key}: ${styles[key]} `
  return Object.keys(styles).map(toString).join(";")
}