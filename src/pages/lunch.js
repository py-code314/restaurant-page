function showLunchMenu() {
  document.querySelector('#menu-content').innerHTML = '';

  const lunchHTML = `
    <div class="lunch">
      
      <div class="lunch__categories">
        <div class="lunch__categories-left">
          <h3 class="lunch__subtitle">Amusés</h3>
          <ul class="lunch__list">
            <li class="lunch__item">
              <p class="lunch__item-name">Baguette Service</p>
              <p class="lunch__item-description">Radish, Butter, Cervelle</p>
              <p class="lunch__item-price">18</p>
            </li>

            <li class="lunch__item">
              <p class="lunch__item-name">Falafel</p>
              <p class="lunch__item-description">Cucumber Yogurt</p>
              <p class="lunch__item-price">26</p>
            </li>

            <li class="lunch__item">
              <p class="lunch__item-name">Smoked Trout Beignets</p>
              <p class="lunch__item-description">ranch ette</p>
              <p class="lunch__item-price">18</p>
            </li>
          </ul>

          <h3 class="lunch__subtitle">Hors D'œuvres</h3>
          <ul class="lunch__list">
            <li class="lunch__item">
              <p class="lunch__item-name">Soupe de Poisson</p>
              <p class="lunch__item-description">fish soup, saffron aioli</p>
              <p class="lunch__item-price">22</p>
            </li>

            <li class="lunch__item">
              <p class="lunch__item-name">Foie Gras Terrine</p>
              <p class="lunch__item-description">red wine poached pears, shallot jam, and muscat jelly</p>
              <p class="lunch__item-price">32</p>
            </li>

            <li class="lunch__item">
              <p class="lunch__item-name">Rillettes de Canard</p>
              <p class="lunch__item-description">Rohan duck, Agen prune, Einkorn</p>
              <p class="lunch__item-price">29</p>
            </li>
              
            <li class="lunch__item">
              <p class="lunch__item-name">Crab Remoulade</p>
              <p class="lunch__item-description">celery, green apple, pickled fennel, and celery root purée</p>
              <p class="lunch__item-price">33</p>
            </li>
          </ul>
        </div>

        <div class="lunch__categories-right">
          <h3 class="lunch__subtitle">Entrées</h3>
          <ul class="lunch__list">
            <li class="lunch__item">
              <p class="lunch__item-name">Poulet Rôti</p>
              <p class="lunch__item-description">roast chicken, pommes purée</p>
              <p class="lunch__item-price">28</p>
            </li>

            <li class="lunch__item">
              <p class="lunch__item-name">Chestnut Ravioli</p>
              <p class="lunch__item-description">Lacinato kale, bacon, mushrooms, and chestnut-butter sauce</p>
              <p class="lunch__item-price">34</p>
            </li>

            <li class="lunch__item">
              <p class="lunch__item-name">Beef Stroganoff</p>
              <p class="lunch__item-description">butter noodles</p>
              <p class="lunch__item-price">37</p>
            </li>

            <li class="lunch__item">
              <p class="lunch__item-name">Duck Bolognese</p>
              <p class="lunch__item-description">Pasta Shells, Whipped Crème Fraîche</p>
              <p class="lunch__item-price">28</p>
            </li>

            <li class="lunch__item">
              <p class="lunch__item-name">Escargots</p>
              <p class="lunch__item-description">Garlic Butter, Pancetta, Croutons</p>
              <p class="lunch__item-price">26</p>
            </li>
          </ul>

          <h3 class="lunch__subtitle">Plat du Jour</h3>
          <ul class="lunch__list">
            <li class="lunch__item">
              <p class="lunch__day">Friday</p>
              <p class="lunch__item-name">Bouillabaisse</p>
              <p class="lunch__item-price">46</p>
            </li>

            <li class="lunch__item">
              <p class="lunch__day">Saturday</p>
              <p class="lunch__item-name">Prime Rib</p>
              <p class="lunch__item-price">90</p>
            </li>

            <li class="lunch__item">
              <p class="lunch__day">Sunday</p>
              <p class="lunch__item-name">Lobster Frites</p>
              <p class="lunch__item-price">57</p>
            </li>
          </ul>

          <h3 class="lunch__subtitle">Desserts</h3>
          <ul class="lunch__list">
            <li class="lunch__item">
              <p class="lunch__item-name">Coconut Gateau</p>
              <p class="lunch__item-description">Pineapple, Coconut</p>
              <p class="lunch__item-price">18</p>
            </li>

            <li class="lunch__item">
              <p class="lunch__item-name">Tarte Tatin</p>
              <p class="lunch__item-description">Caramelized Apples, Buttermilk Glacé</p>
              <p class="lunch__item-price">18</p>
            </li>

            <li class="lunch__item">
              <p class="lunch__item-name">Las Coupes Glacées</p>
              <p class="lunch__item-description">Ice Creams and Sorbets</p>
              <p class="lunch__item-price">14</p>
            </li>
          </ul>
        </div>
      </div>       
    </div>
  `;

  document.querySelector('#menu-content').innerHTML += lunchHTML;
}

export default showLunchMenu;