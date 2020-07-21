const body = document.querySelector("body");
console.log(body);

/* 
<div class="card" style="width: 18rem;">
  <img src="..." class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
*/

const card = document.createElement("div");
card.classList.add("card");
card.style.width = "18rem";
console.log(card);

const image = document.createElement("img");
image.src =
  "https://www.motortrend.com/uploads/sites/5/2020/01/Lamborghini-Huracan-Evo-RWD-front-three-quarters.jpg";
image.classList.add("card-img-top");
image.alt = "Lamborghini";

console.log(image);

body.appendChild(card);
card.appendChild(image);

const cardBody = document.createElement("div");
cardBody.classList.add("card-body");

const cardTitle = document.createElement("h5");
cardTitle.classList.add("card-title");
cardTitle.textContent = "Lamborghini";

const cardParagraph = document.createElement("p");
cardParagraph.classList.add("card-text");
cardParagraph.textContent = "This is my next car.";

const link = document.createElement("a");
link.classList.add("btn", "btn-primary");
link.href = "https://www.lamborghini.com/en-en";
link.target = "_blank";
link.textContent = "Go to site";

cardBody.appendChild(cardTitle);
cardBody.appendChild(cardParagraph);
cardBody.appendChild(link);

card.appendChild(cardBody);
