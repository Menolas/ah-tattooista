//main menu functionality

const menuButton = document.querySelector(".hamburger");
const menu = document.querySelector(".main-nav");

const openMenu = () => {
    menu.classList.toggle("shown");
}

menuButton.addEventListener("click", openMenu);

//booking modal functionality

const bookingButton = document.querySelector(".main-header__btn");
const modal = document.querySelector(".modal");
const modalCloseBtn = modal.querySelector(".close-button");
const body = document.querySelector("body");

const openModal = (modal) => {
    modal.classList.add("shown");
    body.classList.add("overlay");

}

const closeModal = (modal) => {
    modal.classList.remove("shown");
    body.classList.remove("overlay");
    bookingButton.removeEventListener("click", openModal);
}

bookingButton.addEventListener("click", function () {
    openModal(modal);
});

if (modalCloseBtn) {
    modalCloseBtn.addEventListener("click", function () {
        closeModal(modal);
    });
}

//F.A.Q. functionality

const faqList = document.querySelector(".faq__list");

if (faqList) {
    const faqItems = faqList.querySelectorAll(".faq__item");
}


