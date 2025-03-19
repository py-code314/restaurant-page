import accessibilityImg from '../assets/images/icon-accessibility.svg';
import privacyImg from '../assets/images/icon-privacy.svg';
import giftCardImg from '../assets/images/icon-gift-card.svg';
import jobsImg from '../assets/images/icon-jobs.svg';
import pressImg from '../assets/images/icon-newspaper.svg';
import subscribeImg from '../assets/images/icon-subscribe.svg';

const footer = document.querySelector('.footer');

const createFooter = () => {
  // Add footer
  footer.innerHTML += `
    <div class="footer__links">
      <ul class="footer__list">
        <li class="footer__list-item">
          <img class="footer__list-image" src="${accessibilityImg}" alt="" width="25" height="25">
          <a class="footer__link" href="#" onclick="event.preventDefault()">Accessibility</a>
        </li>
        <div class="vertical-line"></div>
        
        <li class="footer__list-item">
          <img class="footer__list-image" src="${privacyImg}" alt="" width="25" height="25">
          <a class="footer__link" href="#" onclick="event.preventDefault()">Privacy</a>
        </li>
        <div class="vertical-line"></div>
        
        <li class="footer__list-item">
          <img class="footer__list-image" src="${giftCardImg}" alt="" width="25" height="25">
          <a class="footer__link" href="#" onclick="event.preventDefault()">Gift Cards</a>
        </li>
        <div class="vertical-line"></div>
        
        <li class="footer__list-item">
          <img class="footer__list-image" src="${jobsImg}" alt="" width="25" height="25">
          <a class="footer__link" href="#" onclick="event.preventDefault()">Jobs</a>
        </li>
        <div class="vertical-line"></div>
        
        <li class="footer__list-item">
          <img class="footer__list-image" src="${pressImg}" alt="" width="25" height="25">
          <a class="footer__link" href="#" onclick="event.preventDefault()">Press</a>
        </li>
        <div class="vertical-line"></div>
        
        <li class="footer__list-item">
          <img class="footer__list-image" src="${subscribeImg}" alt="" width="25" height="25">
          <a class="footer__link footer__link--upper" href="#" onclick="event.preventDefault()">Subscribe</a>
        </li>
      </ul>
    </div>
  `;
};

export default createFooter;