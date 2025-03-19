import lunch from './lunch.js';
import dinner from './dinner.js'
import drinks from './drinks.js'

const content = document.querySelector('#content');

const showMenu = () => {
  const menuHTML = `
    <div id="menu-container" class="tabpanel menu" role="tabpanel" aria-labelledby="menu">
      <h2 class="menu__title section-heading">Menu</h2>

      <ul class="menu__list" role="tablist" aria-label="Menu options">
        <li class="menu__list-item">
          <button class="btn btn--large menu__btn menu__btn--lunch" role="tab" id="lunch"
          aria-selected="true">
            Lunch
          </button>
        </li>
        <li class="menu__list-item">
          <button
            class="btn btn--large menu__btn menu__btn--dinner"
            role="tab"           
            id="dinner"
            aria-selected="false">
            Dinner
          </button>
        </li>
        <li class="menu__list-item">
          <button
            class="btn btn--large menu__btn menu__btn--drinks"
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

  const menuTabs = document.querySelector('#menu-container');
  const menuButtons = menuTabs.querySelectorAll('[role="tab"]');
  const menuContent = document.querySelector('#menu-content');

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

  menuButtons.forEach((button) =>
    button.addEventListener('click', handleTabClick)
  );
};

export default showMenu;
