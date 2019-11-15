import '../styles/index.scss';
import menu from './menu.js';
import slider from './slider.js';
import animateHTML from './animation.js';

animateHTML();

slider();

window.addEventListener("load", () => {
    menu();
});
window.addEventListener("resize", () => {
    menu();
});