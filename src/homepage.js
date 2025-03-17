// import restaurantImage from './restaurant-image.jpeg'

const content = document.querySelector('#content');
const footer = document.querySelector('.footer');

/* Test code */
const loadHomepage = () => {
  // Add content describing the restaurant
  content.innerHTML += `
    <div class="tabpanel home" role="tabpanel" aria-labelledby="home">
      <h2 class="tabpanel__title">About Our Restaurant</h2>
      <div class="tabpanel__text-container">
      <p class="tabpanel__text">
        Located in the heart of Paris, our modern bistro blends sleek sophistication with the timeless charm of French cuisine. As you step inside, you're greeted by a spacious, minimalist interior with floor-to-ceiling windows that offer stunning views of the city. The contemporary design features clean lines and elegant lighting, creating a chic and inviting atmosphere. Our chefs prepare each dish with precision and passion, using locally sourced ingredients to honor traditional French techniques with a modern twist.      
      </p>
      <p class="tabpanel__text">
        Our location allows guests to explore the city's iconic landmarks, such as the Eiffel Tower and Notre-Dame Cathedral, just a short stroll away. Whether you're a local or a visitor, our restaurant is the perfect place to experience the authentic flavors and ambiance of Paris. Our staff is dedicated to providing exceptional service, ensuring that every visit is a memorable one. Come and indulge in a culinary journey that will leave you feeling like you're part of the city's dynamic present. 
      </p>
      </div>
    </div>
  `;

  // Add footer
  footer.innerHTML += `
    <div class="footer__links">
      <a class="footer__link" href="#" onclick="event.preventDefault()">Accessibility</a>
      <div class="vertical-line"></div>
      <a class="footer__link" href="#" onclick="event.preventDefault()">Privacy</a>
      <div class="vertical-line"></div>
      <a class="footer__link" href="#" onclick="event.preventDefault()">Gift Cards</a>
      <div class="vertical-line"></div>
      <a class="footer__link" href="#" onclick="event.preventDefault()">Jobs</a>
      <div class="vertical-line"></div>
      <a class="footer__link" href="#" onclick="event.preventDefault()">Press</a>
      <div class="vertical-line"></div>
      <a class="footer__link footer__link--subscribe" href="#" onclick="event.preventDefault()">Subscribe</a>
    </div>
  `;

}

export default loadHomepage 



