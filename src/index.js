import {model} from "./module";
import {Site} from './classes/site'
import './styles/styles.css';
import {Sidebar} from "./classes/sidebar";

const site = new Site('#site')

site.toRender(model)

const side = new Sidebar('#panel')