/* Import images */
import facebookImg from '../assets/images/icon-facebook.svg'
import instagramImg from '../assets/images/icon-instagram.svg'
import linkedinImg from '../assets/images/icon-linkedin.svg'
import twitterImg from '../assets/images/icon-twitter.svg'
import chefImg from '../assets/images/image-chef-1.jpeg'
import diningImg from '../assets/images/image-dining.jpeg'

/* Get html elements */
const content = document.querySelector('#content');

/* Creates the "About Us" tab content */
const aboutUs = () => {
  // Add subsections for Our Story, About Our Restaurant, and Contact Us
  content.innerHTML += `
    <div class="tabpanel about-us flex-col" role="tabpanel" aria-labelledby="about">

      <section class="story flex-col" >
        <h2 class="story__title section-heading">Our Story</h2>
        <div class="story__line">
          <div class="story__image-div img-container">
            <img class="story__image img-full" src="${chefImg}" alt="Chef tasting food">
          </div>
          <div class="story__content flex-col-center">
            
            <p class="story__para">Our restaurant is led by a passionate and visionary chef who has dedicated his life to crafting culinary experiences. With a lifelong love for food, he honed his skills in various kitchens before realizing his dream of opening his own restaurant. His mission is to create a space where food brings people together, using only the freshest ingredients to ensure every bite is a testament to his dedication.</p>

            <p class="story__para">Our chef is a true culinary artist, driven by passion and creativity. He leads a collaborative kitchen where every team member feels valued. We are proud of our current team and are always looking for like-minded individuals who share our passion for food and hospitality. If you're driven by culinary excellence, we invite you to join us in creating unforgettable dining experiences.</p>
          </div>
        </div>
      </section>

      <section class="about flex-col">
        <h2 class="about__title section-heading">About Our Restaurant</h2>
        <div class="about__line">
          <div class="about__content flex-col-center">         
            <p class="about__para">
              Located in the heart of Paris, our modern bistro blends sleek sophistication with the timeless charm of French cuisine. As you step inside, you're greeted by a spacious, minimalist interior with floor-to-ceiling windows that offer stunning views of the city. The contemporary design features clean lines and elegant lighting, creating a chic and inviting atmosphere. Our chefs prepare each dish with precision and passion, using locally sourced ingredients to honor traditional French techniques with a modern twist.      
            </p>
            <p class="about__para">
              Our location allows guests to explore the city's iconic landmarks, such as the Eiffel Tower and Notre-Dame Cathedral, just a short stroll away. Whether you're a local or a visitor, our restaurant is the perfect place to experience the authentic flavors and ambiance of Paris. Our staff is dedicated to providing exceptional service, ensuring that every visit is a memorable one. Come and indulge in a culinary journey that will leave you feeling like you're part of the city's dynamic present. 
            </p>
          </div>
          <div class="about__image-div img-container">
            <img class="about__image img-full" src="${diningImg}" alt="People dining at a restaurant">
          </div>
        </div>
      </section>

      <section class="contact flex-col-center">
        <h2 class="contact__title section-heading">Contact Us</h2>

        <div class="contact__container">
          <div class="details group flex-col-center">
            <h3 class="details__title group-heading">Hours & Location</h3>
            <div class="location">
              <p>17 Rue de l'Université,</p>
              <p>75007 Paris</p>
              <p>+33 1 42 61 92 01</p>
            </div>

            <div class="hours">
              <p>Monday - Friday</p>
              <p>11:00AM - 9:00PM</p>
              <p>Saturday</p>
              <p>4:00pM - 10:00PM</p>
              <p>Closed Sunday</p>
            </div>
          </div>

          <div class="navigation group flex-col-center">
            <h3 class="navigation__title group-heading">Navigate</h3>
            <ul class="navigation__list>
              <li class="navigation__item">
                <a class="navigation__link no-underline" href="#" onclick="event.preventDefault()">Home</a>
              </li>
              <li class="navigation__item">
                <a class="navigation__link no-underline" href="#" onclick="event.preventDefault()">Menu</a>
              </li>
              <li class="navigation__item">
                <a class="navigation__link no-underline" href="#" onclick="event.preventDefault()">About</a>
              </li>
              <li class="navigation__item">
                <a class="navigation__link no-underline" href="#" onclick="event.preventDefault()">Contact</a>
              </li>
              <li class="navigation__item">
                <a class="navigation__link no-underline" href="#" onclick="event.preventDefault()">Book Now</a>
              </li>
              <li class="navigation__item">
                <a class="navigation__link no-underline" href="#" onclick="event.preventDefault()">Events</a>
              </li>
              <li class="navigation__item">
                <a class="navigation__link no-underline" href="#" onclick="event.preventDefault()">Interior</a>
              </li>
            </ul>
          </div>

          <div class="follow group flex-col-center">
            <h3 class="follow__title group-heading">Follow Us</h3>
            <ul class="follow__list flex-col">
              <li class="follow__item">
                <img src="${facebookImg}" alt="" width="20" height="20">
                <a class="follow__link no-underline" href="#" onclick="event.preventDefault()">Facebook</a>
              </li>
              <li class="follow__item">
                <img src="${instagramImg}" alt="" width="20" height="20">
                <a class="follow__link no-underline" href="#" onclick="event.preventDefault()">Instagram</a>
              </li>
              <li class="follow__item">
                <img src="${linkedinImg}" alt="" width="20" height="20">
                <a class="follow__link no-underline" href="#" onclick="event.preventDefault()">Linkedin</a>
              </li>
              <li class="follow__item">
                <img src="${twitterImg}" alt="" width="20" height="20">
                <a class="follow__link no-underline" href="#" onclick="event.preventDefault()">Twitter</a>
              </li>
            </ul>
          </div>
        </div>
      <section>
    </div>
  `;
}

export default aboutUs

