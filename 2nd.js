 let title = document.getElementById("title");
let text = document.querySelector(".text");

console.log(title);
console.log(text);


let h2 = document.createElement("h2");
h2.textContent = "Created By JS";

document.body.append(h2);

h2.remove(); 


let p = document.createElement("p");

p.textContent = "This is Text";
document.body.append(p);

p.innerHTML = "<b>Bold Text</b>";


let img = document.createElement("img");

img.setAttribute("src","https://via.placeholder.com/150");
img.setAttribute("alt","image");

document.body.append(img);

let box = document.createElement("div");
box.textContent = "Box";

box.style.width = "150px";
box.style.height = "150px";
box.style.background = "orange";

document.body.append(box);



