// ! Записать в body переменную с текущим значением скролла от верха
window.addEventListener("scroll", e => {
	document.body.style.cssText += `--scrollTop: ${this.scrollY}px` // ! += для того, чтобы не мешать библиотекам вставлять свой класс в body
})

// ! Регистрация библиотек для плавного скролла
gsap.registerPlugin(ScrollTrigger, ScrollSmoother)
ScrollSmoother.create({
	wrapper: ".wrapper",
	content: ".container"
})
