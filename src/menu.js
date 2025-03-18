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
            <ul class="lunch__list">
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
            <h4 class="lunch__subtitle">Entrées</h4>
            <ul class="lunch__list">
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

            <h4 class="lunch__subtitle">Desserts</h4>
            <ul class="lunch__list">
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
            <ul class="dinner__list">
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
            <ul class="dinner__list">
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
            <ul class="dinner__list">
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
            <ul class="dinner__list">
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
            <ul class="dinner__list">
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
            <ul class="dinner__list">
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

      <div class="drinks">
        <h3 class="drinks__title">Drinks</h3>
        <div class="drinks__categories">
          <div class="drinks__categories-left">
            <h4 class="drinks__subtitle">Pétillants</h4>
            <ul class="drinks__list">
              <li class="drinks__item">
                <p class="drinks__item-name">Mario</p>
                <p class="drinks__item-description">keltis, Mario Roze, lower Styria, Slovenia</p>
                <p class="drinks__item-price">19</p>
              </li>

              <li class="drinks__item">
                <p class="drinks__item-name">Fred Cossard</p>
                <p class="drinks__item-description">la Chassonade, V.D.F.</p>
                <p class="drinks__item-price">19</p>
              </li>
            </ul>

            <h4 class="drinks__subtitle">Blancs</h4>
            <ul class="drinks__list">
              <li class="drinks__item">
                <p class="drinks__item-name">Laurent Saillard</p>
                <p class="drinks__item-description">Loir & Cher, V.D.F. 2023 MAG</p>            
                <p class="drinks__item-price">20</p>
              </li>

              <li class="drinks__item">
                <p class="drinks__item-name">Hervé Villemade</p>
                <p class="drinks__item-description">La Bodice, Chererny 2022</p>
                <p class="drinks__item-price">22</p>
              </li>

              <li class="drinks__item">
                <p class="drinks__item-name">Bordeaux Blanc</p>
                <p class="drinks__item-description">La Freynelle 2023</p>
                <p class="drinks__item-price">19</p>
              </li>
            </ul>

            <h4 class="drinks__subtitle">Rosés</h4>
            <ul class="drinks__list">
              <li class="drinks__item">
                <p class="drinks__item-name">Antonio Margues de Cruz</p>
                <p class="drinks__item-description">Vinho Rosado, Lisboa 2023</p>
                <p class="drinks__item-price">17</p>
              </li>

              <li class="drinks__item">
                <p class="drinks__item-name">Domaine Balansa</p>
                <p class="drinks__item-description">Pech de Rozies, Corbières V.D.F. 2023</p>
                <p class="dirinks__item-price">18</p>
              </li>

              <li class="drinks__item">
                <p class="drinks__item-name">Côtes de Provence</p>
                <p class="drinks__item-description">"Le Coeur" Garnaude 2023</p>
                <p class="drinks__item-price">22</p>
              </li>

            <h4 class="drinks__subtitle">Rogues</h4>
            <ul class="drinks__list">
              <li class="drinks__item">
                <p class="drinks__item-name">Nadine et Gérard Marula</p>
                <p class="drinks__item-description">Baconelle, V.D.F. 2022</p>
                <p class="drinks__item-price">22</p>
              </li>

              <li class="drinks__item">
                <p class="drinks__item-name">Bourgogne</p>
                <p class="drinks__item-description">Pinot Noir A Montessuy 2023</p>
                <p class="dirinks__item-price">22</p>
              </li>

              <li class="drinks__item">
                <p class="drinks__item-name">St Emillion</p>
                <p class="drinks__item-description">Château Clos Castelot 2020</p>
                <p class="drinks__item-price">22</p>
              </li>
            </ul>
          </div>

          <div class="drinks__categories-right">
            <h4 class="drinks__subtitle">Bières</h4>
            <ul class="drinks__list">
              <li class="drinks__item">
                <p class="drinks__item-name">Brasserie de la Pigeonnelle</p>
                <p class="drinks__item-description">Loirette Farmhouse Ale</p>
                <p class="drinks__item-price">16</p>
              </li>

              <li class="drinks__item">
                <p class="drinks__item-name">Cantillon</p>
                <p class="drinks__item-description">Grand Cru Bruocsella, Brussels, Belgium 750ml</p>
                <p class="drinks__item-price">120</p>
              </li>

              <li class="drinks__item">
                <p class="drinks__item-name">Brasserie des Voirons</p>
                <p class="drinks__item-description">St. Sophie/Lassaigne, Haute-Savoie 750ml</p>
                <p class="drinks__item-price">60</p>
              </li>

              <li class="drinks__item">
                <p class="drinks__item-name">Threes Brewing</p>
                <p class="drinks__item-description">Bad Wallpaper I.P.A. 16oz</p>
                <p class="drinks__item-price">14</p>
              </li>

              <li class="drinks__item">
                <p class="drinks__item-name">Greenport</p>
                <p class="drinks__item-description">Back Duck Porter 16oz</p>
                <p class="drinks__item-price">14</p>
              </li>
            </ul>

            <h4 class="drinks__subtitle">Champagne</h4>
            <ul class="drinks__list">
              <li class="drinks__item">
                <p class="drinks__item-name">Émilien Feneuil</p>
                <p class="drinks__item-description">Cuvée Totum, Blanc de Blancs, 1er Cru à Sermiers 2018 MAG</p>
                <p class="drinks__item-price">750</p>
              </li>

              <li class="drinks__item">
                <p class="drinks__item-name">Veuve Clicquot</p>
                <p class="drinks__item-description">“La Grand Dame” Brut Rosé 2009 (3 litre)</p>
                <p class="drinks__item-price">3000</p>
              </li>

              <li class="drinks__item">
                <p class="drinks__item-name">La Famille Puzelat - Le Clos du Tue-Bœuf</p>
                <p class="drinks__item-description">Frileuse, Cheverny 2022 MAG</p>
                <p class="drinks__item-price">240</p>
              </li>

              <li class="drinks__item">
                <p class="drinks__item-name">Marie et Vincent Tricot</p>
                <p class="drinks__item-description">White Light, Vin de France 2022</p>
                <p class="drinks__item-price">90</p>
              </li>

              <li class="drinks__item">
                <p class="drinks__item-name">Fréd Cossard</p>
                <p class="drinks__item-description">Les Folatières, Puligny-Montrachet 1er Cru 2020</p>
                <p class="drinks__item-price">725</p>
              </li>

              <li class="drinks__item">
                <p class="drinks__item-name">René-Jean Dard et François Ribo</p>
                <p class="drinks__item-description">Crozes-Hermitage Blanc, 2021 MAG</p>
                <p class="drinks__item-price">320</p>
              </li>             
            </ul>

            <h4 class="drinks__subtitle">Cocktails</h4>
            <ul class="drinks__list">
              <li class="drinks__item">
                <p class="drinks__item-name">Archdruid</p>
                <p class="drinks__item-description">rye, Poli Miele, Cap Corse, Campari, allspice</p>
                <p class="drinks__item-price">22</p>
              </li>

              <li class="drinks__item">
                <p class="drinks__item-name">Bijou Blanc</p>
                <p class="drinks__item-description">navy strength gin, gentian, green chartreuse, white vermouth</p>
                <p class="drinks__item-price">22</p>
              </li>

              <li class="drinks__item">
                <p class="drinks__item-name">Connexion Manquée</p>
                <p class="drinks__item-description">Tanqueray Gin, Ten to One Rum, Allspice Dram, Orgeat, Lemon</p>
                <p class="drinks__item-price">23</p>
              </li>

              <li class="drinks__item">
                <p class="drinks__item-name">Martini Sale</p>
                <p class="drinks__item-description">Bombay Sapphire Gin or Breckenridge Vodka, Olive-washed Carpano Dry Vermouth</p>
                <p class="drinks__item-price">23</p>
              </li>
            </ul>
          </div>
        </div>       
      </div>
    </div>
    
    

  `;
  // content.appendChild(wrapper)
};

export default showMenu;
