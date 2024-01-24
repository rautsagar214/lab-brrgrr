
var wholeWheatBun = 10;


var ingredients = {
  Patty: 80,
  Cheese: 10,
  Tomatoes: 20,
  Onions: 20,
  Lettuce: 20
};


var state = {
  Patty: true,
  Cheese: true,
  Tomatoes: true,
  Onions: true,
  Lettuce: true
};
function renderAll() {
  pattyRend();
  cheeseRend();
 tomatoesRend();
 onionsRend();
 lettuceRend();

}

const price = document.querySelector(".price-details")
function pattyRend() {
  let patty = document.querySelector("#patty");

  if (state.Patty) {
    patty.style.display = "inherit";
  } else {
    patty.style.display = "none";

  }
}

function cheeseRend() {
  
  let cheese = document.querySelector("#cheese");
  
  if (state.Cheese) {
    cheese.style.display = "inherit";
  } else {
    cheese.style.display = "none";
  }
}

function tomatoesRend() {
  
  let tomato = document.querySelector("#tomato");
  
  if (state.Tomatoes) {
    tomato.style.display = "inherit";
  } else {
    tomato.style.display = "none";
  }
}

function onionsRend() {
  let onion = document.querySelector("#onion");
  
  if (state.Onions) {
    onion.style.display = "inherit";
  } else {
    onion.style.display = "none";
  }
}

function lettuceRend() {
  let lettuce = document.querySelector("#lettuce");
  
  if (state.Lettuce) {
    lettuce.style.display = "inherit";
  } else {
    lettuce.style.display = "none";
  }
}

document.querySelector(".btn-patty").onclick = function () {
  state.Patty = !state.Patty;
  renderPrice(state.Patty,ingredients.Patty)
  renderIngredientsBoard(state.Patty,document.querySelector(".item1"))
  renderButtons(state.Patty , document.querySelector(".btn-patty"))
  renderAll();
};

document.querySelector(".btn-cheese").onclick = function () {
  state.Cheese = !state.Cheese;
  renderPrice(state.Cheese,ingredients.Cheese)
  renderIngredientsBoard(state.Cheese,document.querySelector(".item2"))
  renderButtons(state.Cheese , document.querySelector(".btn-cheese"))
  renderAll();
};


document.querySelector(".btn-tomatoes").onclick = function () {
  state.Tomatoes = !state.Tomatoes;
  renderPrice(state.Tomatoes,ingredients.Tomatoes)
  renderIngredientsBoard(state.Tomatoes,document.querySelector(".item3"))
  renderButtons(state.Tomatoes , document.querySelector(".btn-tomatoes"))
  renderAll();
};



document.querySelector(".btn-onions").onclick = function () {
  state.Onions = !state.Onions;
  renderPrice(state.Onions,ingredients.Onions)
  renderIngredientsBoard(state.Onions,document.querySelector(".item4"))
  renderButtons(state.Onions , document.querySelector(".btn-onions"))
  renderAll();
};



document.querySelector(".btn-lettuce").onclick = function () {
  state.Lettuce = !state.Lettuce;
  renderPrice(state.Lettuce,ingredients.Lettuce)
  renderIngredientsBoard(state.Lettuce,document.querySelector(".item5"))
  renderButtons(state.Lettuce , document.querySelector(".btn-lettuce"))
  renderAll();
};



function renderButtons(s,b){
  if(s){
    b.classList.add("active")
  }else{
    b.classList.remove("active")
  }
}



function renderIngredientsBoard(s,i){
  if (s){
    i.style.display = "block"
  }else{
    i.style.display = "none"
  }
}




function renderPrice(s,Ingredient){
  var TotalPrice = Number(document.querySelector(".price-details").innerHTML)

  if (s){
    TotalPrice += Ingredient
  }else{
    TotalPrice -= Ingredient
  }

  document.querySelector(".price-details").innerHTML = TotalPrice
}


