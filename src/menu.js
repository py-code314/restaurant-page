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

          <div class="lunch__categories-right">
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
        <h3 class="dinner__title">Dinner</h3>
        <div class="dinner__categories">
          <div class="dinner__categories-left">
            <h4 class="dinner__subtitle">Amusés</h4>
            <ul class="dinner__list lunch__amusés">
              <li class="dinner__item">
                <p class="dinner__item-name">Tarte Tatin à L'échalote</p>
                <p class="dinner__item-description">bone marrow</p>
                <p class="dinner__item-price">18</p>
              </li>

              <li class="dinner__item">
                <p class="dinner__item-name">Cod Cheek a la Diable</p>
                <p class="dinner__item-description">espelette, breadcrumbs</p>
                <p class="dinner__item-price">20</p>
              </li>

              <li class="dinner__item">
                <p class="dinner__item-name">Carottes Râpées</p>
                <p class="dinner__item-description">ginger, crispy quinoa</p>
                <p class="dinner__item-price">12</p>
              </li>

              <li class="dinner__item">
                <p class="dinner__item-name">Croquette</p>
                <p class="dinner__item-description">crispy rice with french ham, gruyère cheese, and herb aioli</p>
                <p class="dinner__item-price">12</p>
              </li>
            </ul>

            <h4 class="dinner__subtitle">Garnitures</h4>
            <ul class="dinner__list lunch__garnitures">
              <li class="dinner__item">
                <p class="dinner__item-name">Pommes Frites</p>               
                <p class="dinner__item-price">16</p>
              </li>

              <li class="dinner__item">
                <p class="dinner__item-name">Petite Salade</p>
                <p class="dinner__item-description">shallot vinaigrette</p>
                <p class="dinner__item-price">16</p>
              </li>

              <li class="dinner__item">
                <p class="dinner__item-name">Sautêed Mushrooms</p>
                <p class="dinner__item-price">14</p>
              </li>
            </ul>

            <h4 class="dinner__subtitle">Hors D'œuvres</h4>
            <ul class="dinner__list lunch__hors-d'œuvres">
              <li class="dinner__item">
                <p class="dinner__item-name">Pâté de Campagne</p>
                <p class="dinner__item-description">heritage pork, sicilian pistachios, agen prunes</p>
                <p class="dinner__item-price">31</p>
              </li>

              <li class="dinner__item">
                <p class="dinner__item-name">Frisée Aux Lardons</p>
                <p class="dinner__item-description">chicory salad, bacon shallot vinaigrette and a soft-poached egg</p>
                <p class="dinner__item-price">27</p>
              </li>

              <li class="dinner__item">
                <p class="dinner__item-name">Hiîtres et Saucisses</p>
                <p class="dinner__item-description">half dozen oysters, chipolatas</p>
                <p class="dinner__item-price">30</p>
              </li>
                
              <li class="dinner__item">
                <p class="dinner__item-name">Raviolo Bigusto</p>
                <p class="dinner__item-description">smoked ricotta, mascarpone, chantrelles</p>
                <p class="dinner__item-price">31</p>
              </li>

              <li class="dinner__item">
                <p class="dinner__item-name">Brandade de Morue</p>
                <p class="dinner__item-description">salt cod, garlic oil, soldiers</p>
                <p class="dinner__item-price">28</p>
              </li>
            </ul>
          </div>

          <div class="dinner__categories-right">
            <h4 class="dinner__subtitle">Entrées</h4>
            <ul class="dinner__list lunch__entrées">
              <li class="dinner__item">
                <p class="dinner__item-name">Cassoulet</p>
                <p class="dinner__item-description">duck confit, lamb rib, tarbais beans, saucisse de canard</p>
                <p class="dinner__item-price">54</p>
              </li>

              <li class="dinner__item">
                <p class="dinner__item-name">Onglet Au Poivre</p>
                <p class="dinner__item-description">hanger steak, sarawak peppercorn, pommes frites</p>
                <p class="dinner__item-price">58</p>
              </li>

              <li class="dinner__item">
                <p class="dinner__item-name">Atlantic Halibut</p>
                <p class="dinner__item-description">crushed potatoes, kalamata olives, fresh tomato, sweet & sour shallot, toasted almonds</p>
                <p class="dinner__item-price">47</p>
              </li>

              <li class="dinner__item">
                <p class="dinner__item-name">Black Sea Bass</p>
                <p class="dinner__item-description">farro verde, champignon de paris, pine nuts</p>
                <p class="dinner__item-price">30</p>
              </li>

              <li class="dinner__item">
                <p class="dinner__item-name">Honeynut Risotto</p>
                <p class="dinner__item-description">butternut and kabocha purêe, fried brussels sprouts, and toasted pumpkin seeds</p>
                <p class="dinner__item-price">32</p>
              </li>

              <li class="dinner__item">
                <p class="dinner__item-name">Chicken Paillard</p>
                <p class="dinner__item-description">frisêe, tomato confit, and shaved parmesan</p>
                <p class="dinner__item-price">35</p>
              </li>
            </ul>

            <h4 class="dinner__subtitle">Plat du Jour</h4>
            <ul class="dinner__list lunch__plat-du-jour">
              <li class="dinner__item">
                <p class="dinner__day">Friday</p>
                <p class="dinner__item-name">Bouillabaisse</p>
                <p class="dinner__item-price">46</p>
              </li>

              <li class="dinner__item">
                <p class="dinner__day">Saturday</p>
                <p class="dinner__item-name">Prime Rib</p>
                <p class="dinner__item-price">90</p>
              </li>

              <li class="dinner__item">
                <p class="dinner__day">Sunday</p>
                <p class="dinner__item-name">Lobster Frites</p>
                <p class="dinner__item-price">57</p>
              </li>
            </ul>

            <h4 class="dinner__subtitle">Desserts</h4>
            <ul class="dinner__list lunch__desserts">
              <li class="dinner__item">
                <p class="dinner__item-name">Grand Mariner Soufflé</p>
                <p class="dinner__item-description">vanilla crème fraîche anglaise</p>
                <p class="dinner__item-price">18</p>
              </li>

              <li class="dinner__item">
                <p class="dinner__item-name">Île Flottante</p>
                <p class="dinner__item-description">hazelnut, toasted vanilla anglaise</p>
                <p class="dinner__item-price">18</p>
              </li>

              <li class="dinner__item">
                <p class="dinner__item-name">Mille Feuille au Chocolat</p>
                <p class="dinner__item-description">guanaja cream, salted caramel</p>
                <p class="dinner__item-price">18</p>
              </li>

              <li class="dinner__item">
                <p class="dinner__item-name">Profiterole</p>
                <p class="dinner__item-description">buckwheat honey fudge</p>
                <p class="dinner__item-price">16</p>
              </li>
            </ul>
          </div>
        </div>       
      </div>
      <div class="beverages">
        <h3>Wines & Cocktails</h3>
      </div>
    </div>
    
    

  `;
  // content.appendChild(wrapper)
};

export default showMenu;
