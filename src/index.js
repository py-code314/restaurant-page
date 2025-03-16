import "./styles.css"
import homepage from './homepage.js'
import contact from './contact.js'
import menu from './menu.js'


console.log('Welcome to our restaurant!');

homepage()
menu()
contact()

const tabs = document.querySelector('.nav');
const tabButtons = tabs.querySelectorAll('[role="tab"]')
console.log(tabButtons);

const content = document.querySelector('#content');
const tabPanels = content.querySelectorAll('[role="tabpanel"]')
console.log(tabPanels);

function handleTabClick(event) {
  // Hide all tab panels
  tabPanels.forEach(tabPanel => tabPanel.hidden = true)

  // Unselect all buttons
  tabButtons.forEach(button => button.setAttribute('aria-selected', false))

  // Select current tab
  event.currentTarget.setAttribute('aria-selected', true)

  // Show associated tab panel
  const id = event.currentTarget.id
  const tabPanel = content.querySelector(`[aria-labelledby="${id}"]`)
  tabPanel.hidden = false;
}
  

tabButtons.forEach(button => button.addEventListener('click', handleTabClick))
