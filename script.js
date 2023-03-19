const addButton = () => {
  const body = document.querySelector('body')
  const btn = document.createElement('button')
  btn.textContent = 'Кнопка'
  body.append(btn)
}

window.addEventListener('load', addButton)
