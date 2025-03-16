// import restaurantImage from './restaurant-image.jpeg'

const content = document.querySelector('#content');

/* Test code */
const loadHomepage = () => {
  const wrapper = document.createElement('div');
  wrapper.role = 'tabpanel'
  wrapper.setAttribute('aria-labelledby', 'home')

  const title = document.createElement('h1');
  title.textContent = 'French Bistro'
  wrapper.appendChild(title)

  const para = document.createElement('p');
  para.textContent =
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni vitae laudantium rerum accusamus iste perspiciatis ex consequatur. Nisi, possimus eius qui soluta illum vero mollitia nihil ipsam porro cupiditate optio illo. Totam sit earum praesentium ex laborum qui itaque sed ipsum, nesciunt a odio quia eveniet maiores architecto error voluptatibus.';
  wrapper.appendChild(para)
  
  // const image = document.createElement('img');
  // image.src = restaurantImage
  // image.alt = ''
  // wrapper.appendChild(image)

  content.appendChild(wrapper)
}

export default loadHomepage 



