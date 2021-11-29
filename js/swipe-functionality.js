const newsCard = document.querySelector('.News-card');
const newsCardDelete = document.querySelector('.News-card__delete-div');
const newsCardArchive = document.querySelector('.News-card__save-div');
const newsCardFront = document.querySelector('.News-card__front');

let touchStartCoordinateX;
let touchEndCoordinateX;
let touchMoveCoordinateX;
let deleteButtonWidth;

newsCardFront.addEventListener('touchstart', (event) => {

    touchStartCoordinateX = Math.floor(event.touches[0].clientX);

    // console.log(touchStartCoordinateX);

});

newsCardFront.addEventListener('touchmove', (event) => {

    touchMoveCoordinateX = Math.floor(event.touches[0].clientX);

    // console.log(touchMoveCoordinateX);

    deleteButtonWidth = (window.screen.width * 40) / 100;

    if (touchMoveCoordinateX < touchStartCoordinateX && touchMoveCoordinateX > touchStartCoordinateX - deleteButtonWidth) {

        newsCardFront.style.transform = `translateX(${touchMoveCoordinateX - touchStartCoordinateX}px)`;
        newsCardFront.style.transition = `0.1s ease-in-out`;

    }

});

newsCardFront.addEventListener('touchend', (event) => {

    touchEndCoordinateX = Math.floor(event.changedTouches[0].clientX);

    // console.log(touchEndCoordinateX);
    // console.log(touchStartCoordinateX);
    // console.log(deleteButtonWidth);

    if (touchEndCoordinateX < touchStartCoordinateX - deleteButtonWidth / 2) {

        // console.log('teeest');

        newsCardFront.style.transform = `translateX(-${deleteButtonWidth}px)`;

    } else {
        newsCardFront.style.transform = `translateX(${0})`;
    }

});

// newsCardDelete.addEventListener("click", () => {

//     // swipeContainer.classList.add('animate__delay-1s');
//     // swipeContainer.classList.add('animate__slow');
//     newsCard.classList.add('animate__fadeOutLeft');

//     setTimeout(function() {
//         newsCard.classList.add('_collapsed');
//     }, 50);

//     setTimeout(function() {
//         newsCard.remove()
//     }, 1600);

// });