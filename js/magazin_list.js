$.ajax({
  url: "./js/magazin_list.json",
  dataType: "json",
  success: function (data) {
    console.log(data.magazine_list);
    for (v of data.magazine_list) {
      $(".magazines").append(`
       <div class="magazine">
       <div class="magazine-img">
         <img
           src="${v.image}"
           alt="무질서 속 새롭게 발견한 독특함의 이미지"
         />
       </div>
       <div class="magazine_text">
         <h3>${v.title}</h3>
         <p>
         ${v.content}
         </p>
         <ul class="contents_data">
          <li>${v.timeline}</li>
           <li>85</li>
           <li>엘엠씨</li>
         </ul>
       </div>
     </div>
      `);
    }
    console.log(data.magazine_list);
  },
});

//페이지 네이션
let itemsPerPage = 12;
let pageItem = document.querySelectorAll(".magazine");
// let pageItems = pageItem.classList.add('')
console.log(pageItem);
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

// numberBtn[0].classList.add("active");
displayRow(0);
