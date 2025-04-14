export const customCursor = () => {
    let cursorElem = document.createElement('div')
    cursorElem.classList.add('cursor', 'cursor_hidden')
    document.body.appendChild(cursorElem)

    document.querySelectorAll('.js-custom-cursor-area').forEach(area => {
        area.addEventListener('mouseenter', () => {
            cursorElem.classList.remove('cursor_hidden')
            cursorElem.classList.add(area.dataset.cursorClass)
        })

        area.addEventListener('mousemove', (e) => {
            cursorElem.style.left = `${e.clientX - cursorElem.clientWidth / 2}px`
            cursorElem.style.top = `${e.clientY - cursorElem.clientHeight / 2}px`
        })

        area.addEventListener('mouseleave', () => {
            cursorElem.classList.remove(area.dataset.cursorClass)
            cursorElem.classList.add('cursor_hidden')
        })
    })
}