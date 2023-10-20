# memory-game
memory game JS

__Compétences techniques pratiquées__
  
- Propriété CSS Gap :
  
  J'ai appris à définir l'espace utilisé par la grille entre les lignes et les colonnes.
  Cette propriété est utilisée pour espacer les cartes du memory game.
  C'est une meilleure pratique pour l'espacement à l'intérieur d'un tableau et cela vient compléter les marges et les paddings.

- Propriété CSS opacity :
  
  J'ai remarqué l'usage de la propriété CSS opacity à 85% qui permet tester le montage des conditions du javascript.
  C'est une meilleure pratique qui permet d'être souple sur l'ordre des actions menées durant le codage.

- La manipulation d'éléments Javascript :
  
  J'ai appris à mélanger les images d'un tableau.
  Pour chaque image, un élément 'div' est créé et assigné à la variable box.
  La classe CSS item est ajouté à box pour lui donner un certain style.
  L'image du tableau shuf_images mélangé précédemment est ajouté comme enfant de box.
  Un identifiant d'image est ajouté à box en utilisant data-.
  Une fonction d'écouteur d'évènement onclick est ajouté à box.
  Lorsque la boite est cliquée, la classe 'boxOpen' est ajoutée à la boîte. Un délai de 500ms.
  Si c'est le cas, elle vérifie si les deux permières boîtes ouvertes correspondent (même identifiant d'image).
  Si elles correspondent, elles sont marquées comme correspondantes et ne sont pas considérées comme ouverte.
  Si le nombre de boîtes correspondantes est égal au nombre total d'images, une alerte win est affichée.
  Si les deux premières boîtes ouvertes ne correspondents pas, elle sont simplement fermées.
  Finalement la boîte est ajoutée avec la classe 'game'.

  J'ai compris comment fonctionne le script et qu'il n'est pas possible de considérer une constante image comme élémentHtml dans le javascript.

- L'identification de constantes images en Javascript :
   
  En collaborant avec mon fils de 4 ans pour la création des images, j'ai appris à adapter le javascript.
  J'ai compris comment intégrer une image à une constante. Pour cela, il est mieux de créer une 'id' à ces constantes.


 

