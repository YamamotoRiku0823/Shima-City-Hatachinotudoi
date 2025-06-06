const toggleBtn = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

// メニュー開閉トグル
toggleBtn.addEventListener('click', (event) => {
  event.stopPropagation(); // 他のクリックで閉じないように
  navLinks.classList.toggle('active');
});

// メニュー外クリックで閉じる
document.addEventListener('click', (event) => {
  if (
    navLinks.classList.contains('active') &&
    !navLinks.contains(event.target) &&
    !toggleBtn.contains(event.target)
  ) {
    navLinks.classList.remove('active');
  }
});

// リンククリックでメニューを閉じる（スマホ用）
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('active');
  });
});
