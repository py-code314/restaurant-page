/* Import pages */
import lunch from './lunch.js';
import dinner from './dinner.js'
import drinks from './drinks.js'

/* Get html elements */
const content = document.querySelector('#content');

/* Renders the menu page with tabbed navigation for Lunch, Dinner, and Drinks options */
const showMenu = () => {
  // Add buttons for Lunch, Dinner, and Drinks
  const menuHTML = `
    <div id="menu-container" class="tabpanel menu flex-col-center" role="tabpanel" aria-labelledby="menu">
      <h2 class="menu__title section-heading">Menu</h2>

      <ul class="menu__list" role="tablist" aria-label="Menu options">
        <li class="menu__item">
          <button class="btn btn--large btn--salmon menu__btn menu__btn--lunch" role="tab" id="lunch"
          aria-selected="true">
            Lunch
          </button>
        </li>
        <li class="menu__item">
          <button
            class="btn btn--large menu__btn btn--green menu__btn--dinner"
            role="tab"           
            id="dinner"
            aria-selected="false">
            Dinner
          </button>
        </li>
        <li class="menu__item">
          <button
            class="btn btn--large btn--blue menu__btn menu__btn--drinks"
            role="tab"           
            id="drinks"
            aria-selected="false">
            Drinks
          </button>
        </li>
      </ul>      
    </div>
    <div id="menu-content"></div>
  `;

  content.innerHTML = menuHTML;

  // Initial render
  lunch();

  // Get html elements
  const menuTabs = document.querySelector('#menu-container');
  const menuButtons = menuTabs.querySelectorAll('[role="tab"]');
  const menuContent = document.querySelector('#menu-content');

  /* Handles the click event for menu buttons and 
   renders the associated tab panel based on button id */
  function handleTabClick(event) {
    // Clear content
    menuContent.innerHTML = '';

    // Unselect all buttons
    menuButtons.forEach((button) =>
      button.setAttribute('aria-selected', false)
    );

    // Select current tab
    event.currentTarget.setAttribute('aria-selected', true);

    // Show associated tab panel based on button id
    const id = event.currentTarget.id;

    if (id === 'lunch') {
      lunch();
    } else if (id === 'dinner') {
      dinner();
    } else {
      drinks();
    }
  }

  // Add event listeners
  menuButtons.forEach((button) =>
    button.addEventListener('click', handleTabClick)
  );
};

export default showMenu;
