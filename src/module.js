import {ColumnsBlocks, ImageBlocks, TextBlocks, TitleBlocks} from "./classes/blocks";
import image from './image/image1.png'

export const model = [
  new TitleBlocks('Конструктор сайтов на чистом JavaScript', {
    tag: 'h2',
    style: {
      background: 'linear-gradient(to right, #ff0099, #493240)',
      'text-align': 'center',
      padding: '1.5rem',
      color: '#fff'
    }
  } ),
  new ImageBlocks(image, {
    style: {
      padding: '2rem 0',
      display: 'flex',
      'justify-content': 'center',

    }
  }),
  new ColumnsBlocks([
    'Приложение на чистом JavaScript без использование библиотек',
    'Узнаешь как работают принципы SOLID и ООП в JavaScript за один курс',
    'JavaScript - это просто, интересно. Научись создавать любые UI своеми руками'

  ], {
    tag: 'p',
    style: {
      background: "linear-gradient(to right, #ff5599, #493240)",
      color: 'cyan',
      margin: '10px auto',
      'text-align': 'center',
      padding: '1rem',
      'font-size': '18px'
    }
  }),
  new TextBlocks(`Другие проекты тут <a href="https://github.com/oybekdev1998">oybekdev1998</a>`, {
    tag: 'p',
    style: {
      background: "linear-gradient(to right, #ff5599, #493240)",
      color: 'cyan',
      margin: '10px auto',
      'text-align': 'center',
      padding: '1rem',
      'font-size': '22px'
    }
  } )

]
