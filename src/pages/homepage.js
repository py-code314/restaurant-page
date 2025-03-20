/* Get html elements */
const content = document.querySelector('#content');
const statement = document.querySelector('.statement');


/* Function to load the homepage content into the page */
const loadHomepage = () => {
  // Add content describing the restaurant
  // Add gallery
  content.innerHTML += `
    <div class="tabpanel home flex-col-center" role="tabpanel" aria-labelledby="home">
      <section class="intro flex-col-center">
        <h2 class="intro__title section-heading">Uncompromising Authenticity</h2>
        <p class="intro__para"><strong>Le Coeur de Paris</strong> opened in 7th arrondissement in the Spring of 1992. The bustling, romantic brasserie serves traditional French fare in the form of lunch and dinner every day, with brunch served on weekends.</p>

        <p class="intro__para">Le Coeur de Paris offers a wide selection of fresh seafood and shellfish, as well as bread and pastries that are baked fresh every day at our own bakery.</p>

        <button class="btn btn--rounded">Book a table</button>
      </section>

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

  // Animate header
  document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
      statement.classList.add('slide');
    }, 500);
  });
};

export default loadHomepage;
