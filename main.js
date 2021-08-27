AOS.init({
    // Global settings:
    disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
    startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
    initClassName: 'aos-init', // class applied after initialization
    animatedClassName: 'aos-animate', // class applied on animation
    useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
    disableMutationObserver: false, // disables automatic mutations' detections (advanced)
    debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
    throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)


    // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
    offset: 80, // offset (in px) from the original trigger point
    delay: 0, // values from 0 to 3000, with step 50ms
    duration: 1000, // values from 0 to 3000, with step 50ms
    easing: 'ease', // default easing for AOS animations
    once: true, // whether animation should happen only once - while scrolling down
    mirror: false, // whether elements should animate out while scrolling past them
    anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

});


const portfolioProducts = document.querySelectorAll(".images");
const buttonsPortfolio = document.querySelectorAll(".images_button");
const startPortfolioProduct = document.querySelector(".images");

const anchors = document.querySelectorAll('a[href*="#"]');

const imagesOpen = document.querySelectorAll(".swiper-big .portfolio__products-item");
const modal = document.getElementById("modal1");
const closeButton = document.querySelector(".close");
const imageViewer = document.querySelector(".image-viewer__img");

const classButtonActive = "portfolio__menu-button__active";

startPortfolioProduct.style.display = "grid";

for (let el of imagesOpen) {
    el.addEventListener("click", function (event) {

        imageViewer.style.backgroundImage = this.style.backgroundImage;

        modal.classList.add("image-viewer__active");

        closeButton.addEventListener("click", closeModal);

        modal.addEventListener("click", hideModal);

        function closeModal() {
            modal.classList.remove("image-viewer__active");
            closeButton.removeEventListener("click", closeModal);
        }

        function hideModal(event) {
            if (event.target === modal) {
                closeModal();
            }
        }
    })
}

for (let anchor of anchors) {
    anchor.addEventListener("click", function (event) {
        event.preventDefault();
        const blockID = anchor.getAttribute("href");
        document.querySelector(" " + blockID).scrollIntoView({
            behavior: "smooth",
            block: "start"
        })
    })
}

for (let el of buttonsPortfolio) {
    el.onclick = function () {
        switchProducts(this.dataset.filter, portfolioProducts, buttonsPortfolio, classButtonActive);
    }
}

function switchProducts(filter, listStart, listFinish, classActive) {
    for (let product of listStart) {
        product.style.display = "none";

        if (product.classList.contains(filter)) {
            product.style.display = "grid";
        }
    }

    for (let button of listFinish) {
        if (button.dataset.filter === filter) {
            button.classList.add(classActive);
        } else {
            button.classList.remove(classActive);
        }
    }
}

const swiperCervices = new Swiper('.swiper-container-cervices', {
    // Optional parameters
    direction: 'horizontal',
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination-cervices',
    },
});

const swiperLandscapes = new Swiper('.swiper-container', {
    // Optional parameters
    direction: 'horizontal',
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },
});

const swiperLogoDesign = new Swiper('.swiper-container-next', {
    // Optional parameters
    direction: 'horizontal',
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,

    // If we need pagination
    pagination: {
        el: '.logo-design',
    },
});

const swiperUI = new Swiper('.swiper-container-more', {
    // Optional parameters
    direction: 'horizontal',
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,

    // If we need pagination
    pagination: {
        el: '.ui-design',
    },
});