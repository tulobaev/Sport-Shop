let total = 0;
let col = document.getElementById("col");
let price = document.getElementById("price");

function totalPrice(num) {
  total += num;
  col.innerHTML++;
  convertionTotal();
}
function canBtn(num) {
  if (total > 0) {
    total -= num;
    col.innerHTML--;
    convertionTotal();
  } else {
    alert("error");
  }
}
function convertionTotal() {
  price.innerHTML = total;
}

let items = document.querySelector(".items");
let input = document.querySelector(".input-text");

function addTask() {
  if (input.value === "") {
    alert("Пусто");
  } else {
    let li = document.createElement("li");
    li.style.listStyle = "none";
    li.style.marginLeft = "-40px";
    li.innerHTML = input.value;
    items.appendChild(li);
  }
  input.value = "";
}
