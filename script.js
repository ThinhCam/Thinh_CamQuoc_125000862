// Khởi tạo AOS sau khi thư viện đã được tải.
document.addEventListener("DOMContentLoaded", () => {
  if (window.AOS) {
    AOS.init({
      duration: 650,
      easing: "ease-out-cubic",
      once: true,
      offset: 80,
      disable: window.matchMedia("(prefers-reduced-motion: reduce)").matches
    });
  }

  const menuButton = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector(".nav-links");

  // Menu dùng cho màn hình nhỏ.
  if (menuButton && navLinks) {
    menuButton.addEventListener("click", () => {
      const isOpen = navLinks.classList.toggle("is-open");
      menuButton.setAttribute("aria-expanded", String(isOpen));
      menuButton.setAttribute("aria-label", isOpen ? "Đóng menu" : "Mở menu");
    });

    navLinks.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        navLinks.classList.remove("is-open");
        menuButton.setAttribute("aria-expanded", "false");
        menuButton.setAttribute("aria-label", "Mở menu");
      });
    });
  }

  // Cập nhật năm tự động ở chân trang.
  const year = document.querySelector("#current-year");
  if (year) year.textContent = new Date().getFullYear();
});
