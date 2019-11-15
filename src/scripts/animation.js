const animateHTML = () => {
    const elems = document.querySelectorAll(".hidden");
    let windowHeight = window.innerHeight;
    const animationEl = () => {
        for (let i = 0; i < elems.length; i++) {
            let posFromTop = elems[i].getBoundingClientRect().top;
            if (posFromTop - windowHeight <= 0) {
                elems[i].className = elems[i].className.replace("hidden", "fade-in");
            };
        };
    };
    window.addEventListener("scroll", animationEl);
    window.addEventListener("load", animationEl);
};

export default animateHTML;