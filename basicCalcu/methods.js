function createDiv(name, classLst, content, mother) {
 name = document.createElement("div");
 name.classList = classLst;
 name.innerHTML = content;
 mother.appendChild(name);
}

function clicked(element) {
 element.forEach((e)=>{
  e.addEventListener(
   "click",
   () => {(txtInput.value += e.innerHTML)}
  );
 });
 
}

function evaluate(exp) {
  
 function init() {
  //let initial = exp;
  var digitsArray = [],
   opsArray = [];
   exp = exp.replace(/(\d+)\%/g,(match,g1)=> g1/100);
  var dgt = /\d+\.\d+|\d+/g,
   ops = /[\-\+\*\/x÷]/g;
   
  var digitMatch, opsMatch;
  while ((digitMatch = dgt.exec(exp))) digitsArray.push(digitMatch[0]);
  while ((opsMatch = ops.exec(exp))) opsArray.push(opsMatch[0]);
  if (Number(digitsArray[0]) != Math.abs(Number(digitsArray[0])))
   opsArray.splice(0, 1);
  return [digitsArray, opsArray];
 }
 var data = init();
 function computeTimesDivide(input) {
  let v = [...input];
  for (let i = 0; i < v[1].length; i++) {
   while (v[1][i] == "x" || v[1][i] == "/" || v[1][i] == "÷" || v[1][i] == "*") {
    if (v[1][i] == "x" || v[1][i] == "*") {
     v[0][i] = Number(v[0][i]) * Number(v[0][i + 1]);
     v[0].splice(i + 1, 1);
     v[1].splice(i, 1);
    }
    if (v[1][i] == "/" v[1][i] == "÷") {
     v[0][i] = Number(v[0][i]) / Number(v[0][i + 1]);
     v[0].splice(i + 1, 1);
     v[1].splice(i, 1);
    }
   }
  }
  return v;
 }
 data = computeTimesDivide(data);
 function computeAddSub(input) {
  let v = [...input];
  for (let i = 0; i < v[1].length; i++) {
   while (v[1][i] == "+" || v[1][i] == "-") {
    if (v[1][i] == "+") {
     v[0][i] = Number(v[0][i]) + Number(v[0][i + 1]);
     v[0].splice(i + 1, 1);
     v[1].splice(i, 1);
    }
    if (v[1][i] == "-") {
     v[0][i] = Number(v[0][i]) - Number(v[0][i + 1]);
     v[0].splice(i + 1, 1);
     v[1].splice(i, 1);
    }
   }
  }
  return v[0][0];
 }
 return computeAddSub(data);
}
