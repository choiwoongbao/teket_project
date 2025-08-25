window.addEventListener("load", function () {
  const nav = document.querySelector(".menu-list");
  const headerBg = document.querySelector(".header-bg");
  const navItems = nav.querySelectorAll(".menu-list > li");
  
  navItems.forEach((item, index) => {
    // li 안쪽 전체 영역에 마우스 들어올 때
    item.addEventListener("mouseenter", function (e) {
      // 3번째 메뉴만 헤더 배경 보이게
      if (index <= 2) {
        headerBg.style.height = "70px";
        headerBg.style.backgroundColor = "#1e73be";
      } else {
        headerBg.style.height = "0px";
        headerBg.style.backgroundColor = "transparent";
      }
    });
  });

  // nav 벗어나면 배경 숨김
  nav.addEventListener("mouseleave", function () {
    headerBg.style.height = "0px";
    headerBg.style.backgroundColor = "transparent";
  });

  // 언어 클릭했을때
  const langBtn = this.document.querySelector(".language-icon");
  const krus = this.document.querySelector(".kr-us");
  langBtn.addEventListener("click", function (e) {
    e.preventDefault(); // a태그라면 새로고침 막기

    const current = window.getComputedStyle(krus).display;

    if (current === "none") {
      krus.style.display = "flex";
    } else {
      krus.style.display = "none";
    }
  });

  // 햄버거바 클릭 시
  const hamburger = this.document.querySelector(".hamburgerBtn");
  const mobile = this.document.querySelector(".mobile-menu");

  hamburger.addEventListener("click", function () {
    mobile.classList.toggle("show");
  });
});
