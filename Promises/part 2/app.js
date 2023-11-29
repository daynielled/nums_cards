let baseURL = 'https://deckofcardsapi.com/api/deck';

//Question 1
fetch(`${baseURL}/new/draw/`)
  .then(response => response.json())
  .then(data => {
    const card = data.cards[0];
    console.log(`${card.value} of ${card.suit}`);
  })
  .catch(error => console.error('Error:', error));

    
//Question 2
let firstCard = null;
  $.getJSON(`${baseURL}/new/draw/`)
    .then(data => {
      firstCard = data.cards[0];
      let deckId = data.deck_id;
      return $.getJSON(`${baseURL}/${deckId}/draw/`);
    })
    .then(data => {
      let secondCard = data.cards[0];
      [firstCard, secondCard].forEach(function(card) {
        console.log(
          `${card.value.toLowerCase()} of ${card.suit.toLowerCase()}`
        );
      });
    });



//Question 3

document.addEventListener('DOMContentLoaded', () => {
  const baseURL = 'https://deckofcardsapi.com/api/deck';
  let deckId;

  const createNewDeck = () => {
    return $.getJSON(`${baseURL}/new/shuffle/?deck_count=1`)
      .then(data => {
        deckId = data.deck_id;
      })
      .catch(error => console.error('Error:', error));
  };

  const drawCard = () => {
    return $.getJSON(`${baseURL}/${deckId}/draw/?count=1`)
      .catch(error => console.error('Error:', error));
  };

  const appendCardImage = (card) => {
    const cardContainer = $('#cardContainer');
    const randomX = Math.random() * 40 - 20;
    const randomY = Math.random() * 40 - 20;
    const angle = Math.random() * 90 - 45;
  
    const cardImage = $('<img>', {
      class: 'card',
      src: card.image,
      alt: `${card.value} of ${card.suit}`,
      css: {
        transform: `translate(${randomX}px, ${randomY}px) rotate(${angle}deg)`
      }
    });
  
    cardContainer.append(cardImage);
  };
  
  

  // Create a new deck when the page loads
  createNewDeck();

  // Event listener for the draw button
  $('#drawButton').on('click', async function () {
    if (!deckId) {
      console.error('Deck ID not available');
      return;
    }

    // Draw a card from the deck
    const data = await drawCard();

    if (data) {
      const card = data.cards[0];
      appendCardImage(card);

      // Remove the button if no cards are remaining
      if (data.remaining === 0) {
        $('#drawButton').remove();
      }
    }
  });
});
