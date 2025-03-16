import "./styles.css"
import homepage from './homepage.js'
import contact from './contact.js'
import menu from './menu.js'


console.log('Welcome to our restaurant!');

// homepage()
// menu()
// contact()

const tabs = document.querySelector('.nav');
const tabButtons = tabs.querySelectorAll('[role="tab"]')
console.log(tabButtons);

const content = document.querySelector('#content');
const tabPanels = content.querySelectorAll('[role="tabpanel"]')
console.log(tabPanels);

function handleTabClick(event) {
  // Clear page
  content.innerHTML = ''

  // Unselect all buttons
  tabButtons.forEach((button) => button.setAttribute('aria-selected', false));

  // Select current tab
  event.currentTarget.setAttribute('aria-selected', true);

  // Show associated tab panel based on button id
  const id = event.currentTarget.id;

  if (id === 'home') {
    homepage();
  } else if (id === 'menu') {
    menu();
  } else {
    contact();
  }
}
  

tabButtons.forEach(button => button.addEventListener('click', handleTabClick))

// Initial render
homepage()
