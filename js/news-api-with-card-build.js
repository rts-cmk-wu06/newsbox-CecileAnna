const urlHome = 'https://api.nytimes.com/svc/topstories/v2/home.json?api-key=75CaAGwJshFzuxAiz5Q55fG4vFpYvbYB';
const newsCardsContainer = document.querySelector('#News-cards');

let articleArray = [];

let businessNewsArray = [];
let europeNewsArray = [];
let healthNewsArray = [];
let sportsNewsArray = [];
let travelNewsArray = [];


axios.get(urlHome).then(response => {

    console.log(response.data);

    articleArray = response.data.results;

    // console.log(articleArray);

    articleArray.forEach(el => {


        if (el.section === 'business') {
            // console.log(el);

            businessNewsArray.push(el);

            // console.log(businessNewsArray);

            //for category part
            const newsCardsCategorySection = document.createElement('section');
            newsCardsCategorySection.classList.add('News-category');

            const categorySectionBar = document.createElement('section');
            categorySectionBar.classList.add('News-category__bar');
            categorySectionBar.setAttribute('class', `${el.section}`)

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

            //category bar (for drop down)
            categorySectionTitleWrapper.appendChild(categorySectionTitleImg);

            categorySectionTitleWrapper.appendChild(categorySectionTitleH2);

            categorySectionContentWrapper.appendChild(categorySectionTitleWrapper);

            categorySectionIconWrapper.appendChild(categorySectionIconDown);

            categorySectionIconWrapper.appendChild(categorySectionIconRight);

            categorySectionContentWrapper.appendChild(categorySectionIconWrapper);

            categorySectionBar.appendChild(categorySectionContentWrapper);

            businessNewsArray.forEach(articleObject => {


                //creating elements

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
                newsCardA.href = `${articleObject.short_url}`;

                const newsCardImg = document.createElement('img');
                newsCardImg.classList.add('News-card__img');
                newsCardImg.src = `${articleObject.multimedia[0].url}`;
                newsCardImg.alt = 'Article picture';

                console.log(articleObject.multimedia[0].url);

                const newsCardTextWrapper = document.createElement('div');
                newsCardTextWrapper.classList.add('News-card__text-wrapper');

                const newsCardH3 = document.createElement('h3');
                newsCardH3.classList.add('News-card__h3', '_card-title');
                newsCardH3.textContent = `${articleObject.title}`;

                const newsCardP = document.createElement('p');
                newsCardP.classList.add('News-card__p', '_card-copy-small');
                newsCardP.textContent = `${articleObject.abstract}`;

                // appending parts

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

            });

        } else if (el.section === 'world' && el.subsection === 'europe') {

            europeNewsArray.push(el);

            //for category part
            const newsCardsCategorySection = document.createElement('section');
            newsCardsCategorySection.classList.add('News-category');

            const categorySectionBar = document.createElement('section');
            categorySectionBar.classList.add('News-category__bar');
            categorySectionBar.setAttribute('class', `${el.subsection}`)

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
            categorySectionTitleH2.textContent = `${el.subsection}`;

            const categorySectionIconWrapper = document.createElement('div');
            categorySectionIconWrapper.classList.add('News-category__icon-wrapper');

            const categorySectionIconDown = document.createElement("i");
            categorySectionIconDown.classList.add('fas', 'fa-chevron-down', 'News-category__icon-down');

            const categorySectionIconRight = document.createElement("i");
            categorySectionIconRight.classList.add('fas', 'fa-chevron-right', 'News-category__icon-right');

            //category bar (for drop down)
            categorySectionTitleWrapper.appendChild(categorySectionTitleImg);

            categorySectionTitleWrapper.appendChild(categorySectionTitleH2);

            categorySectionContentWrapper.appendChild(categorySectionTitleWrapper);

            categorySectionIconWrapper.appendChild(categorySectionIconDown);

            categorySectionIconWrapper.appendChild(categorySectionIconRight);

            categorySectionContentWrapper.appendChild(categorySectionIconWrapper);

            categorySectionBar.appendChild(categorySectionContentWrapper);

            europeNewsArray.forEach(articleObject => {

                //creating elements

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
                newsCardA.href = `${articleObject.short_url}`;

                const newsCardImg = document.createElement('img');
                newsCardImg.classList.add('News-card__img');
                newsCardImg.src = `${articleObject.multimedia[0].url}`;
                newsCardImg.alt = 'Article picture';

                console.log(articleObject.multimedia[0].url);

                const newsCardTextWrapper = document.createElement('div');
                newsCardTextWrapper.classList.add('News-card__text-wrapper');

                const newsCardH3 = document.createElement('h3');
                newsCardH3.classList.add('News-card__h3', '_card-title');
                newsCardH3.textContent = `${articleObject.title}`;

                const newsCardP = document.createElement('p');
                newsCardP.classList.add('News-card__p', '_card-copy-small');
                newsCardP.textContent = `${articleObject.abstract}`;

                // appending parts

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

            });


        } else if (el.section === 'health') {

            healthNewsArray.push(el);

            //for category part
            const newsCardsCategorySection = document.createElement('section');
            newsCardsCategorySection.classList.add('News-category');

            const categorySectionBar = document.createElement('section');
            categorySectionBar.classList.add('News-category__bar');
            categorySectionBar.setAttribute('class', `${el.section}`)

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

            //category bar (for drop down)
            categorySectionTitleWrapper.appendChild(categorySectionTitleImg);

            categorySectionTitleWrapper.appendChild(categorySectionTitleH2);

            categorySectionContentWrapper.appendChild(categorySectionTitleWrapper);

            categorySectionIconWrapper.appendChild(categorySectionIconDown);

            categorySectionIconWrapper.appendChild(categorySectionIconRight);

            categorySectionContentWrapper.appendChild(categorySectionIconWrapper);

            categorySectionBar.appendChild(categorySectionContentWrapper);

            healthNewsArray.forEach(articleObject => {


                //creating elements

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
                newsCardA.href = `${articleObject.short_url}`;

                const newsCardImg = document.createElement('img');
                newsCardImg.classList.add('News-card__img');
                newsCardImg.src = `${articleObject.multimedia[0].url}`;
                newsCardImg.alt = 'Article picture';

                console.log(articleObject.multimedia[0].url);

                const newsCardTextWrapper = document.createElement('div');
                newsCardTextWrapper.classList.add('News-card__text-wrapper');

                const newsCardH3 = document.createElement('h3');
                newsCardH3.classList.add('News-card__h3', '_card-title');
                newsCardH3.textContent = `${articleObject.title}`;

                const newsCardP = document.createElement('p');
                newsCardP.classList.add('News-card__p', '_card-copy-small');
                newsCardP.textContent = `${articleObject.abstract}`;

                // appending parts

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

            });

        } else if (el.section === 'sports') {

            sportsNewsArray.push(el);

            //for category part
            const newsCardsCategorySection = document.createElement('section');
            newsCardsCategorySection.classList.add('News-category');

            const categorySectionBar = document.createElement('section');
            categorySectionBar.classList.add('News-category__bar');
            categorySectionBar.setAttribute('class', `${el.section}`)

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

            //category bar (for drop down)
            categorySectionTitleWrapper.appendChild(categorySectionTitleImg);

            categorySectionTitleWrapper.appendChild(categorySectionTitleH2);

            categorySectionContentWrapper.appendChild(categorySectionTitleWrapper);

            categorySectionIconWrapper.appendChild(categorySectionIconDown);

            categorySectionIconWrapper.appendChild(categorySectionIconRight);

            categorySectionContentWrapper.appendChild(categorySectionIconWrapper);

            categorySectionBar.appendChild(categorySectionContentWrapper);

            sportsNewsArray.forEach(articleObject => {

                //creating elements

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
                newsCardA.href = `${articleObject.short_url}`;

                const newsCardImg = document.createElement('img');
                newsCardImg.classList.add('News-card__img');
                newsCardImg.src = `${articleObject.multimedia[0].url}`;
                newsCardImg.alt = 'Article picture';

                console.log(articleObject.multimedia[0].url);

                const newsCardTextWrapper = document.createElement('div');
                newsCardTextWrapper.classList.add('News-card__text-wrapper');

                const newsCardH3 = document.createElement('h3');
                newsCardH3.classList.add('News-card__h3', '_card-title');
                newsCardH3.textContent = `${articleObject.title}`;

                const newsCardP = document.createElement('p');
                newsCardP.classList.add('News-card__p', '_card-copy-small');
                newsCardP.textContent = `${articleObject.abstract}`;

                // appending parts

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

            });

        } else if (el.section === 'travel') {

            travelNewsArray.push(el);

            //for category part
            const newsCardsCategorySection = document.createElement('section');
            newsCardsCategorySection.classList.add('News-category');

            const categorySectionBar = document.createElement('section');
            categorySectionBar.classList.add('News-category__bar');
            categorySectionBar.setAttribute('class', `${el.subsection}`)

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
            categorySectionTitleH2.textContent = `${el.subsection}`;

            const categorySectionIconWrapper = document.createElement('div');
            categorySectionIconWrapper.classList.add('News-category__icon-wrapper');

            const categorySectionIconDown = document.createElement("i");
            categorySectionIconDown.classList.add('fas', 'fa-chevron-down', 'News-category__icon-down');

            const categorySectionIconRight = document.createElement("i");
            categorySectionIconRight.classList.add('fas', 'fa-chevron-right', 'News-category__icon-right');

            //category bar (for drop down)
            categorySectionTitleWrapper.appendChild(categorySectionTitleImg);

            categorySectionTitleWrapper.appendChild(categorySectionTitleH2);

            categorySectionContentWrapper.appendChild(categorySectionTitleWrapper);

            categorySectionIconWrapper.appendChild(categorySectionIconDown);

            categorySectionIconWrapper.appendChild(categorySectionIconRight);

            categorySectionContentWrapper.appendChild(categorySectionIconWrapper);

            categorySectionBar.appendChild(categorySectionContentWrapper);

            travelNewsArray.forEach(articleObject => {

                //creating elements

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
                newsCardA.href = `${articleObject.short_url}`;

                const newsCardImg = document.createElement('img');
                newsCardImg.classList.add('News-card__img');
                newsCardImg.src = `${articleObject.multimedia[0].url}`;
                newsCardImg.alt = 'Article picture';

                console.log(articleObject.multimedia[0].url);

                const newsCardTextWrapper = document.createElement('div');
                newsCardTextWrapper.classList.add('News-card__text-wrapper');

                const newsCardH3 = document.createElement('h3');
                newsCardH3.classList.add('News-card__h3', '_card-title');
                newsCardH3.textContent = `${articleObject.title}`;

                const newsCardP = document.createElement('p');
                newsCardP.classList.add('News-card__p', '_card-copy-small');
                newsCardP.textContent = `${articleObject.abstract}`;

                // appending parts

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

            });

        } else {

            console.log('Some articles does not match any categories!')

        };

    });

    // console.log(europeNewsArray);

});