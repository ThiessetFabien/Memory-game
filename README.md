# memory-game
memory game JS
ce code est un jeu de mémoire basé sur des images.

__Compétences techniques pratiquées__
  
- Propriété CSS Gap :
  
  J'ai appris à définir l'espace utilisé par la grille entre les lignes et les colonnes.
  Cette propriété est utilisée pour espacer les cartes du memory game.
  C'est une pratique plus ancienne que les flexbox pour l'espacement à l'intérieur d'un tableau et cela vient compléter les marges et les paddings. 

- Propriété CSS opacity :
  
  J'ai remarqué l'usage de la propriété CSS opacity à 85% qui permet tester le montage des conditions du javascript.
  C'est une meilleure pratique qui permet d'être souple sur l'ordre des actions menées durant le codage.

- le script :
  
  J'ai appris à créer un tableau 'images' qui contient les noms des images.
  
  Le tableau 'verifiedImages' double le tableau 'images' (pour avoir deux images de chaque) puis en mélange les éléments de manière aléatoire.

  Pour chaque élément de 'verifiedImages', via ma méthode d'itération map(), une nouvelle 'div' est créée avec une classe 'item' et un attribut 'data-imageId' correspondant à l'élément actuel. Une image est ajoutée à cette 'div' avec le chemin d'accès correspondant et le texte alternatif si l'image ne peut pas être rendue.

  Un gestionnaire d'évènements 'onclick' est ajouté à chaque 'div':

   - Lorsqu'elle  est cliquée elle reçoit la classe 'boxOpen;

   - Si deux 'div' sont ouvertes, une fonction est déclenchée après 500ms. Cette fonction vérifie si les deux 'div' ouvertes correspondent (si elles ont la même 'data-imageId') et si c'est le cas elles reçoivent la classe 'boxMatch' et la classe 'boxOpen' est retirée;

   - Si toutes les div ont la classe 'boxMatch' (c'est à dire que toutes les paires ont été trouvées), une alerte 'Bravo ! Tu as trouvé toutes les paires.' est affichée;

   - Si les deux div ouvertes ne correspondent pas, la classe boxOpen est simplement retirée, ce qui les "ferme" à nouveau;

   - Enfin chaque div est ajoutée à l'élement avec la classe game dans le document;

  J'ai compris comment fonctionne le script et qu'il n'est pas possible de considérer une constante image comme élémentHtml dans javascript.

- L'identification de constantes images en Javascript :
   
  En collaborant avec mon fils de 4 ans pour la création des images, j'ai appris à adapter ce script.
  J'ai compris comment intégrer une image à une constante. Pour cela, il est mieux de créer l'url à l'aide de variable, une 'id' à ces constantes et dimensionner l'image pour éviter d'alourdir inutilement le code.

J'espère que cela vous aide à comprendre comment ce code fonctionne !