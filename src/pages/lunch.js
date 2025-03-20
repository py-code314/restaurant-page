function showLunchMenu() {

  const lunchHTML = `
    <div class="lunch">
      
      <div class="lunch__categories categories">
        <div class="lunch__categories-left category-left category flex-col-end border-salmon">
          <h3 class="lunch__subtitle category-name">Amusés</h3>
          <ul class="lunch__list items-list flex-col">
            <li class="lunch__item">
              <p class="lunch__item-name item-name">Baguette Service</p>
              <p class="lunch__item-description item-description">Radish, Butter, Cervelle</p>
              <p class="lunch__item-price">18</p>
            </li>

            <li class="lunch__item">
              <p class="lunch__item-name item-name">Falafel</p>
              <p class="lunch__item-description item-description">Cucumber Yogurt</p>
              <p class="lunch__item-price">26</p>
            </li>

            <li class="lunch__item">
              <p class="lunch__item-name item-name">Smoked Trout Beignets</p>
              <p class="lunch__item-description item-description">ranch ette</p>
              <p class="lunch__item-price">18</p>
            </li>
          </ul>

          <h3 class="lunch__subtitle category-name">Hors D'œuvres</h3>
          <ul class="lunch__list items-list flex-col">
            <li class="lunch__item">
              <p class="lunch__item-name item-name">Soupe de Poisson</p>
              <p class="lunch__item-description item-description">fish soup, saffron aioli</p>
              <p class="lunch__item-price">22</p>
            </li>

            <li class="lunch__item">
              <p class="lunch__item-name item-name">Foie Gras Terrine</p>
              <p class="lunch__item-description item-description">red wine poached pears, shallot jam, and muscat jelly</p>
              <p class="lunch__item-price">32</p>
            </li>

            <li class="lunch__item">
              <p class="lunch__item-name item-name">Rillettes de Canard</p>
              <p class="lunch__item-description item-description">Rohan duck, Agen prune, Einkorn</p>
              <p class="lunch__item-price">29</p>
            </li>
              
            <li class="lunch__item">
              <p class="lunch__item-name item-name">Crab Remoulade</p>
              <p class="lunch__item-description item-description">celery, green apple, pickled fennel, and celery root purée</p>
              <p class="lunch__item-price">33</p>
            </li>
          </ul>
        </div>

        <div class="lunch__categories-right category-right category">
          <h3 class="lunch__subtitle category-name">Entrées</h3>
          <ul class="lunch__list items-list flex-col">
            <li class="lunch__item">
              <p class="lunch__item-name item-name">Poulet Rôti</p>
              <p class="lunch__item-description item-description">roast chicken, pommes purée</p>
              <p class="lunch__item-price">28</p>
            </li>

            <li class="lunch__item">
              <p class="lunch__item-name item-name">Chestnut Ravioli</p>
              <p class="lunch__item-description item-description">Lacinato kale, bacon, mushrooms, and chestnut-butter sauce</p>
              <p class="lunch__item-price">34</p>
            </li>

            <li class="lunch__item">
              <p class="lunch__item-name item-name">Beef Stroganoff</p>
              <p class="lunch__item-description item-description">butter noodles</p>
              <p class="lunch__item-price">37</p>
            </li>

            <li class="lunch__item">
              <p class="lunch__item-name item-name">Duck Bolognese</p>
              <p class="lunch__item-description item-description">Pasta Shells, Whipped Crème Fraîche</p>
              <p class="lunch__item-price">28</p>
            </li>

            <li class="lunch__item">
              <p class="lunch__item-name item-name">Escargots</p>
              <p class="lunch__item-description item-description">Garlic Butter, Pancetta, Croutons</p>
              <p class="lunch__item-price">26</p>
            </li>
          </ul>

          <h3 class="lunch__subtitle category-name">Plat du Jour</h3>
          <ul class="lunch__list items-list flex-col">
            <li class="lunch__item">
              <p class="lunch__day days">Friday</p>
              <p class="lunch__item-name item-name">Bouillabaisse</p>
              <p class="lunch__item-price">46</p>
            </li>

            <li class="lunch__item">
              <p class="lunch__day days">Saturday</p>
              <p class="lunch__item-name item-name">Prime Rib</p>
              <p class="lunch__item-price">90</p>
            </li>

            <li class="lunch__item">
              <p class="lunch__day days">Sunday</p>
              <p class="lunch__item-name item-name">Lobster Frites</p>
              <p class="lunch__item-price">57</p>
            </li>
          </ul>

          <h3 class="lunch__subtitle category-name">Desserts</h3>
          <ul class="lunch__list items-list flex-col">
            <li class="lunch__item">
              <p class="lunch__item-name item-name">Coconut Gateau</p>
              <p class="lunch__item-description item-description">Pineapple, Coconut</p>
              <p class="lunch__item-price">18</p>
            </li>

            <li class="lunch__item">
              <p class="lunch__item-name item-name">Tarte Tatin</p>
              <p class="lunch__item-description item-description">Caramelized Apples, Buttermilk Glacé</p>
              <p class="lunch__item-price">18</p>
            </li>

            <li class="lunch__item">
              <p class="lunch__item-name item-name">Las Coupes Glacées</p>
              <p class="lunch__item-description item-description">Ice Creams and Sorbets</p>
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