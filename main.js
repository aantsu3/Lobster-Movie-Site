document.addEventListener('DOMContentLoaded', function () {

    const navInit = () => {
        const nav = document.querySelector('.nav')
        const links = document.querySelectorAll('.nav__li')
        const sections = document.querySelectorAll('.hidden')
        sections.forEach(section => {
            if (window.pageYOffset >= section.offsetTop) {
                links.forEach(link => {
                    link.classList.remove('nav__li_active')
                    if (link.dataset.section === section.dataset.section) {
                        link.classList.add('nav__li_active')
                    }

                })
            }

        })
    }
    navInit()
    window.addEventListener('scroll', () => {
        navInit()
    })
    window.addEventListener('resize', () => {
        navInit()
    })

})
