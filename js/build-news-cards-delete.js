const newsCardsContainer = document.querySelector('#News-cards');
// const newsCardsCategorySection = document.querySelector('.News-category');
// const newsCardsCategoryCardsWrapper = document.querySelector('.News-category__cards-wrapper');
let newsCategory;
let categoryTitle;
let newsTitle;
let newsParagraf;
let newsUrl;

//creating elements
//for category part
const newsCardsCategorySection = document.createElement('section');
newsCardsCategorySection.classList.add('News-category');

const categorySectionBar = document.createElement('section');
categorySectionBar.classList.add('News-category__bar');
categorySectionBar.setAttribute('id', `${newsCategory}`)

const categorySectionContentWrapper = document.createElement('div');
categorySectionContentWrapper.classList.add('News-category__content-wrapper');

const categorySectionTitleWrapper = document.createElement('div');
categorySectionTitleWrapper.classList.add('News-category__title-wrapper');

const categorySectionTitleImg = document.createElement('img');
categorySectionTitleImg.classList.add('News-category__img');
categorySectionTitleImg.src = 'https://picsum.photos/100/100';
categorySectionTitleImg.alt = 'Category picture';

const categorySectionTitleH2 = document.createElement('h2');
categorySectionTitleH2.classList.add('News-category__title', '_section-heading');
categorySectionTitleH2.textContent = `${categoryTitle}`;

const categorySectionIconWrapper = document.createElement('div');
categorySectionIconWrapper.classList.add('News-category__icon-wrapper');

const categorySectionIconDown = document.createElement("i");
categorySectionIconDown.classList.add('fas', 'fa-chevron-down', 'News-category__icon-down');

const categorySectionIconRight = document.createElement("i");
categorySectionIconRight.classList.add('fas', 'fa-chevron-right', 'News-category__icon-right');

//for news card part
const newsCardsCategoryCardsWrapper = document.createElement('div');
newsCardsCategoryCardsWrapper.classList.add('News-category__cards-wrapper');

const newsCardSection = document.createElement('section');
newsCardSection.classList.add('News-card', 'animate__animated');

const newsCardDeleteDiv = document.createElement('div');
newsCardDeleteDiv.classList.add('News-card__delete-div');

const newsCardDeleteIcon = document.createElement("i");
newsCardDeleteIcon.classList.add('fas', 'fa-trash', 'News-card__delete-save-icon');

const newsCardSaveDiv = document.createElement('div');
newsCardSaveDiv.classList.add('News-card__save-div');

const newsCardSaveIcon = document.createElement("i");
newsCardSaveIcon.classList.add('fas', 'fa-trash', 'News-card__delete-save-icon');

const newsCardFrontDiv = document.createElement('div');
newsCardFrontDiv.classList.add('News-card__front', 'animate__animated');

const newsCardA = document.createElement('a');
newsCardA.href = `${newsUrl}`;

const newsCardImg = document.createElement('img');
newsCardImg.classList.add('News-card__img');
newsCardImg.src = 'https://picsum.photos/80/80';
newsCardImg.alt = 'Article image';

const newsCardTextWrapper = document.createElement('div');
newsCardTextWrapper.classList.add('News-card__text-wrapper');

const newsCardH3 = document.createElement('h3');
newsCardH3.classList.add('News-card__h3', '_card-title');
newsCardH3.textContent = `${newsTitle}`;

const newsCardP = document.createElement('p');
newsCardP.classList.add('News-card__p', '_card-copy-small');
newsCardP.textContent = `${newsParagraf}`;

// appending parts

//category bar (for drop down)
categorySectionTitleWrapper.appendChild(categorySectionTitleImg);

categorySectionTitleWrapper.appendChild(categorySectionTitleH2);

categorySectionContentWrapper.appendChild(categorySectionTitleWrapper);

categorySectionIconWrapper.appendChild(categorySectionIconDown);

categorySectionIconWrapper.appendChild(categorySectionIconRight);

categorySectionContentWrapper.appendChild(categorySectionIconWrapper);

categorySectionBar.appendChild(categorySectionContentWrapper);

//news cards
newsCardDeleteDiv.appendChild(newsCardDeleteIcon);

newsCardSection.appendChild(newsCardDeleteDiv);


newsCardSaveDiv.appendChild(newsCardSaveIcon);

newsCardSection.appendChild(newsCardSaveDiv);


newsCardFrontDiv.appendChild(newsCardA);

newsCardA.appendChild(newsCardImg);

newsCardTextWrapper.appendChild(newsCardH3);

newsCardTextWrapper.appendChild(newsCardP);

newsCardFrontDiv.appendChild(newsCardTextWrapper);

newsCardSection.appendChild(newsCardFrontDiv);

//appending a card to the card wrapper under a certain category of articles
newsCardsCategoryCardsWrapper.appendChild(newsCardSection);

//appending wrapper for article cards under category
categorySectionBar.appendChild(newsCardsCategoryCardsWrapper);


//general containers for articles (categories as well as cards)
newsCardsCategorySection.appendChild(categorySectionBar);

newsCardsContainer.appendChild(newsCardsCategorySection);