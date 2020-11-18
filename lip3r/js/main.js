function priceUpdate(value = 0) {
  var totalPrice = payment.price + value + payment.shipmentPrice;
  var totalInstallments =
    totalPrice * (payment.discount + 1) * Math.pow(1 + payment.interestRate, 3);

  cash = document.querySelector(".cash div");
  cash.innerHTML = "";

  cashPayment = document.createElement("h1");
  cashPayment.appendChild(document.createTextNode(totalPrice.toFixed(0)));
  cash.appendChild(cashPayment);

  cash.insertAdjacentHTML("beforeend", "<p>com desconto no boleto ou transferência</p>");
  cash.insertAdjacentHTML(
    "beforeend",
    "<p>50% para iniciar o projeto e 50% na entrega.</p><br /><br />"
  );
  cash.insertAdjacentHTML(
    "beforeend",
    "<p><strong>1x</strong> de <strong>" +
      (totalPrice * (payment.discount + 1)).toFixed(2) +
      "</strong> no cartão ou</p>"
  );
  cash.insertAdjacentHTML(
    "beforeend",
    "<p>em até <strong>" +
      payment.maxInstallments +
      "x</strong> de <strong>" +
      (totalInstallments / payment.maxInstallments).toFixed(2) +
      "</strong> (com juros)</p>"
  );

  cash.insertAdjacentHTML(
    "afterbegin",
    "<p>Custo do frete <strong>" +
    payment.shipmentPrice.toFixed(0) +
    "</strong></p>"
  );

  cash.insertAdjacentHTML(
    "beforeend",
    "<br /><p>Estimativa de entrega <strong>" +
    geral.productionTime
+    "</strong> dias úteis</p>"
  );
}

function makeMaterialList(array) {
  for (var i = 0; i < array.length; i++) {
    // Create the list item:
    var item = document.createElement("div");
    item.className = "carousel-cell";

    var div = document.createElement("div");

    var priceValue = array[i].price*material.multiplier + material.laborCost;
    
    if (array[i].price == 0) priceValue = array[i].price

    //create element img and apped to li
    var img = document.createElement("img");
    img.src = "../images/veneer/" + array[i].image;
    img.setAttribute("onclick", "priceUpdate(" + priceValue + ")");
    item.appendChild(img);

    

    var input = document.createElement("input");
    input.setAttribute("type", "radio");
    input.setAttribute("name", "material");
    input.setAttribute("value", priceValue);
    input.setAttribute("onclick", "priceUpdate(" + priceValue + ")");
    if (i == 0) input.setAttribute("checked", "checked");
    div.appendChild(input);

    var name = document.createElement("h2");
    name.appendChild(document.createTextNode(array[i].name));
    div.appendChild(name);

    var price = document.createElement("p");
    price.classList.add("itenPrice");
    price.appendChild(document.createTextNode("+" + priceValue.toFixed(0)));
    div.appendChild(price);

    item.appendChild(div);

    var baseMaterial = document.createElement("p");
    baseMaterial.appendChild(document.createTextNode(array[i].baseMaterial));
    item.appendChild(baseMaterial);

    // Add it to the list:

    document.querySelector(".carousel").appendChild(item);
  }
}

function makeDescription() {
  document
    .querySelector(".descricao model-viewer")
    .setAttribute("src", "3dmodels/" + geral.file3d);

  document
    .querySelector(".descricao span h1")
    .appendChild(document.createTextNode(geral.furniture.title));
  document
    .querySelector(".descricao span p")
    .appendChild(document.createTextNode(geral.furniture.description));
  document
    .querySelector(".descricao span ul>li strong")
    .appendChild(
      document.createTextNode(geral.furniture.length.toFixed(2) + " cm")
    );
  document
    .querySelectorAll(".descricao span ul>li strong")[1]
    .appendChild(
      document.createTextNode(geral.furniture.height.toFixed(2) + " cm")
    );
  document
    .querySelectorAll(".descricao span ul>li strong")[2]
    .appendChild(
      document.createTextNode(geral.furniture.depth.toFixed(2) + " cm")
    );
}

function makeTitulo() {
  document
    .querySelector(".titulo h1")
    .appendChild(document.createTextNode(geral.clientName));
}

priceUpdate();
makeTitulo();
makeDescription();
makeMaterialList(material.options);

// render get

for (var i = 0; i <  geral.renderImg.length; i++) {

    var img = document.createElement("img")
    img.src = "../images/" + geral.renderImg[i]
    document.querySelector(".render").appendChild(img)

}

// color get
let rule = Array.from(document.styleSheets[0].rules).find(
  (x) => x.selectorText === ":root"
);
rule.style.setProperty("--color-main-theme", geral.mainColor);

var flkty = new Flickity(".carousel", {
  freeScroll: true,
  adaptiveHeight: true,
  prevNextButtons: true,
  pageDots: false,
});
