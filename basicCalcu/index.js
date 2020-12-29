for (let i = 0; i < 9; i++) {
 key.push(document.createElement("div"));
 key[i].classList = "keys";
 key[i].innerHTML = num;
 if (i == 3) {
  createDiv(add, "keys add", "+", container);
 }
 if (i == 6) {
  createDiv(minus, "keys minus", "-", container);
 }
 num = 7 + 2 == num || 7 - 1 == num ? num - 5 : num + 1;

 container.appendChild(key[i]);
}
createDiv(equals, "keys equals", "=", container);
createDiv(percent, "keys percent", "%", container);
createDiv(zero, "keys zero", 0, container);
createDiv(per, "keys period", ".", container);
// createDiv(pi,"keys pi","")
let addsel = document.querySelector(".add"),
 minsel = document.querySelector(".minus"),
 perSel = document.querySelector(".percent"),
 zerSel = document.querySelector(".zero"),
 periodSel = document.querySelector(".period");
let el = [addsel, minsel, perSel, zerSel, periodSel, divide, times];
clicked(el);
clicked(key);
