import {hljs} from './hl.js'

const B = document.body
const menuBtn = B.querySelector('.menu')
const nav = B.querySelector('nav')
const darken = B.querySelector('.darken')
const main = B.querySelector('main')

menuBtn.addEventListener('click', () => {
    nav.className = 'show'
    darken.style.display = 'block'
    B.style.overflow = 'hidden'
})

darken.addEventListener('click', () => {
    nav.className = 'hide'
    darken.style.display = 'none'
    B.style.overflow = 'auto'
})

let i = +localStorage.getItem("NodejsGuidePageNumber") || 1

const showPage = async i => {
    const url = `./chapters/${i}.js`

    await import(url).then(data => main.innerHTML = data.default)

    localStorage.setItem("NodejsGuidePageNumber", i)

    scrollTo(0, 0)

    main.querySelectorAll('code').forEach(i => i.className = 'lang-js')

    hljs(window)
}

showPage(i)

const changePage = ev => {
    if (ev === '-') {
        if (i === 1) return;
        i--
    } else {
        if (i === nav.querySelectorAll('.link').length) return;
        i++
    }

    showPage(i)
}

B.addEventListener('click', ev => {
    if (ev.target.className === 'link') {
        i = +ev.target.dataset.url
        showPage(i)
        darken.click()
    }
    else if (ev.target.tagName === 'LI' && ev.target.parentElement.parentElement === nav) {
        i = +(ev.target.children[0].dataset.url)
        showPage(i)
        darken.click()
    }
    else if (ev.target.className == 'prev') {
        changePage("-")
    }
    else if (ev.target.className === 'next') {
        changePage("+")
    }
    else return;
})

document.addEventListener('keydown', ev => {
    if (ev.keyCode === 37 || ev.keyCode === 65 || ev.keyCode === 100) {
        changePage("-")
    }
    else if (ev.keyCode === 39 || ev.keyCode === 68 || ev.keyCode === 102) {
        changePage("+")
    }
    else return;
})

navigator.serviceWorker.register("./sw.js").catch(er => console.error(er))