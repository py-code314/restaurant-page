function showDinnerMenu() {
  document.querySelector('#menu-content').innerHTML = '';

  const dinnerHTML = `
    <div class="dinner">
     
      <div class="dinner__categories categories">
        <div class="dinner__categories-left category-left category flex-col-end border-green">
          <h3 class="dinner__subtitle category-name">Amusés</h3>
          <ul class="dinner__list items-list flex-col">
            <li class="dinner__item">
              <p class="dinner__item-name item-name">Tarte Tatin à L'échalote</p>
              <p class="dinner__item-description item-description">bone marrow</p>
              <p class="dinner__item-price">18</p>
            </li>

            <li class="dinner__item">
              <p class="dinner__item-name item-name">Cod Cheek a la Diable</p>
              <p class="dinner__item-description item-description">espelette, breadcrumbs</p>
              <p class="dinner__item-price">20</p>
            </li>

            <li class="dinner__item">
              <p class="dinner__item-name item-name">Carottes Râpées</p>
              <p class="dinner__item-description item-description">Ginger, Crispy Quinoa</p>
              <p class="dinner__item-price">12</p>
            </li>

            <li class="dinner__item">
              <p class="dinner__item-name item-name">Croquette</p>
              <p class="dinner__item-description item-description">crispy rice with French ham, Gruyère cheese, and herb aioli</p>
              <p class="dinner__item-price">12</p>
            </li>
          </ul>

          <h3 class="dinner__subtitle category-name">Garnitures</h3>
          <ul class="dinner__list items-list flex-col">
            <li class="dinner__item">
              <p class="dinner__item-name item-name">Pommes Frites</p>               
              <p class="dinner__item-price">16</p>
            </li>

            <li class="dinner__item">
              <p class="dinner__item-name item-name">Petite Salade</p>
              <p class="dinner__item-description item-description">shallot vinaigrette</p>
              <p class="dinner__item-price">16</p>
            </li>

            <li class="dinner__item">
              <p class="dinner__item-name item-name">Sautêed Mushrooms</p>
              <p class="dinner__item-price">14</p>
            </li>
          </ul>

          <h3 class="dinner__subtitle category-name">Hors D'œuvres</h3>
          <ul class="dinner__list items-list flex-col">
            <li class="dinner__item">
              <p class="dinner__item-name item-name">Pâté de Campagne</p>
              <p class="dinner__item-description item-description">Heritage pork, Sicilian pistachios, Agen prunes</p>
              <p class="dinner__item-price">31</p>
            </li>

            <li class="dinner__item">
              <p class="dinner__item-name item-name">Frisée aux Lardons</p>
              <p class="dinner__item-description item-description">chicory salad, bacon shallot vinaigrette and a soft-poached egg</p>
              <p class="dinner__item-price">27</p>
            </li>

            <li class="dinner__item">
              <p class="dinner__item-name item-name">Hiîtres et Saucisses</p>
              <p class="dinner__item-description item-description">half dozen oysters, chipolatas</p>
              <p class="dinner__item-price">30</p>
            </li>
              
            <li class="dinner__item">
              <p class="dinner__item-name item-name">Raviolo Bigusto</p>
              <p class="dinner__item-description item-description">smoked ricotta, mascarpone, chantrelles</p>
              <p class="dinner__item-price">31</p>
            </li>

            <li class="dinner__item">
              <p class="dinner__item-name item-name">Brandade de Morue</p>
              <p class="dinner__item-description item-description">salt cod, garlic oil, soldiers</p>
              <p class="dinner__item-price">28</p>
            </li>
          </ul>
        </div>

        <div class="dinner__categories-right category-right category">
          <h3 class="dinner__subtitle category-name">Entrées</h3>
          <ul class="dinner__list items-list flex-col">
            <li class="dinner__item">
              <p class="dinner__item-name item-name">Cassoulet</p>
              <p class="dinner__item-description item-description">duck confit, lamb rib, Tarbais beans, saucisse de canard</p>
              <p class="dinner__item-price">54</p>
            </li>

            <li class="dinner__item">
              <p class="dinner__item-name item-name">Onglet Au Poivre</p>
              <p class="dinner__item-description item-description">hanger steak, Sarawak peppercorn, pommes frites</p>
              <p class="dinner__item-price">58</p>
            </li>

            <li class="dinner__item">
              <p class="dinner__item-name item-name">Atlantic Halibut</p>
              <p class="dinner__item-description item-description">crushed potatoes, kalamata olives, fresh tomato, sweet & sour shallot, toasted almonds</p>
              <p class="dinner__item-price">47</p>
            </li>

            <li class="dinner__item">
              <p class="dinner__item-name item-name">Black Sea Bass</p>
              <p class="dinner__item-description item-description">farro verde, champignon de Paris, toutes les herbes</p>
              <p class="dinner__item-price">30</p>
            </li>

            <li class="dinner__item">
              <p class="dinner__item-name item-name">Honeynut Risotto</p>
              <p class="dinner__item-description item-description">butternut and Kabocha purée, fried brussels sprouts, and toasted pumpkin seeds</p>
              <p class="dinner__item-price">32</p>
            </li>

            <li class="dinner__item">
              <p class="dinner__item-name item-name">Chicken Paillard</p>
              <p class="dinner__item-description item-description">frisée, tomato confit, and shaved Parmesan</p>
              <p class="dinner__item-price">35</p>
            </li>
          </ul>

          <h3 class="dinner__subtitle category-name">Plat du Jour</h3>
          <ul class="dinner__list items-list flex-col">
            <li class="dinner__item">
              <p class="dinner__day days">Friday</p>
              <p class="dinner__item-name item-name">Bouillabaisse</p>
              <p class="dinner__item-price">46</p>
            </li>

            <li class="dinner__item">
              <p class="dinner__day days">Saturday</p>
              <p class="dinner__item-name item-name">Prime Rib</p>
              <p class="dinner__item-price">90</p>
            </li>

            <li class="dinner__item">
              <p class="dinner__day days">Sunday</p>
              <p class="dinner__item-name item-name">Lobster Frites</p>
              <p class="dinner__item-price">57</p>
            </li>
          </ul>

          <h3 class="dinner__subtitle category-name">Desserts</h3>
          <ul class="dinner__list items-list flex-col">
            <li class="dinner__item">
              <p class="dinner__item-name item-name">Grand Mariner Soufflé</p>
              <p class="dinner__item-description item-description">Vanilla Crème Fraîche Anglaise</p>
              <p class="dinner__item-price">18</p>
            </li>

            <li class="dinner__item">
              <p class="dinner__item-name item-name">Île Flottante</p>
              <p class="dinner__item-description item-description">Hazelnut, toasted vanilla anglaise</p>
              <p class="dinner__item-price">18</p>
            </li>

            <li class="dinner__item">
              <p class="dinner__item-name item-name">Mille Feuille au Chocolat</p>
              <p class="dinner__item-description item-description">Guanaja cream, salted caramel</p>
              <p class="dinner__item-price">18</p>
            </li>

            <li class="dinner__item">
              <p class="dinner__item-name item-name">Profiterole</p>
              <p class="dinner__item-description item-description">Buckwheat Honey Fudge</p>
              <p class="dinner__item-price">16</p>
            </li>
          </ul>
        </div>
      </div>       
    </div>
  `;

  document.querySelector('#menu-content').innerHTML += dinnerHTML;
}

export default showDinnerMenu;