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

  content.innerHTML += `
    <h2 >About Our Restaurant</h2>
      <div >
        <p>
          Located in the heart of Paris, our modern bistro blends sleek sophistication with the timeless charm of French cuisine. As you step inside, you're greeted by a spacious, minimalist interior with floor-to-ceiling windows that offer stunning views of the city. The contemporary design features clean lines and elegant lighting, creating a chic and inviting atmosphere. Our chefs prepare each dish with precision and passion, using locally sourced ingredients to honor traditional French techniques with a modern twist.      
        </p>
        <p >
          Our location allows guests to explore the city's iconic landmarks, such as the Eiffel Tower and Notre-Dame Cathedral, just a short stroll away. Whether you're a local or a visitor, our restaurant is the perfect place to experience the authentic flavors and ambiance of Paris. Our staff is dedicated to providing exceptional service, ensuring that every visit is a memorable one. Come and indulge in a culinary journey that will leave you feeling like you're part of the city's dynamic present. 
        </p>
      </div>
  `;

}

export default contactUs

