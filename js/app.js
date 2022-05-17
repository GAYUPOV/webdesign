let countersOne = document.querySelector(".one");
let countersTwo = document.querySelector(".two");
let countersThree = document.querySelector(".three");
let countersFour = document.querySelector(".four");
function countersLvl(a = 0) {
    countersOne.innerHTML = a;
    a++
    if (a <= 12) {
        setTimeout(() => {
            countersLvl(a);
        }, 450);
    }
}
countersLvl();
function countersLvlTwo(b = 0) {
    countersTwo.innerHTML = b;
    b++
    if (b <= 56) {
        setTimeout(() => {
            countersLvlTwo(b);
        }, 93);
    }
}
countersLvlTwo();
function countersLvlThree(c = 0) {
    countersThree.innerHTML = c;
    c++
    if (c <= 72) {
        setTimeout(() => {
            countersLvlThree(c);
        }, 80);
    }
}
countersLvlThree();
function countersLvlFour(d = 0) {
    countersFour.innerHTML = d;
    d++
    if (d <= 140) {
        setTimeout(() => {
            countersLvlFour(d);
        }, 35);
    }
}
countersLvlFour();
window.onscroll = function () { scrollSPY() };
const header = document.querySelector(".header__nav");
const brand = document.querySelector(".header__logo");
const sticky = header.offsetTop;
function scrollSPY() {
    if (window.pageYOffset > sticky) {
        header.classList.add("active");
        brand.style.color = "var(--primary-color)";

    } else {
        header.classList.remove("active");
        brand.style.color = "var(--ternary-color)";
    }
}