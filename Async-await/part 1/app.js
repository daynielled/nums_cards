let favoriteNumber = 7;
let baseURL = "http://numbersapi.com/";

// Question 1
async function getFact() {
    let data = await $.getJSON(`${baseURL}/${favoriteNumber}?json`);
    console.log(data);
}
getFact();

// Question 2
const favoriteNumbers = [7, 11, 22];
async function getFactsForNumbers() {
    let data = await $.getJSON(`${baseURL}/${favoriteNumbers}?json`);
    console.log(data);
}
getFactsForNumbers();

// Question 3

async function fetchAndDisplayFacts() {
    let facts = await Promise.all(
        Array.from({ length: 4 }, () => $.getJSON(`${baseURL}/${favoriteNumbers}?json`))
    );
    facts.forEach(data => {
        $('body').append(`<p>${data.text}</p>`);
    });
}
fetchAndDisplayFacts();


