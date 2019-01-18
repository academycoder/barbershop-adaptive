var advantagesButtons = document.querySelectorAll('.slider__toggle--advantages'),
    reviewsButton = document.querySelectorAll('.slider__toggle--reviews'),
    reviewsItem = document.querySelectorAll('.slider__item--reviews'),
    advantagesItem = document.querySelectorAll('.slider__item--advantages');

Array.prototype.forEach.call(advantagesButtons, function(button, j) {

    button.addEventListener('click', function() {

        for (var i = 0, length = advantagesButtons.length; i < length; i++) {
            advantagesButtons[i].classList.remove('slider__toggle--advantages-active');
            advantagesItem[i].classList.remove('slider__item--advantages-active');
        }

        this.classList.add('slider__toggle--advantages-active');
        advantagesItem[j].classList.add('slider__item--advantages-active');

    }, false);
});

Array.prototype.forEach.call(reviewsButton, function (button, j) {
    button.addEventListener('click', function () {

        for(var i = 0, length = reviewsButton.length; i < length; i++) {
            reviewsButton[i].classList.remove('slider__toggle--reviews-active');
            reviewsItem[i].classList.remove('slider__item--reviews-active');
        }

        this.classList.add('slider__toggle--reviews-active');
        reviewsItem[j].classList.add('slider__item--reviews-active');

    }, false);

});