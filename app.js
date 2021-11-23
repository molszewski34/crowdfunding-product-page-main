// const hamburgerMenu = document.querySelector("#hamburger");
const hamburgerBtn = document.querySelector('#hamburger-btn');
const hamburgerImg = document.querySelector('#hamburger-btn__img')
const menu = document.querySelector('.menu');
// const hamburgerClose = document.querySelector('#hamburger__close')
const backProject = document.querySelector('.back-this-project');
const modal = document.querySelector('.modal');
const modalClose = document.querySelector('.modal__close-btn');
const bookmark = document.querySelector('.bookmark');
const popup = document.querySelector('.popup');
const body = document.querySelector('body');
const mainForm = document.querySelector('.main')


hamburgerBtn.addEventListener("click", (evt) => {
    if (hamburgerImg.getAttribute('src') == "images/icon-hamburger.svg") {
        hamburgerImg.setAttribute('src', "images/icon-close-menu.svg");
        // menu.classList.remove("menu__open");
    }

    else {
        hamburgerImg.setAttribute('src', "images/icon-hamburger.svg");
    }
    menu.classList.toggle("menu__open");
    body.classList.toggle("no-scroll");
    overlay.classList.toggle('active');

}

)

backProject.addEventListener("click", () => {
    modal.classList.add("modal__open");
    overlay.classList.add('active');
    body.classList.add("no-scroll");
})

modalClose.addEventListener('click', () => {
    modal.classList.remove("modal__open");
    overlay.classList.remove('active');
    body.classList.remove("no-scroll");
})

const overlay = document.querySelector('.overlay');

overlay.addEventListener('click', (over) => {
    // over.preventDefault()
    // mainForm.reset()
    overlay.classList.remove('active');
    modal.classList.remove("modal__open");
    popup.classList.remove('popup-active');
    body.classList.remove("no-scroll");
    menu.classList.remove("menu__open");
    // hamburgerImg.setAttribute('src', "images/icon-hamburger.svg");
    // hamburgerClose.style.display = "none";
  
})

// overlay.onclick= reloadPage;
// function reloadPage(){
//     window.location.reload();
// }


bookmark.addEventListener("click", () => {
    const bookmarkSpan = document.querySelector('.bookmark__span');
    const svg = document.querySelector(".fill");

    svg.classList.toggle("fill-green");
    if (bookmarkSpan.textContent == "Bookmark") {
        bookmarkSpan.textContent = "Bookmarked";
        bookmarkSpan.classList.add("green-font");
    }
    else {
        bookmarkSpan.textContent = "Bookmark";
        bookmarkSpan.classList.remove("green-font");
    }

})

const bambooStandReward = document.querySelector('#bamboo-stand__btn');
const bambooStandChecked = document.querySelector("#bamboo");
bambooStandReward.addEventListener("click", () => {
    modal.classList.add("modal__open");
    overlay.classList.add('active');
    bambooStandChecked.checked = true;
})

const blackStandReward = document.querySelector('#black-edition-stand__btn')
const blackStandChecked = document.querySelector('#black');
blackStandReward.addEventListener("click", () => {
    modal.classList.add("modal__open");
    overlay.classList.add('active');
    blackStandChecked.checked = true;
})


const continueBtn = document.querySelectorAll(".pledge__btn");
const noReward = document.querySelector('#none');
const bambooRadio = document.querySelector('#bamboo');
const blackRadio = document.querySelector('#black');
const pledgeInput = document.querySelector('.pledge__input');
const noRewardInput = document.querySelector('#no-reward');
const bambooInput = document.querySelector('#bamboo-input');
const blackInput = document.querySelector('#pledge__input__black');
const outputBacked = document.querySelector('#output__backed');
const outputBacker = document.querySelector('#output__backers');
const progressBar = document.querySelector('#progress-bar');;
let sumBacked = 89914;
let sumBacker = 5007;


continueBtn.forEach(btn => {;
    btn.addEventListener('click', evt => {
        evt.preventDefault();
        // tipDisplay.value = `$ ${parseFloat(totalTipAmount / numPeople.value).toFixed(2)}`


        if (noReward.checked == true) {
            outputBacked.innerHTML = "$" + (sumBacked + parseInt(noRewardInput.value)).toLocaleString("en-us");
            outputBacker.innerHTML = (sumBacker + 1).toLocaleString("en-us");
            progressBar.value = (sumBacked + parseInt(noRewardInput.value));
            modal.classList.remove("modal__open");
            overlay.classList.add('active');
            popup.classList.add('popup-active');
        }
        else if (bambooRadio.checked == true) {
            outputBacked.innerHTML = "$" + (sumBacked + parseInt(bambooInput.value)).toLocaleString("en-us");
            outputBacker.innerHTML = (sumBacker + 1).toLocaleString("en-us");
            progressBar.value = (sumBacked + parseInt(bambooInput.value));
            modal.classList.remove("modal__open");
            overlay.classList.add('active');
            popup.classList.add('popup-active');
        }

        else if (blackRadio.checked == true) {
            outputBacked.innerHTML = "$" + (sumBacked + parseInt(blackInput.value)).toLocaleString("en-us");
            outputBacker.innerHTML = (sumBacker + 1).toLocaleString("en-us");
            progressBar.value = (sumBacked + parseInt(blackInput.value));
            modal.classList.remove("modal__open");
            overlay.classList.add('active');
            popup.classList.add('popup-active');
        }

    })
})

const popupBtn = document.querySelector('.popup__btn');
popupBtn.addEventListener("click", () => {
    popup.classList.remove('popup-active');
    overlay.classList.remove('active');
})














