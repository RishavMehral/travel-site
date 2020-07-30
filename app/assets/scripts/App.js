import '../styles/styles.css'
import MobileMenu from './modules/MobileMenu'
import RevealOnScroll from './modules/RevealOnScroll'
import StickyHeader from './modules/StickyHeader'

let stickHeader = new StickyHeader()
new RevealOnScroll(document.querySelectorAll(".row__medium-4"), 60)
new RevealOnScroll(document.querySelectorAll(".generic-content-container"), 60)
new RevealOnScroll(document.querySelectorAll(".feature-item"), 75)
new RevealOnScroll(document.querySelectorAll(".testimonial"), 60)
let mobileMenu = new MobileMenu();

if (module.hot) {
    module.hot.accept()
    
}

