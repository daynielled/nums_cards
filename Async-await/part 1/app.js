const BASE_URL = "http://numbersapi.com/";

// Question 1
const getFact = async (favoriteNumber) => {
    try {
        const data = await $.ajax({
            url: `${BASE_URL}/${favoriteNumber}?json`,
            method: 'GET'
        });
        console.log(data);
    } catch (error) {
        console.error('Error:', error);
    }
};

// Question 2
const getFactsForNumbers = async (favoriteNumbers) => {
    try {
        const promises = favoriteNumbers.map(async (number) => {
            return await $.ajax({
                url: `${BASE_URL}/${number}?json`,
                method: 'GET'
            });
        });
        const results = await Promise.all(promises);
        console.log(results);
    } catch (error) {
        console.error('Error:', error);
    }
};

// Question 3
const fetchAndDisplayFacts = async (favoriteNumbers) => {
    try {
        const promises = Array.from({ length: 4 }, () => {
            return $.ajax({
                url: `${BASE_URL}/${favoriteNumbers}?json`,
                method: 'GET'
            });
        });
        const facts = await Promise.all(promises);
        facts.forEach(data => $('#facts-container').append(`<p>${data.text}</p>`));
    } catch (error) {
        console.error('Error:', error);
    }
};

// Replace with your favorite numbers
const favoriteNumber = 7;
const favoriteNumbers = [2, 8, 12];

// Call the functions
getFact(favoriteNumber);
getFactsForNumbers(favoriteNumbers);
fetchAndDisplayFacts(favoriteNumbers);
