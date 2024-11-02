// Scrieți un script care:
// 1. Va număra și afișa în consolă numărul total de categorii din ul#categories, adică elementele li.item.

const categories = document.querySelectorAll ("#categories .item");

console.log ("Number of categories:" ,categories.length)

// 2.Pentru fiecare element li.item din lista ul#categories, va găsi și afișa în consolă titlul elementului (tag-ul <h2>) și numărul de elemente din acea categorie (toate elementele <li>).


categories.forEach((category) => {
      const title = category.querySelector("h2").textContent;

      const items = category.querySelectorAll ("ul li");

      console.log("Category:", title);
      console.log("Elements:", items.length)
}
)
