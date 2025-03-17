const content = document.querySelector('#content');
console.log('contact section is working');
const contactUs = () => {
  const wrapper = document.createElement('div');
  wrapper.role = 'tabpanel';
  wrapper.setAttribute('aria-labelledby', 'about');
  // wrapper.hidden = true;

  const aboutUs = document.createElement('h2');
  aboutUs.textContent = 'About Us'
  wrapper.appendChild(aboutUs)

  const phoneNumber = document.createElement('p');
  phoneNumber.textContent = '123-456-7890'
  wrapper.appendChild(phoneNumber)

  const email = document.createElement('p');
  email.textContent = 'name@example.com'
  wrapper.appendChild(email)

  content.appendChild(wrapper)

}

export default contactUs

