export const accordionInit = () => {
  const accordionBtn = document.querySelectorAll('.accordion__title'),
    	accordionContainer = document.querySelectorAll('.accordion__container')

  // перебираем все кнопки аккордеона
  accordionBtn.forEach((btn) => {
    // проверяем наличие дата-атрибута
    const collapse = btn.closest('.js-accordion').hasAttribute('data-collapse')

    const container = btn.nextElementSibling

    // если дата-аттрибут есть
    if (collapse) {
      btn.addEventListener('click', () => {
        btn.classList.add('vis')
        if (container.classList.contains('show')) {
          container.classList.remove('show')
        } else {
          // проверяем контейнер на наличие класса, для удаления его у других
          accordionContainer.forEach((el) => {
            el.classList.remove('show')
          })
          container.classList.add('show')
        }
      })

      // если дата-аттрибута нет
    } else {
      btn.addEventListener('click', () => {
        btn.classList.add('vis')
        if (container.classList.contains('show')) {
          container.classList.remove('show')
        } else {
          container.classList.add('show')
        }
      })
    }
  })
}
