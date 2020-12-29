clr.addEventListener("click", () => {
 txtInput.value = "";
 txtAnswer.value = "";
});
del.addEventListener("click", () => {
 txtInput.value = txtInput.value.substring(0, txtInput.value.length - 1);
});
let allkeys = document.getElementsByClassName("keys");
for (let i = 0; i < allkeys.length; i++) {
 allkeys[i].addEventListener("click", () => {
  if (/[\-\+\/\*x÷][\-\+\/\*x÷]|[\-\+\/\*x÷]%/g.test(txtInput.value) || /^[\-\+\/\*x÷]/.test(txtInput.value))
   txtAnswer.value = "Math Error";
  else {
   if (/[a-wy-z]+/gi.test(txtInput.value)) txtAnswer.value = "Not a Number";
   else if (/[\-\+\/\*x÷]$/g.test(txtInput.value))
    txtAnswer.value = evaluate(
     txtInput.value.substring(0, txtInput.value.length - 1)
    );
   else txtAnswer.value = evaluate(txtInput.value);
  }
  if (txtInput.value == "") txtAnswer.value = "";
 });
}
txtInput.addEventListener("input", () => {
 if (/[\-\+\/\*x÷][\-\+\/\*x÷]|[\-\+\/\*x÷]%/g.test(txtInput.value) || /^[\-\+\/\*x÷]/.test(txtInput.value))
   txtAnswer.value = "Math Error";
 else {
  if (/[a-wy-z]+/gi.test(txtInput.value)) txtAnswer.value = "Not a Number";
  else if (/[\-\+\/\*x÷]$/g.test(txtInput.value))
   txtAnswer.value = evaluate(
    txtInput.value.substring(0, txtInput.value.length - 1)
   );
  else txtAnswer.value = evaluate(txtInput.value);
 }
 if (txtInput.value == "") txtAnswer.value = "";
});

document.querySelector(".equals").addEventListener("click", () => {
 txtInput.value = txtAnswer.value;
 txtAnswer.value = "";
});
