/* Import styles and components */
import './assets/styles/styles.css';
import footer from './components/footer.js'
import homepage from './pages/homepage.js';
import menu from './pages/menu.js';
import about from './pages/about.js';

/* Global variables */
const navTabs = document.querySelector('.nav');
const navButtons = navTabs.querySelectorAll('[role="tab"]');
const content = document.querySelector('#content');


/* Handles the click event for navigation buttons and 
renders the associated tab panel based on button id */
function handleTabClick(event) {
  // Clear page
  content.innerHTML = '';

  // Unselect all buttons
  navButtons.forEach((button) => button.setAttribute('aria-selected', false));

  // Select current button
  event.currentTarget.setAttribute('aria-selected', true);

  // Show associated tab panel based on button id
  const id = event.currentTarget.id;

  if (id === 'home') {
    homepage();  
  } else if (id === 'menu') {
    menu();   
  } else {
    about();
  }
}

/* Add event listeners to navigation buttons */
navButtons.forEach((button) =>
  button.addEventListener('click', handleTabClick)
);

/* Initial renders */
homepage();
footer()
