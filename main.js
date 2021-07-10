const navBtn = document.querySelector("#bar_icon");
const menuBox = document.querySelector("#menu");

navBtn.addEventListener('click', () => {
    menuBox.classList.toggle("open_menu_box")
})