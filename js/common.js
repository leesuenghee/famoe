// top_btn
let topBtn = document.querySelector(".top_btn");

window.addEventListener("scroll", () => {
    scrollOST = window.pageYOffset;

    if (scrollOST > 300) {
        topBtn.classList.add("on");
    } else {
        topBtn.classList.remove("on");
    }
});
topBtn.addEventListener("click", (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
});