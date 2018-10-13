const items = ['Apple', 'Pear', 'Banana', 'Kiwi'];
const itemLis = items.map(item => `<li>${item}</li>`;
const itemList = `<ul>${ itemLis.join('') }</ul>`;

document.body.innerHTML = `<h1>My super test app</h1>
  ${itemList}`;

console.log('done');
