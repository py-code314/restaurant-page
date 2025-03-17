const content = document.querySelector('#content');

console.log(`menu section is working`);

const showMenu = () => {
  // const wrapper = document.createElement('div');
  // wrapper.role = 'tabpanel';
  // wrapper.setAttribute('aria-labelledby', 'menu');
  // wrapper.hidden = true

  content.innerHTML += `
    <div class="tabpanel menu" role="tabpanel"           aria-labelledby="menu">
      <h2 class="menu__title">Menu</h2>
      <div class="lunch">
        <h3 class="lunch__title">Lunch</h3>

        <div class="lunch__categories">

          <div class="lunch__categories-left">

            <h4 class="lunch__subtitle">Amusés</h4>
            <ul class="lunch__list lunch__amusés">
              <li class="lunch__item">
                <p class="lunch__item-name">Baguette Service</p>
                <p class="lunch__item-description">radish, butter, cervelle</p>
                <p class="lunch__item-price">18</p>
              </li>
              <li class="lunch__item">
                <p class="lunch__item-name">Falafel</p>
                <p class="lunch__item-description">cucumber yogurt</p>
                <p class="lunch__item-price">26</p>
              </li>
              <li class="lunch__item">
                <p class="lunch__item-name">Smoked Trout Beignets</p>
                <p class="lunch__item-description">ranch ette</p>
                <p class="lunch__item-price">18</p>
              </li>
            </ul>

            <h4 class="lunch__subtitle">Hors D'œuvres</h4>
            <ul class="lunch__list lunch__hors-d'œuvres">
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

          <div class="lunch__categories-right>

            <h4 class="lunch__subtitle">Entrées</h4>
            <ul class="lunch__list lunch__entrées">
              <li class="lunch__item">
                <p class="lunch__item-name">Poulet Rôti</p>
                <p class="lunch__item-description">roast chicken, pommes purée</p>
                <p class="lunch__item-price">28</p>
              </li>
              <li class="lunch__item">
                <p class="lunch__item-name">Chestnut Ravioli</p>
                <p class="lunch__item-description">lacinato kale, bacon, mushrooms, and chestnut-butter sauce</p>
                <p class="lunch__item-price">34</p>
              </li>
              <li class="lunch__item">
                <p class="lunch__item-name">Beef Stroganoff</p>
                <p class="lunch__item-description">butter noodles</p>
                <p class="lunch__item-price">37</p>
              </li>
              <li class="lunch__item">
                <p class="lunch__item-name">Duck Bolognese</p>
                <p class="lunch__item-description">pasta shells, whipped créme fraîche</p>
                <p class="lunch__item-price">28</p>
              </li>
              <li class="lunch__item">
                <p class="lunch__item-name">Escargots</p>
                <p class="lunch__item-description">garlic butter, pancetta, croutons</p>
                <p class="lunch__item-price">26</p>
              </li>
              
            </ul>

            <h4 class="lunch__subtitle">Plat du Jour</h4>
            <ul class="lunch__list lunch__plat-du-jour">
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

          

            <h4 class="lunch__subtitle">Desserts</h4>
            <ul class="lunch__list lunch__desserts">
              <li class="lunch__item">
                <p class="lunch__item-name">Coconut Gateau</p>
                <p class="lunch__item-description">pineapple, coconut</p>
                <p class="lunch__item-price">18</p>
              </li>
              <li class="lunch__item">
                <p class="lunch__item-name">Tarte Tatin</p>
                <p class="lunch__item-description">caramelized apples, buttermilk glacé</p>
                <p class="lunch__item-price">18</p>
              </li>
              <li class="lunch__item">
                <p class="lunch__item-name">Las Coupes Glacées</p>
                <p class="lunch__item-description">ice creams and sorbets</p>
                <p class="lunch__item-price">14</p>
              </li>
            </ul>

          </div>

        </div>

        
      </div>
      <div class="dinner">
        <h3>Dinner</h3>
      </div>
      <div class="beverages">
        <h3>Wines & Cocktails</h3>
      </div>
    </div>
    
    

  `;
  // content.appendChild(wrapper)
}

export default showMenu