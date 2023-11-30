let favoriteNumber = 5;
let favoriteNumbers = [2,8,12];
let baseURL = "http://numbersapi.com";

// Question 1

$.getJSON(`${baseURL}/${favoriteNumber}?json`).then(data =>{
    console.log(data)
});
    
//Question 2

const promises = favoriteNumbers.map(number =>
    $.getJSON(`${baseURL}/${number}?json` )
);
Promise.all(promises)
.then(dataArray => {
    dataArray.forEach((data, index) =>{
        $('#facts-container').append(`<p>Fun fact for ${favoriteNumbers[index]}: ${data.text}</p>`);
    });
})    
.catch(error => {
    console.error('Error', error)
});

//Question 3
Promise.all(
    Array.from({length:4}, () => {
        return $.getJSON(`${baseURL}/${favoriteNumber}?json`)
    })
) .then(facts => {
    facts.forEach(data => $('#facts-container').append(`<p>${data.text}</p>`));
});

