const GenderBtn = document.querySelectorAll(".gender li"),
    GenderCodi = document.querySelectorAll(".codi .inner > div");
 
    GenderBtn.forEach((tab, idx) => {
        tab.addEventListener("click", (e) => {
          e.preventDefault();
          GenderCodi.forEach((inner) => {
            inner.classList.remove("active");
          });
          GenderBtn.forEach((item) => {
            item.classList.remove("active");
          });
          GenderBtn[idx].classList.add("active");
          GenderCodi[idx].classList.add("active");
        });
    });
      
const magazineBtn = document.querySelectorAll(".magazine_menu li"),
  magazineTap = document.querySelectorAll(".magazine_slide");

magazineBtn.forEach((tap,idx) => {
  tap.addEventListener("click", (e) => {
    e.preventDefault();
    magazineTap.forEach((inner) => {
      inner.classList.remove("active");
    });
    magazineBtn.forEach((item) => {
      item.classList.remove("active");
    });
    magazineBtn[idx].classList.add("active");
    magazineTap[idx].classList.add("active");
      })
})
    
