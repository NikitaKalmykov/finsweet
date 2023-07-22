'use strict'

const tabItem = document.querySelectorAll('.tab__btn-item');
const tabContent = document.querySelectorAll('.tab__content-item');

tabItem.forEach(function (element) {
    element.addEventListener('click', open);
});

function open(evt) {
    const tabTarget = evt.currentTarget;
    const button = tabTarget.dataset.button;

    tabItem.forEach(function (item) {
        item.classList.remove('tab__btn-item--active');
    });
    tabContent.forEach(function (item) {
        item.classList.remove('tab__content-item--active')
    });
    tabTarget.classList.add('tab__btn-item--active');
    document.querySelector(`#${button}`).classList.add('tab__content-item--active');
}


