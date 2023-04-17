let itemsPerPage = 12;
let pageItem = document.querySelectorAll(".news_list");
let totalPage = Math.ceil(pageItem.length / itemsPerPage);
let numbers = document.querySelector(".btn_number");

for (let i = 1; i <= totalPage; i++) {
  numbers.innerHTML += `<li><a href="">${i}</a></li>`;
}

let numberBtn = numbers.querySelectorAll("a");

numberBtn.forEach((item, idx) => {
  item.addEventListener("click", (e) => {
    e.preventDefault();
    for (nb of numberBtn) {
      nb.classList.remove("active");
    }
    item.classList.add("active");
    displayRow(idx);
  });
});

function displayRow(idx) {
  let start = idx * itemsPerPage;
  let end = start + itemsPerPage;
  let rowsArray = [...pageItem];

  for (ra of rowsArray) {
    ra.style.display = "none";
  }

  let newRows = rowsArray.slice(start, end);

  for (na of newRows) {
    na.style.display = "";
  }
}

numberBtn[0].classList.add("active");
displayRow(0);
