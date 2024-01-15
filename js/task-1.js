'use strict';

const allCategories = document.querySelectorAll('.item');
console.log(`Number of Categories: ${allCategories.length}`);

//const category = document.querySelector('.item');


allCategories.forEach((category) => {
  console.log(`Category: ${category.firstElementChild.textContent}`);
  console.log(`Elements: ${category.querySelectorAll('li').length}`);
});



// const itemsInCategory = category.lastElementChild;
// console.log(`Category: ${category.firstElementChild.textContent}`);
// console.log(category.firstElementChild.textContent);
// console.log(`Elements: ${itemsInCategory.children.length}`);

// const categorySecond = category.nextElementSibling;
// const itemsInCategory2 = categorySecond.lastElementChild;
// console.log(categorySecond.firstElementChild.textContent);
// console.log(`Elements: ${itemsInCategory2.children.length}`);

// const categoryThird = categorySecond.nextElementSibling;
// const itemsInCategory3 = categoryThird.lastElementChild;
// console.log(categoryThird.firstElementChild.textContent);
// console.log(`Elements: ${itemsInCategory3.children.length}`);



