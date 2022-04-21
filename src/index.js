import generateJoke from "./generateJoke";
import './styles/main.scss';
import logo from './static/img/ellucian-logo.svg'

const logoImg = document.querySelector('img#logo');
logoImg.src = logo;

console.log(generateJoke());