var toggleBtn = document.querySelector('.theme-toggle-btn')
var body = document.querySelector('body')

window.onload = function () {
    const theme = localStorage.getItem('theme') || 'light'

    if (theme === 'dark') {
        body.classList.add('dark')
        toggleBtn.classList.add('dark')
    }
}

toggleBtn.addEventListener('click',function () {

    const isDark = body.classList.contains('dark')

    body.classList.toggle('dark');
    toggleBtn.classList.toggle('dark')

    localStorage.setItem('theme',isDark ? 'light' : 'dark')
})