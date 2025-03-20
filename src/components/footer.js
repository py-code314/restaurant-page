/* Import images */
import accessibilityImg from '../assets/images/icon-accessibility.svg';
import privacyImg from '../assets/images/icon-privacy.svg';
import giftCardImg from '../assets/images/icon-gift-card.svg';
import jobsImg from '../assets/images/icon-jobs.svg';
import pressImg from '../assets/images/icon-newspaper.svg';
import subscribeImg from '../assets/images/icon-subscribe.svg';

/* Get html elements */
const footer = document.querySelector('.footer');

/* Creates footer with links */
const createFooter = () => {
  // Add footer content with links to other pages
  footer.innerHTML += `
    <div class="footer__links">
      <ul class="footer__list">
        <li class="footer__item">
          <img class="footer__image" src="${accessibilityImg}" alt="" width="25" height="25">
          <a class="footer__link" href="#" onclick="event.preventDefault()">Accessibility</a>
        </li>
        <div class="vertical-line"></div>
        
        <li class="footer__item">
          <img class="footer__image" src="${privacyImg}" alt="" width="25" height="25">
          <a class="footer__link" href="#" onclick="event.preventDefault()">Privacy</a>
        </li>
        <div class="vertical-line"></div>
        
        <li class="footer__item">
          <img class="footer__image" src="${giftCardImg}" alt="" width="25" height="25">
          <a class="footer__link" href="#" onclick="event.preventDefault()">Gift Cards</a>
        </li>
        <div class="vertical-line"></div>
        
        <li class="footer__item">
          <img class="footer__image" src="${jobsImg}" alt="" width="25" height="25">
          <a class="footer__link" href="#" onclick="event.preventDefault()">Jobs</a>
        </li>
        <div class="vertical-line"></div>
        
        <li class="footer__item">
          <img class="footer__image" src="${pressImg}" alt="" width="25" height="25">
          <a class="footer__link" href="#" onclick="event.preventDefault()">Press</a>
        </li>
        <div class="vertical-line"></div>
        
        <li class="footer__item">
          <img class="footer__image" src="${subscribeImg}" alt="" width="25" height="25">
          <a class="footer__link footer__link--upper" href="#" onclick="event.preventDefault()">Subscribe</a>
        </li>
      </ul>
    </div>
  `;
};

export default createFooter;