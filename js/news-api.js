const urlHome = 'https://api.nytimes.com/svc/topstories/v2/home.json?api-key=75CaAGwJshFzuxAiz5Q55fG4vFpYvbYB';

let articleArray = [];

let businessNewsArray = [];
let europeNewsArray = [];
let healthNewsArray = [];
let sportsNewsArray = [];
let travelNewsArray = [];

axios.get(urlHome).then(response => {

    articleArray = response.data.results;

    // console.log(articleArray);

    articleArray.forEach(el => {


        if (el.section === 'business') {

            businessNewsArray.push(el);
            // console.log(businessNewsArray);

        } else if (el.section === 'world' && el.subsection === 'europe') {

            europeNewsArray.push(el);

        } else if (el.section === 'health') {

            healthNewsArray.push(el);

        } else if (el.section === 'sports') {

            sportsNewsArray.push(el);

        } else if (el.section === 'travel') {

            travelNewsArray.push(el);

        } else {

            console.log('Some articles matches any categories!')

        };

    });

    // console.log(europeNewsArray);

});