// ハンバーガーメニュー開閉
const toggleBtn = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
const closeBtn = document.querySelector('.close-menu');

toggleBtn.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

closeBtn.addEventListener('click', () => {
  navLinks.classList.remove('active');
});

// メニュー内のリンクをクリックしたとき、自動でメニューを閉じる
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('active');
  });
});
