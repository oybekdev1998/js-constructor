import {model} from "./module";

import './styles/styles.css';

const $site = document.getElementById('site')

model.forEach((block) => {

    $site.insertAdjacentHTML('beforeend', block.toHTML())
})