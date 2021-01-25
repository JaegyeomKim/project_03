const custinfor = []

let ul = document.createElement("ul");
let arrayList = document.getElementById("js-arrayList");
arrayList.appendChild(ul);



function formSubmitEvent(){
  let name = document.getElementById("custname").value;
  let city = document.getElementById("city").value;
  let payment= document.getElementById("paymenttype").value;
  let newinfor = [name,city,payment]
  let newinforstr = newinfor.join(' ')
  custinfor.push(newinforstr)
}

function paintArray() {
  
    for (i=0; i < custinfor.length; i++) {
      let li = document.createElement("li");
      ul.appendChild(li);
      li.innerHTML = custinfor[i];
        }  
  custinfor.pop()
}



submit.addEventListener("click", formSubmitEvent);
submit.addEventListener("click", paintArray);