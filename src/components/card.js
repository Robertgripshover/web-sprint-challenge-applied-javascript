import axios from "axios";

const Card = (article) => {
  // TASK 5
  // ---------------------
  // Implement this function, which should return the markup you see below.
  // It takes as its only argument an "article" object with `headline`, `authorPhoto` and `authorName` properties.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  // Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
  //
  // <div class="card">
  //   <div class="headline">{ headline }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ authorPhoto }>
  //     </div>
  //     <span>By { authorName }</span>
  //   </div>
  // </div>
   
  const articleCard = document.createElement('div');
  const headlineOfCard = document.createElement('div');
  const authorOfCard = document.createElement('div');
  const containerForImage = document.createElement('div');
  const imgSrcElement = document.createElement('img');
  const spanElement = document.createElement('span');

  articleCard.classList.add('card');
  headlineOfCard.classList.add('headline');
  authorOfCard.classList.add('author');
  containerForImage.classList.add('img-container');

  articleCard.appendChild(headlineOfCard);
  articleCard.appendChild(authorOfCard);
  authorOfCard.appendChild(containerForImage);
  authorOfCard.appendChild(spanElement);
  containerForImage.appendChild(imgSrcElement);
  
  headlineOfCard.textContent = article.headline;
  spanElement.textContent = article.authorName;
  imgSrcElement.src = article.authorPhoto;

  articleCard.addEventListener('click', () => {
    return console.log(`${headlineOfCard}`)})

  return articleCard;  
}

const cardAppender = (selector) => {
  // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `http://localhost:5001/api/articles` (test it with console.log!!).
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  
  axios.get(`http://localhost:5001/api/articles`)
    .then(result => {
      const articles = Object.values(result.data.articles).flat();
      articles.forEach(articleObj => {
        document.querySelector(selector).appendChild(Card(articleObj))
      })
    })
}

export { Card, cardAppender }
