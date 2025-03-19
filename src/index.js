import './assets/styles/styles.css';
import footer from './components/footer.js'
import homepage from './pages/homepage.js';
import menu from './pages/menu.js';
import about from './pages/about.js';


const navTabs = document.querySelector('.nav');
const navButtons = navTabs.querySelectorAll('[role="tab"]');
const content = document.querySelector('#content');


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

navButtons.forEach((button) =>
  button.addEventListener('click', handleTabClick)
);

// Initial render
homepage();
footer()
