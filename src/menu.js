const content = document.querySelector('#content');

console.log(`menu section is working`);

const showMenu = () => {
  const wrapper = document.createElement('div');
  wrapper.role = 'tabpanel';
  wrapper.setAttribute('aria-labelledby', 'menu');
  // wrapper.hidden = true

  wrapper.innerHTML += `
    <h2>Menu</h2>
    <ul>
      <li>Item 1</li>
      <li>Item 2</li>
      <li>Item 3</li>
      <li>Item 4</li>
    </ul>

  `
  content.appendChild(wrapper)
}

export default showMenu