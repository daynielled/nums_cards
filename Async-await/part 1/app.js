let favoriteNumber = 7;
let favoriteNumbers = [6, 15, 22];
let baseURL = "http://numbersapi.com";

// Question 1
async function getFact() {
    let data = await $.getJSON(`${baseURL}/${favoriteNumber}?json`);
    console.log(data);
}
getFact();

// Question 2
async function getFactsForNumbers() {
    let dataArray = await Promise.all(favoriteNumbers.map(number =>
        $.getJSON(`${baseURL}/${number}?json`)
    )
    );
    dataArray.forEach((data, index) => {
        $('#facts-container').append(`<p>Fun Fact For ${favoriteNumbers[index]}: ${data.text}</p>`);
    });
}
getFactsForNumbers();

// Question 3

async function fetchAndDisplayFacts() {
    let facts = await Promise.all(
        Array.from({ length: 4 }, () => $.getJSON(`${baseURL}/${favoriteNumber}?json`))
    );
    facts.forEach(data => {
        $('body').append(`<p>${data.text}</p>`);
    });
}
fetchAndDisplayFacts();


