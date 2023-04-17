for (i of document.querySelectorAll(".abc a")) {
  i.addEventListener("click", (e) => {
    e.preventDefault();

    let str = e.currentTarget.closest("li").dataset.filter;
    console.log(str);

    $.ajax({
      url: "./js/designer.json",
      dataType: "json",
      success: function (data) {
        console.log(data);
        $(".designers li").remove();
        //json type array 처리구문
        for (let i in data) {
          // for (let j = 0; j < data[i].length; j++) {
          for (j of data[i][str]) {
            // console.log(str);
            console.log(j);
            let member = j;
            console.log(member);
            $(".designers").append(
              `
              <li>
              <img src="${member.image}" alt="" />
              <div class="blacks">
              <p>${member.name}</p>
              </div>
            </li>
             `
            );
          }
        }
        console.log(data.filter);
      },
    });
  });
}

let filterBtns = document.querySelectorAll(".abc li a"),
  recentList = document.querySelectorAll(".designers li");

for (let rl of recentList) {
  rl.classList.add("active");
}

for (let fb of filterBtns) {
  fb.addEventListener("click", (e) => {
    for (let btn of filterBtns) {
      btn.classList.remove("active");
    }
    e.target.classList.add("active");
  }); //버튼 클릭
}
