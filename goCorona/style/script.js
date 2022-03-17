const sel = (selector) => document.querySelector(selector);

let flag = 0;
sel(".btn-toggle").addEventListener("click", function () {
  sel("body").classList.toggle("dark-theme");
  sel(".video_body_text").classList.toggle("dark-theme");

  if (flag == 0) {
    sel(".dayLogo").classList.add("hide");
    sel(".nightLogo").classList.add("open");
    sel(".experts_top_block_1").classList.add("white");
    flag = 1;
  } else {
    sel(".nightLogo").classList.remove("open");
    sel(".dayLogo").classList.remove("hide");
    sel(".experts_top_block_1").classList.remove("white");
    flag = 0;
  }

  let link = document.querySelectorAll(".menu_link");
  for (let i = 0; i < link.length; i++) {
    link[i].classList.toggle("dark-theme");
  }
  let title = document.querySelectorAll(".title_text");
  for (let a = 0; a < title.length; a++) {
    title[a].classList.toggle("dark-theme");
  }
  let mainText = document.querySelectorAll(".main_text");
  for (let m = 0; m < mainText.length; m++) {
    mainText[m].classList.toggle("white");
  }
  let health = document.querySelectorAll(".healthcare_item");
  console.log(health);
  for (let h = 0; h < health.length; h++) {
    health[h].classList.toggle("white");
  }
  if (sel(".btn-toggle").checked == true) {
    sel(".icon_menu").classList.add("white");
    sel(".spanBurger").style.backgroundColor = "#eee";
    sel(".menu_body").classList.add("dark");
    sel(".close_icon_menu").classList.add("white");
  } else {
    sel(".icon_menu").classList.remove("white");
    sel(".spanBurger").style.backgroundColor = "#000";
    sel(".menu_body").classList.remove("dark");
  }
});
