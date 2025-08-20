window.addEventListener("load", function () {
  // 각각의 요소를 변수에 담아놓는다.
  const nav = document.querySelector(".menu-list");
  const headerBg = document.querySelector(".header-bg");
   const searchBox = document.querySelector(".search-box");

  // nav에 마우스 엔터 했을때 즉 호버했을때
  nav.addEventListener("mouseenter", function () {
    headerBg.style.height = "70px";
  });
nav.addEventListener("mouseover", function (e) {
    const target = e.target.closest("li");

    if (!target) return;
       if (!target.querySelector(".search-box")) {
      headerBg.style.height = "70px";
    } else {
      headerBg.style.height = "0px";
    }
  });

  // nav에 마우스 리브 했을때 즉 호버를 안했을때
  nav.addEventListener("mouseleave", function () {
    headerBg.style.height = "0px";
  });
});

