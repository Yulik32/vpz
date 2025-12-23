document.addEventListener('DOMContentLoaded', function () {
  const carNames = document.querySelectorAll('.car-name');

  carNames.forEach(carName => {
    carName.addEventListener('click', function () {
      const targetId = this.getAttribute('data-target');
      const tableContainer = document.getElementById(targetId);

      // Переключаем активный класс
      this.classList.toggle('active');
      tableContainer.classList.toggle('active');
    });
  });
});


document.querySelectorAll('.menu-title').forEach(title => {
  title.addEventListener('click', function(event) {
    event.stopPropagation();

    // Закрываем все открытые пункты и увеличения карточек
    document.querySelectorAll('.menu-item.open-item').forEach(openItem => {
      if (openItem.querySelector('.menu-title') !== this) {
        openItem.classList.remove('open-item');
        openItem.querySelector('.menu-title').classList.remove('open');
        openItem.querySelector('.menu-content').classList.remove('show');
        openItem.closest('.card').classList.remove('active-card');
      }
    });

    const menuItem = this.closest('.menu-item');
    const card = this.closest('.card');
    const isOpen = menuItem.classList.contains('open-item');

    if (isOpen) {
      menuItem.classList.remove('open-item');
      this.classList.remove('open');
      this.nextElementSibling.classList.remove('show');
      card.classList.remove('active-card');
    } else {
      menuItem.classList.add('open-item');
      this.classList.add('open');
      this.nextElementSibling.classList.add('show');
      card.classList.add('active-card');
    }
  });
});

// Закрытие меню и уменьшение карточки при клике вне
document.addEventListener('click', function(event) {
  const openItems = document.querySelectorAll('.menu-item.open-item');
  if (openItems.length === 0) return;

  let clickedInside = false;
  openItems.forEach(openItem => {
    if (openItem.contains(event.target)) clickedInside = true;
  });

  if (!clickedInside) {
    openItems.forEach(openItem => {
      openItem.classList.remove('open-item');
      openItem.querySelector('.menu-title').classList.remove('open');
      openItem.querySelector('.menu-content').classList.remove('show');
      const card = openItem.closest('.card');
      if (card) card.classList.remove('active-card');
    });
  }
});
