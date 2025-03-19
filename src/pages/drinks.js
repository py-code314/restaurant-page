function showDrinksMenu() {
  document.querySelector('#menu-content').innerHTML = '';

  const drinksHTML = `
    <div class="drinks">
      
      <div class="drinks__categories categories">
        <div class="drinks__categories-left categories-left">
          <h3 class="drinks__subtitle category-name">Pétillants</h3>
          <ul class="drinks__list items-list">
            <li class="drinks__item">
              <p class="drinks__item-name item-name">Mario</p>
              <p class="drinks__item-description item-description">keltis, Mario Roze, lower Styria, Slovenia</p>
              <p class="drinks__item-price">19</p>
            </li>

            <li class="drinks__item">
              <p class="drinks__item-name item-name">Fred Cossard</p>
              <p class="drinks__item-description item-description">la Chassonade, V.D.F.</p>
              <p class="drinks__item-price">19</p>
            </li>
          </ul>

          <h3 class="drinks__subtitle category-name">Blancs</h3>
          <ul class="drinks__list items-list">
            <li class="drinks__item">
              <p class="drinks__item-name item-name">Laurent Saillard</p>
              <p class="drinks__item-description item-description">Loir & Cher, V.D.F. 2023 MAG</p>            
              <p class="drinks__item-price">20</p>
            </li>

            <li class="drinks__item">
              <p class="drinks__item-name item-name">Hervé Villemade</p>
              <p class="drinks__item-description item-description">La Bodice, Chererny 2022</p>
              <p class="drinks__item-price">22</p>
            </li>

            <li class="drinks__item">
              <p class="drinks__item-name item-name">Bordeaux Blanc</p>
              <p class="drinks__item-description item-description">La Freynelle 2023</p>
              <p class="drinks__item-price">19</p>
            </li>
          </ul>

          <h3 class="drinks__subtitle category-name">Rosés</h3>
          <ul class="drinks__list items-list">
            <li class="drinks__item">
              <p class="drinks__item-name item-name">Antonio Margues de Cruz</p>
              <p class="drinks__item-description item-description">Vinho Rosado, Lisboa 2023</p>
              <p class="drinks__item-price">17</p>
            </li>

            <li class="drinks__item">
              <p class="drinks__item-name item-name">Domaine Balansa</p>
              <p class="drinks__item-description item-description">Pech de Rozies, Corbières V.D.F. 2023</p>
              <p class="dirinks__item-price">18</p>
            </li>

            <li class="drinks__item">
              <p class="drinks__item-name item-name">Côtes de Provence</p>
              <p class="drinks__item-description item-description">"Le Coeur" Garnaude 2023</p>
              <p class="drinks__item-price">22</p>
            </li>
          </ul>

          <h3 class="drinks__subtitle category-name">Rogues</h3>
          <ul class="drinks__list items-list">
            <li class="drinks__item">
              <p class="drinks__item-name item-name">Nadine et Gérard Marula</p>
              <p class="drinks__item-description item-description">Baconelle, V.D.F. 2022</p>
              <p class="drinks__item-price">22</p>
            </li>

            <li class="drinks__item">
              <p class="drinks__item-name item-name">Bourgogne</p>
              <p class="drinks__item-description item-description">Pinot Noir A Montessuy 2023</p>
              <p class="dirinks__item-price">22</p>
            </li>

            <li class="drinks__item">
              <p class="drinks__item-name item-name">St Emillion</p>
              <p class="drinks__item-description item-description">Château Clos Castelot 2020</p>
              <p class="drinks__item-price">22</p>
            </li>
          </ul>
        </div>

        <div class="drinks__categories-right categories-right">
          <h3 class="drinks__subtitle category-name">Bières</h3>
          <ul class="drinks__list items-list">
            <li class="drinks__item">
              <p class="drinks__item-name item-name">Brasserie de la Pigeonnelle</p>
              <p class="drinks__item-description item-description">Loirette Farmhouse Ale</p>
              <p class="drinks__item-price">16</p>
            </li>

            <li class="drinks__item">
              <p class="drinks__item-name item-name">Cantillon</p>
              <p class="drinks__item-description">Grand Cru Bruocsella, Brussels, Belgium 750ml</p>
              <p class="drinks__item-price">120</p>
            </li>

            <li class="drinks__item">
              <p class="drinks__item-name item-name">Brasserie des Voirons</p>
              <p class="drinks__item-description item-description">St. Sophie/Lassaigne, Haute-Savoie 750ml</p>
              <p class="drinks__item-price">60</p>
            </li>

            <li class="drinks__item">
              <p class="drinks__item-name item-name">Threes Brewing</p>
              <p class="drinks__item-description item-description">Bad Wallpaper I.P.A. 16oz</p>
              <p class="drinks__item-price">14</p>
            </li>

            <li class="drinks__item">
              <p class="drinks__item-name item-name">Greenport</p>
              <p class="drinks__item-description item-description">Back Duck Porter 16oz</p>
              <p class="drinks__item-price">14</p>
            </li>
          </ul>

          <h3 class="drinks__subtitle category-name">Champagne</h3>
          <ul class="drinks__list items-list">
            <li class="drinks__item">
              <p class="drinks__item-name item-name">Émilien Feneuil</p>
              <p class="drinks__item-description item-description">Cuvée Totum, Blanc de Blancs, 1er Cru à Sermiers 2018 MAG</p>
              <p class="drinks__item-price">750</p>
            </li>

            <li class="drinks__item">
              <p class="drinks__item-name item-name">Veuve Clicquot</p>
              <p class="drinks__item-description item-description">“La Grand Dame” Brut Rosé 2009 (3 litre)</p>
              <p class="drinks__item-price">3000</p>
            </li>

            <li class="drinks__item">
              <p class="drinks__item-name item-name">La Famille Puzelat - Le Clos du Tue-Bœuf</p>
              <p class="drinks__item-description item-description">Frileuse, Cheverny 2022 MAG</p>
              <p class="drinks__item-price">240</p>
            </li>

            <li class="drinks__item">
              <p class="drinks__item-name item-name">Marie et Vincent Tricot</p>
              <p class="drinks__item-description item-description">White Light, Vin de France 2022</p>
              <p class="drinks__item-price">90</p>
            </li>

            <li class="drinks__item">
              <p class="drinks__item-name item-name">Fréd Cossard</p>
              <p class="drinks__item-description item-description">Les Folatières, Puligny-Montrachet 1er Cru 2020</p>
              <p class="drinks__item-price">725</p>
            </li>

            <li class="drinks__item">
              <p class="drinks__item-name item-name">René-Jean Dard et François Ribo</p>
              <p class="drinks__item-description item-description">Crozes-Hermitage Blanc, 2021 MAG</p>
              <p class="drinks__item-price">320</p>
            </li>             
          </ul>

          <h3 class="drinks__subtitle category-name">Cocktails</h3>
          <ul class="drinks__list items-list">
            <li class="drinks__item">
              <p class="drinks__item-name item-name">Archdruid</p>
              <p class="drinks__item-description item-description">rye, Poli Miele, Cap Corse, Campari, allspice</p>
              <p class="drinks__item-price">22</p>
            </li>

            <li class="drinks__item">
              <p class="drinks__item-name item-name">Bijou Blanc</p>
              <p class="drinks__item-description item-description">navy strength gin, gentian, green chartreuse, white vermouth</p>
              <p class="drinks__item-price">22</p>
            </li>

            <li class="drinks__item">
              <p class="drinks__item-name item-name">Connexion Manquée</p>
              <p class="drinks__item-description item-description">Tanqueray Gin, Ten to One Rum, Allspice Dram, Orgeat, Lemon</p>
              <p class="drinks__item-price">23</p>
            </li>

            <li class="drinks__item">
              <p class="drinks__item-name item-name">Martini Sale</p>
              <p class="drinks__item-description item-description">Bombay Sapphire Gin or Breckenridge Vodka, Olive-washed Carpano Dry Vermouth</p>
              <p class="drinks__item-price">23</p>
            </li>
          </ul>
        </div>
      </div>       
    </div>
  `;

  document.querySelector('#menu-content').innerHTML += drinksHTML;
}

export default showDrinksMenu;