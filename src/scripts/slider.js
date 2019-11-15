const slider = () => {

    const toggleEl = document.querySelectorAll('.features_list .features_item');
    const wallpaper = document.querySelector('#wallpaper');
    let prevWallpaper, srcImage;

    const setSource = (element) => {
        return element.querySelector('.features_banner img').getAttribute('src');
    };

    const setWall = (src) => {
        wallpaper.querySelector('source').setAttribute('srcset', src);
        wallpaper.querySelector('img').setAttribute('src', src);
    };

    const init = () => {
        let initSrc = setSource(toggleEl[0]);
        setWall(initSrc);
    };

    const progresBars = document.querySelectorAll('.features_progres-bar');
    let slider = 0;
    let interval;

    const startSlider = () => {
        interval = setInterval(() => {   
            if (slider == progresBars.length) {
                slider = 0;
            };
            
            progresBars[slider].classList.add('is-selected');

            srcImage = setSource(toggleEl[slider]);
            setWall(srcImage);

            slider++;
        },
            +progresBars[slider].getAttribute('daley')
        );
        // startSlider()
        

        progresBars.forEach(bar => {
            bar.addEventListener('animationstart', () => {

                // bar.classList.remove('is-selected');
                bar.parentNode.querySelector('.features_icon-active').classList.add('active');
                bar.parentNode.querySelector('.features_icon-disactive').classList.remove('active');
                console.log();
            });
            bar.addEventListener('animationend', () => {

                bar.classList.remove('is-selected');
                bar.parentNode.querySelector('.features_icon-active').classList.remove('active');
                bar.parentNode.querySelector('.features_icon-disactive').classList.add('active');

            });
        });
    };

    const stopTimerInterval = () => {
        clearInterval(interval);
    };

    const stopProgresBar = (elem) => {
        const target = elem.querySelector('.features_progres-bar');
        if(target.classList.contains('is-selected')){
            target.classList.remove('is-selected');
        };
        target.classList.add('is-paused');
        stopTimerInterval();
    };

    const startProgresBar = (elem) => {
        const target = elem.querySelector('.features_progres-bar');

        if(target.classList.contains('is-selected')){
            target.classList.remove('is-selected');
        };

        if(target.classList.contains('is-paused')){
            target.classList.remove('is-paused');
        };

        target.classList.add('is-selected');
        slider = elem.getAttribute('data-item');
        startSlider();
    };

    const initIconDisactive = () => {
        const icons = document.querySelectorAll('.features_icon-disactive');
        icons.forEach(icon => {
            icon.classList.add('active');
        });
    };

    initIconDisactive();

    toggleEl.forEach(toggle => {
        toggle.addEventListener('mouseenter', (e) => {
            srcImage = setSource(toggle);
            setWall(srcImage);
            stopProgresBar(toggle);

            toggle.querySelector('.features_icon-disactive').classList.remove('active');
            toggle.querySelector('.features_icon-active').classList.add('active');
            
        });

        toggle.addEventListener('mouseleave', (e) => {
            prevWallpaper = srcImage;
            setWall(prevWallpaper);
            startProgresBar(toggle);
            toggle.querySelector('.features_icon-active').classList.remove('active');
            toggle.querySelector('.features_icon-disactive').classList.add('active');

        });
    });

    init();
    startSlider();
};

export default slider;