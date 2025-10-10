const tipusok = ["gyerek","felnott"];

let modal = document.getElementById("myModal");


let btn = document.getElementById("myBtn");


let span = document.getElementsByClassName("close")[0];

//felnott
let indexArray = []

for (let i = 0; i < 10; i++) {
  indexArray.push(i)

}

//gyerek
let indexArray2 = []

for (let i = 0; i < 10; i++) {
  indexArray2.push(i)
}

function randomArray() {
  indexArray.sort(() => Math.random() - 0.5);
  console.log(indexArray);
}


btn.onclick = function() {
  modal.style.display = "block";
}


span.onclick = function() {
  modal.style.display = "none";
}


window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

function gyerekkattintas() {
    gyerekmodal.style.display = "block";
    span.onclick = function() {
      gyerekmodal.style.display = "none";
    }
    window.onclick = function(event) {
      if(event.target == gyerekmodal) {
        gyerekmodal.style.display = "none";
      }
    }
}
function felnottkattintas() {
    felnottmodal.style.display = "block";
    span.onclick = function() {
      felnottmodal.style.display = "none";
    }
    window.onclick = function(event) {
      if(event.target == felnottmodal) {
        felnottmodal.style.display = "none";
      }
    }
}

//felnott
window.addEventListener("load", () => {
  alert("ok")
  randomArray();
  fetch("questions.json")
    .then(json => json.json())
    .then(json => {writeJson(json)});
})

function writeJson(json){
  indexArray.forEach(i => {
    const item = json[i]
    console.log(item.question)
    document.getElementById("datas").innerHTML = `<h3>${item.question}</h3>`;
    
    item.answers.forEach(element => {
      console.log(`Válasz: + ${element.text} - ${element.points}`)
      document.getElementById("datas").innerHTML = `<input type="radio" name="${item.question}" value="${element.points}">${element.text}<br>`;
      

    });
  });
}


//gyerek
document.getElementById("button2").addEventListener("click", () => {
  randomArray();
  fetch("questions2.json")
    .then(json => json.json())
    .then(json => {writeJson(json)});
})

function writeJson(json){
  indexArray2.forEach(i => {
    const items = json[i]
    console.log(items.question)
    items.answers.forEach(element => {
      console.log(`Válasz: + ${element.text} - ${element.points}`)

    });
  });
}

