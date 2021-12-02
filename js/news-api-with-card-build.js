const urlHome = 'https://api.nytimes.com/svc/topstories/v2/home.json?api-key=75CaAGwJshFzuxAiz5Q55fG4vFpYvbYB';
const newsCardsContainer = document.querySelector('#News-cards');

let articleArray = [];

let businessNewsArray = [];
let europeNewsArray = [];
let healthNewsArray = [];
let sportsNewsArray = [];
let travelNewsArray = [];

axios.get(urlHome).then(response => {

    //console.log(response.data);

    articleArray = response.data.results;

    // console.log(articleArray);

    articleArray.forEach(el => {
        if (el.section === 'business') {
            // console.log(el.section);
            console.log('push to array');
            businessNewsArray.push(el);
            if (businessNewsArray.length == 1) {
                //for category part
                const newsCardsCategorySection = document.createElement('section');
                newsCardsCategorySection.classList.add('News-category');

                const categorySectionBar = document.createElement('section');
                categorySectionBar.classList.add('News-category__bar', `${el.section}`);

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
                categorySectionTitleH2.textContent = `${el.section}`;

                const categorySectionIconWrapper = document.createElement('div');
                categorySectionIconWrapper.classList.add('News-category__icon-wrapper');

                const categorySectionIconDown = document.createElement("i");
                categorySectionIconDown.classList.add('fas', 'fa-chevron-down', 'News-category__icon-down');

                const categorySectionIconRight = document.createElement("i");
                categorySectionIconRight.classList.add('fas', 'fa-chevron-right', 'News-category__icon-right');

                const newsCardsCategoryCardsWrapper = document.createElement('div');
                newsCardsCategoryCardsWrapper.classList.add('News-category__cards-wrapper');

                //category bar (for drop down)
                categorySectionTitleWrapper.appendChild(categorySectionTitleImg);

                categorySectionTitleWrapper.appendChild(categorySectionTitleH2);

                categorySectionContentWrapper.appendChild(categorySectionTitleWrapper);

                categorySectionIconWrapper.appendChild(categorySectionIconDown);

                categorySectionIconWrapper.appendChild(categorySectionIconRight);

                categorySectionContentWrapper.appendChild(categorySectionIconWrapper);

                //appending wrapper for article cards under category
                categorySectionBar.appendChild(categorySectionContentWrapper);

                //general containers for articles (categories as well as cards)
                newsCardsCategorySection.appendChild(categorySectionBar);

                newsCardsContainer.appendChild(newsCardsCategorySection);
            }

        };
    });

    console.log('her...');

    businessNewsArray.forEach(articleObject => {


        document.querySelector('.News-category__bar').innerHTML += `<p style='padding: 5px;'>${articleObject.title}</p>`;


    });

    console.log(businessNewsArray);

});