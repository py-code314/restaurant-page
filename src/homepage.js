import accessibilityImg from './images/icon-accessibility.svg';
import privacyImg from './images/icon-privacy.svg';
import giftCardImg from './images/icon-giftcard.svg';
import jobsImg from './images/icon-jobs.svg';
import pressImg from './images/icon-newspaper.svg';
import subscribeImg from './images/icon-subscribe.svg';

const content = document.querySelector('#content');
const footer = document.querySelector('.footer');

/* Test code */
const loadHomepage = () => {
  // Add content describing the restaurant
  content.innerHTML += `
    


    <div class="tabpanel home" role="tabpanel"           aria-labelledby="home">
      <div class="intro">
        <h2 class="intro__title">Uncompromising Authenticity</h2>
        <p class="intro__para"><strong>Bistro Parisien</strong> opened in 7th arrondissement in the Spring of 1997. The bustling, romantic brasserie serves traditional French fare in the form of lunch and dinner every day, with brunch served on weekends.</p>

        <p class="intro__para">Bistro Parisien offers a wide selection of fresh seafood and shellfish, as well as bread and pastries that are baked fresh every day at our own bakery.</p>

        <button class="btn btn--reserve">Book a table</button>
      </div>

      <div class="images">
        <img src="" alt="">
        <img src="" alt="">
        <img src="" alt="">
        <img src="" alt="">
        <img src="" alt="">
        <img src="" alt="">
        <img src="" alt="">
        <img src="" alt="">
      
      </div>
    </div>





      <h2 >About Our Restaurant</h2>
      <div >
      <p >
        Located in the heart of Paris, our modern bistro blends sleek sophistication with the timeless charm of French cuisine. As you step inside, you're greeted by a spacious, minimalist interior with floor-to-ceiling windows that offer stunning views of the city. The contemporary design features clean lines and elegant lighting, creating a chic and inviting atmosphere. Our chefs prepare each dish with precision and passion, using locally sourced ingredients to honor traditional French techniques with a modern twist.      
      </p>
      <p >
        Our location allows guests to explore the city's iconic landmarks, such as the Eiffel Tower and Notre-Dame Cathedral, just a short stroll away. Whether you're a local or a visitor, our restaurant is the perfect place to experience the authentic flavors and ambiance of Paris. Our staff is dedicated to providing exceptional service, ensuring that every visit is a memorable one. Come and indulge in a culinary journey that will leave you feeling like you're part of the city's dynamic present. 
      </p>
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
};

export default loadHomepage;
