import accessibilityImg from './images/icon-accessibility.svg';
import privacyImg from './images/icon-privacy.svg';
import giftCardImg from './images/icon-gift-card.svg';
import jobsImg from './images/icon-jobs.svg';
import pressImg from './images/icon-newspaper.svg';
import subscribeImg from './images/icon-subscribe.svg';


const content = document.querySelector('#content');
const footer = document.querySelector('.footer');
const statement = document.querySelector('.statement');


const loadHomepage = () => {
  // Add content describing the restaurant
  content.innerHTML += `
    <div class="tabpanel home" role="tabpanel"           aria-labelledby="home">
      <div class="intro">
        <h2 class="intro__title">Uncompromising Authenticity</h2>
        <p class="intro__para"><strong>Bistro Parisien</strong> opened in 7th arrondissement in the Spring of 1992. The bustling, romantic brasserie serves traditional French fare in the form of lunch and dinner every day, with brunch served on weekends.</p>

        <p class="intro__para">Bistro Parisien offers a wide selection of fresh seafood and shellfish, as well as bread and pastries that are baked fresh every day at our own bakery.</p>

        <button class="btn btn--reserve">Book a table</button>
      </div>

      <div class="features">
        <div class="feature feature--restaurant">
          <a class="feature__name" href="#" onclick="event.preventDefault()">Restaurant</a>
        </div>

        <div class="feature feature--menu">
          <a class="feature__name" href="#" onclick="event.preventDefault()">Menu</a>
        </div>

        <div class="feature feature--bar">
          <a class="feature__name" href="#" onclick="event.preventDefault()">Bar</a>
        </div>

        <div class="feature feature--chef">
          <a class="feature__name" href="#" onclick="event.preventDefault()">Chef</a>
        </div>

        <div class="feature feature--chocolates">
          <a class="feature__name" href="#" onclick="event.preventDefault()">Chocolates</a>
        </div>

        <div class="feature feature--events">
          <a class="feature__name" href="#" onclick="event.preventDefault()">Events</a>
        </div>     
      </div>
    </div>
  `;

  // Add footer
  footer.innerHTML += `
    <div class="footer__links">
      <ul class="footer__list">
        <li class="footer__list-item">
          <img class="footer__list-image" src="${accessibilityImg}" alt="" width="25" height="25">
          <a class="footer__link" href="#" onclick="event.preventDefault()">Accessibility</a>
        </li>
        <div class="vertical-line"></div>
        
        <li class="footer__list-item">
          <img class="footer__list-image" src="${privacyImg}" alt="" width="25" height="25">
          <a class="footer__link" href="#" onclick="event.preventDefault()">Privacy</a>
        </li>
        <div class="vertical-line"></div>
        
        <li class="footer__list-item">
          <img class="footer__list-image" src="${giftCardImg}" alt="" width="25" height="25">
          <a class="footer__link" href="#" onclick="event.preventDefault()">Gift Cards</a>
        </li>
        <div class="vertical-line"></div>
        
        <li class="footer__list-item">
          <img class="footer__list-image" src="${jobsImg}" alt="" width="25" height="25">
          <a class="footer__link" href="#" onclick="event.preventDefault()">Jobs</a>
        </li>
        <div class="vertical-line"></div>
        
        <li class="footer__list-item">
          <img class="footer__list-image" src="${pressImg}" alt="" width="25" height="25">
          <a class="footer__link" href="#" onclick="event.preventDefault()">Press</a>
        </li>
        <div class="vertical-line"></div>
        
        <li class="footer__list-item">
          <img class="footer__list-image" src="${subscribeImg}" alt="" width="25" height="25">
          <a class="footer__link" href="#" onclick="event.preventDefault()">Subscribe</a>
        </li>
      </ul>
    </div>
  `;

  // Animate header
  document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
      statement.classList.add('slide');
    }, 1000);
  });
};

export default loadHomepage;
