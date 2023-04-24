const lishkaEl = document.querySelectorAll(".item");
console.log('Number of categories:',lishkaEl.length);

const headerEl = lishkaEl.forEach(item => { 
   console.log("Category:" + item.firstElementChild.textContent);
   console.log('Elements:' + item.lastElementChild.children.length);
});
