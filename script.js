"use strict";

console.log(window);
console.log(document);

const listItems = document.querySelectorAll("li");
console.log(listItems);
const links = document.links.item(0);
// links[0].innerHTML = "<p>link</p>";
console.log(links);
console.log(document.scripts[1]);

const lists = document.querySelector("ul").children;
console.log(lists[0].getAttribute("class"));

console.log(lists.item(0).childNodes[0].data.trim());
