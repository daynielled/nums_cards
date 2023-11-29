let baseURL = 'https://deckofcardsapi.com/api/deck';

//Question 1
async function getSingleCard() {
   let data= await $.getJSON(`${baseURL}/new/draw/`)
      const card = data.cards[0];
      console.log(`${card.value} of ${card.suit}`);
}

 
    
//Question 2
async function get2cards(){
    let firstCard = await $.getJSON(`${baseURL}/new/draw/`);
    let deckId = firstCard.deck_id;
    let secondCard = await $.getJSON(`${baseURL}/${deckId}/draw/`);
    [firstCard, secondCard].forEach(card =>{
        let {suit, value} = card.cards[0];
        console.log(`${value.toLowerCase()} of ${suit.toLowerCase()}`)
    });
 }
     


//Question 3
async function setup() {
    const baseURL = 'https://deckofcardsapi.com/api/deck';
    let $btn = $('#drawButton');
    let $cardArea = $('#cardContainer');
  
    try {
      let deckData = await $.getJSON(`${baseURL}/new/shuffle/`);
      $btn.show().on('click', async function () {
        try {
          let cardData = await $.getJSON(`${baseURL}/${deckData.deck_id}/draw/`);
          let cardSrc = cardData.cards[0].image;
          let angle = Math.random() * 90 - 45;
          let randomX = Math.random() * 40 - 20;
          let randomY = Math.random() * 40 - 20;
          $cardArea.append(
            $('<img>', {
              class: 'card',
              src: cardSrc,
              css: {
                transform: `translate(${randomX}px, ${randomY}px) rotate(${angle}deg)`
              }
            })
          );
          if (cardData.remaining === 0) $btn.remove();
        } catch (error) {
          console.error('Error drawing card:', error);
        }
      });
    } catch (error) {
      console.error('Error creating new deck:', error);
    }
  }
  
  $(document).ready(setup);
  
