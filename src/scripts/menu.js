const menu = () => {

    const header = document.querySelector('.header');
    const toggleMenu = document.querySelector('.menu-toggle');
    const subMenu = document.querySelector('.header_submenu');
    const toggleArrow = document.querySelector('.header_menu-toggle-arrow');
    const subToggle = document.querySelector('.sub-toggle');
    const subInner = document.querySelector('.header_submenu-inner');
    const subArrow = document.querySelector('.header_submenu-arrow');
    if (window.innerWidth <= 620) {

        toggleMenu.addEventListener('click', (e) => {
            e.preventDefault();

            header.classList.toggle('active');
            subMenu.classList.toggle('open-menu');
            toggleArrow.classList.toggle('active');
        });

        subToggle.addEventListener('click', (e) => {
            e.preventDefault();

            subInner.classList.toggle('open-menu');
            subArrow.classList.toggle('active');
            const children = subInner.querySelectorAll('.header_submenu-list .header_submenu-item');
            children.forEach(child => {
                child.classList.add('isActive');
            });
        });
    };


    // const header = document.querySelector('.header');
    // const toggleMenu = document.querySelectorAll('.menu-toggle');
    // const subMenu = document.querySelectorAll('.header_submenu');
    // const toggleArrow = document.querySelectorAll('.header_menu-toggle-arrow');

    // toggleMenu.forEach((toggle, index) => {
    //     toggle.addEventListener('click', (e) => {
    //         e.preventDefault();
    //         e.stopPropagation();

    //         header.classList.toggle('active');
    //         subMenu[index].classList.toggle('open-menu');
    //         toggleArrow[index].classList.toggle('active');
    //     });
    // });
};

export default menu;