let favoriteNumber = 7;
let BASE_URL = "http://numbersapi.com/";

//Question 1
$.getJson(`${BASE_URL}/${favoriteNumber}?json`)
    .then(data =>{
        console.log(data)
    });
    
//Question 2
let favoriteNumbers = [2,8,12];
$.getJson(`${BASE_URL}/${favoriteNumbers}?json`)
    .then(data =>{
        console.log(data)
    })


//Question 3
Promise.all(
    Array.from({length:4}, () => {
        return $.getJson(`${BASE_URL}/${favoriteNumbers}?json`)
    })
) .then(facts => {
    facts.forEach(data => $('#facts-container').append(`<p>${data.text}</p>`));
});

// const fetchAndDisplayFacts = (favoriteNumber) => {
//     for (let i = 0; i < 4; i++) {
//       $.get(`${BASE_URL}/${favoriteNumber}?json`)
//         .done(data => {
//           $('#facts-container').append(`<p>${data.text}</p>`);
//         })
//         .fail(error => console.error('Error:', error));
//     }
//   };

 