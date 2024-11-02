const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

// Scrieți un script care pentru fiecare element al matricei ingredients:

// 1. Va crea un element <li> separat. Asigurați-vă că folosiți metoda document.createElement().
// 2. Adăugați numele ingredientului ca conținut text.
// 3.Adăugați clasa item la element.

const ingredientsList = document.getElementById("ingredients");

const items = ingredients.map((ingredient) => {
  const li = document.createElement ("li");
  li.textContent = ingredient;
  li.classList.add("item");
  return li;
})

// 4. Apoi va insera toate elementele <li> dintr-o singură operație în lista ul#ingredients.

ingredientsList.append(...items);