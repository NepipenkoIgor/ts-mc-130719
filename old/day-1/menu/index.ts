import { generateMenu } from './menu';
import { menuList } from './data';
import './style.css';

const navMenu: HTMLDivElement = document.querySelector('.menu') as HTMLDivElement;
navMenu.innerHTML = generateMenu(menuList);

navMenu.addEventListener('click', (e: MouseEvent) => {
    const el: HTMLElement = e.target as HTMLElement;
    if (!el.classList.contains('title')) {
        return;
    }
    const parentLi: HTMLLIElement = el.parentNode as HTMLLIElement;
    parentLi.classList.toggle('menu-open');
});
